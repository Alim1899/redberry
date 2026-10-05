import { useCallback, useMemo } from "react";
import { useSearchParams } from "react-router-dom";
import useMovies from "../Context/useReducer";

export const DEFAULT_SORT = "time_asc";

// filter name -> key in the browser URL
const URL_KEYS = {
  venues: "venue",
  formats: "format",
  languages: "language",
  bands: "time",
};
const LIST_FILTERS = Object.keys(URL_KEYS);

const pad = (n) => String(n).padStart(2, "0");
const toDateString = (d) =>
  `${d.getFullYear()}-${pad(d.getMonth() + 1)}-${pad(d.getDate())}`;

const getNextDays = (count) =>
  Array.from({ length: count }, (_, i) => {
    const d = new Date();
    d.setDate(d.getDate() + i);
    return toDateString(d);
  });

const readList = (params, key) =>
  params.get(key)?.split(",").filter(Boolean) ?? [];

// null = no venue selected, so every format is available
const getAvailableFormats = (options, venues) => {
  if (!options || venues.length === 0) return null;
  const slugs = new Set();
  options.venues
    .filter((v) => venues.includes(v.slug))
    .forEach((v) => v.formats.forEach((f) => slugs.add(f.slug)));
  return slugs;
};

const only = (values, known) =>
  known ? values.filter((v) => known.includes(v)) : values;

const useSessionFilters = () => {
  const { state } = useMovies();
  const options = state.filterOptions;
  const [searchParams, setSearchParams] = useSearchParams();

  const days = useMemo(() => getNextDays(7), []);
  const today = days[0];

  // The URL is the only source of truth. Invalid values are ignored here.
  const filters = useMemo(() => {
    const venues = only(
      readList(searchParams, "venue"),
      options?.venues.map((v) => v.slug),
    );
    const allowed = getAvailableFormats(options, venues);
    const formats = only(
      readList(searchParams, "format"),
      options?.formats.map((f) => f.slug),
    ).filter((f) => !allowed || allowed.has(f));
    const languages = only(
      readList(searchParams, "language"),
      options?.languages.map((l) => l.slug),
    );
    const bands = only(
      readList(searchParams, "time"),
      options?.timeBands.map((b) => b.id),
    );

    const date = searchParams.get("date");
    const sort = searchParams.get("sort");
    const page = Number(searchParams.get("page"));
    const knownSorts = options?.sorts.map((s) => s.id);

    return {
      venues,
      formats,
      languages,
      bands,
      date: days.includes(date) ? date : today,
      sort:
        sort && (!knownSorts || knownSorts.includes(sort))
          ? sort
          : DEFAULT_SORT,
      page: Number.isInteger(page) && page > 0 ? page : 1,
    };
  }, [searchParams, options, days, today]);

  // One place writes the URL. Every change resets the page to 1.
  const commit = useCallback(
    (changes, { replace = false } = {}) => {
      const next = { ...filters, page: 1, ...changes };

      const allowed = getAvailableFormats(options, next.venues);
      if (allowed) next.formats = next.formats.filter((f) => allowed.has(f));

      const params = new URLSearchParams();
      LIST_FILTERS.forEach((name) => {
        if (next[name].length) params.set(URL_KEYS[name], next[name].join(","));
      });
      if (next.date !== today) params.set("date", next.date);
      if (next.sort !== DEFAULT_SORT) params.set("sort", next.sort);
      if (next.page > 1) params.set("page", String(next.page));

      setSearchParams(params.toString().replace(/%2C/g, ","), { replace });
    },
    [filters, options, today, setSearchParams],
  );

  const toggle = (name, value) => {
    const current = filters[name];
    commit({
      [name]: current.includes(value)
        ? current.filter((v) => v !== value)
        : [...current, value],
    });
  };

  const activeCount = LIST_FILTERS.reduce(
    (sum, name) => sum + filters[name].length,
    0,
  );

  return {
    filters,
    days,
    activeCount, // "X filters active" (date and sort are not counted)
    availableFormats: getAvailableFormats(options, filters.venues),
    toggle, // toggle("venues" | "formats" | "languages" | "bands", slug)
    setDate: (date) => commit({ date }),
    setSort: (sort) => commit({ sort }),
    setPage: (page, options) => commit({ page }, options),
    // everything except the date (and the sort, which is not a filter)
    clearAll: () =>
      commit({ venues: [], formats: [], languages: [], bands: [] }),
  };
};

export default useSessionFilters;
