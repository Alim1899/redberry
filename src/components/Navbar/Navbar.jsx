import classes from "./Navbar.module.css";
import useMovies from "../../Context/useReducer";
import searchIcon from "../../assets/search.svg";
import UserMenu from "./UserMenu/UserMenu";
const Navbar = () => {
  const { state, dispatch } = useMovies();
  const { searchQuery, token } = state;

  const searchHandler = (e) => {
    dispatch({ type: "SEARCHING", payload: e.target.value });
  };
  const modalHandler = (name) => {
    dispatch({ type: "OPEN_MODAL", payload: name });
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

        {!token && (
          <div className={classes.buttons}>
            <button
              type="button"
              className={classes.signup}
              onClick={() => modalHandler("signup")}
            >
              Sign up
            </button>
            <button
              type="button"
              className={classes.login}
              onClick={() => modalHandler("login")}
            >
              Log in
            </button>
          </div>
        )}

        {token && <UserMenu />}
      </section>
    </nav>
  );
};

export default Navbar;
