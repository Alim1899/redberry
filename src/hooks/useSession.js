import { useEffect, useState } from "react";
import { buildSessionsQuery, getSessions } from "../api/Auth";
const useSessions = (filters) => {
  const query = buildSessionsQuery(filters);

  // each result remembers which query it belongs to
  const [result, setResult] = useState({
    query: null,
    data: null,
    meta: null,
    error: null,
  });

  useEffect(() => {
    const controller = new AbortController();
    let ignore = false; // a slow old response must not overwrite a newer one

    getSessions(query, { signal: controller.signal })
      .then((res) => {
        if (!ignore)
          setResult({ query, data: res.data, meta: res.meta, error: null });
      })
      .catch((error) => {
        if (!ignore) setResult((prev) => ({ ...prev, query, error }));
      });

    return () => {
      ignore = true;
      controller.abort();
    };
  }, [query]); // a string, so the effect runs only when the query really changes

  return {
    groups: result.data ?? [], // previous list stays visible while loading
    meta: result.meta,
    loading: result.query !== query,
    error: result.error,
  };
};

export default useSessions;
