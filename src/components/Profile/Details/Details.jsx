import useMovies from "../../../Context/useReducer";
import classes from "./Details.module.css";

const Details = () => {
  const { state } = useMovies();
  const user = state.user;

  return (
    <section className={classes.details}>
      <h2>Details</h2>
      <p>Username: {user?.username}</p>
      <p>Email: {user?.email}</p>
    </section>
  );
};

export default Details;