import useMovies from "../../../Context/useReducer";
import MovieSessions from "./MovieSessions";
import arrowDown from "../../../assets/arrowDown.svg";
import classes from "./Sessions.module.css";
import Pagination from "../../../UI/Pagination/Pagination";

const Sessions = ({
  groups,
  meta,
  loading,
  error,
  sort,
  setSort,
  page,
  setPage,
}) => {
  const { state } = useMovies();
  const sorts = state.filterOptions?.sorts ?? [];
  console.log(groups, meta, loading, error, sort, setSort, page, setPage);
  const changePage = (next) => {
    setPage(next);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const total = meta?.totalSessions;
  const countText =
    total == null
      ? ""
      : total === 0
        ? "No sessions found"
        : `Showing ${total} session${total === 1 ? "" : "s"}`;

  return (
    <section className={classes.sessions}>
      <div className={classes.toolbar}>
        <p className={classes.count}>{countText}</p>

        {sorts.length > 0 && (
          <label className={classes.sort}>
            <span>Sort:</span>
            <span className={classes.selectWrap}>
              <select value={sort} onChange={(e) => setSort(e.target.value)}>
                {sorts.map((option) => (
                  <option key={option.id} value={option.id}>
                    {option.label}
                  </option>
                ))}
              </select>
              <img src={arrowDown} alt="" />
            </span>
          </label>
        )}
      </div>

      {error ? (
        <p className={classes.message}>
          Could not load sessions. Please try again.
        </p>
      ) : loading && groups.length === 0 ? (
        <p className={classes.message}>Loading sessions...</p>
      ) : (
        groups.length > 0 && (
          <>
            {/* the old list stays visible (dimmed) while a new one loads */}
            <div className={`${classes.list} ${loading ? classes.dimmed : ""}`}>
              {groups.map((group) => (
                <MovieSessions key={group.movie.id} group={group} />
              ))}
            </div>

            <Pagination
              page={page}
              totalPages={meta?.lastPage ?? 1}
              onChange={changePage}
            />
          </>
        )
      )}
    </section>
  );
};

export default Sessions;
