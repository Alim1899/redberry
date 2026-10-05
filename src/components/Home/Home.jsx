import Filters from "./Filters/Filters";
import Sessions from "./Sessions/Sessions";
import useSession from "../../hooks/useSession";
import useSessionFilters from "../../hooks/useSessionFilter";
import classes from "./Home.module.css";
import { useEffect } from "react";

const Home = () => {
  const {
    filters,
    days,
    activeCount,
    availableFormats,
    toggle,
    setDate,
    setSort,
    setPage,
    clearAll,
  } = useSessionFilters();

  const { groups, meta, loading, error } = useSession(filters);

  useEffect(() => {
    // !loading: wait until meta belongs to the current URL, not the previous one
    if (meta && !loading && filters.page > meta.lastPage) {
      setPage(Math.max(meta.lastPage, 1), { replace: true });
    }
  }, [meta, loading, filters.page, setPage]);
  return (
    <main className={classes.home}>
      <header className={classes.header}>
        <h1>Sessions</h1>
        <p>Browse showtimes across all venues</p>
      </header>

      <div className={classes.layout}>
        <Filters
          filters={filters}
          days={days}
          activeCount={activeCount}
          availableFormats={availableFormats}
          toggle={toggle}
          setDate={setDate}
          clearAll={clearAll}
        />
        <Sessions
          groups={groups}
          meta={meta}
          loading={loading}
          error={error}
          sort={filters.sort}
          setSort={setSort}
          page={filters.page}
          setPage={setPage}
        />
      </div>
    </main>
  );
};

export default Home;
