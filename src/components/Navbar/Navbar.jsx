import classes from "./Navbar.module.css";
import useMovies from "../../Context/useReducer";
import searchIcon from "../../assets/search.svg";

const Navbar = () => {
  const { state, dispatch } = useMovies();
  const { searchQuery } = state;

  const searchHandler = (e) => {
    dispatch({ type: "SEARCHING", payload: e.target.value });
  };

  return (
    <nav className={classes.navbar}>
      <section className={classes.leftBar}>
        <h1 className={classes.logo}>
          KINO <span>XII</span>
        </h1>
        <h2 className={classes.sessions}>SESSIONS</h2>
      </section>

      <section className={classes.rightBar}>
        <label className={classes.searchBox}>
          <img src={searchIcon} alt="" className={classes.searchIcon} />
          <input
            type="text"
            value={searchQuery}
            onChange={searchHandler}
            placeholder="Search films and live events"
            className={classes.search}
          />
        </label>
        <button type="button" className={classes.signup}>
          Sign up
        </button>
        <button type="button" className={classes.login}>
          Log in
        </button>
      </section>
    </nav>
  );
};

export default Navbar;
