import { Link } from "react-router-dom";
import classes from "./NotFound.module.css";

const NotFound = () => {
  return (
    <main className={classes.notFound}>
      <h1 className={classes.title}>Page not found</h1>
      <Link to="/" className={classes.button}>
        Back to home
      </Link>
    </main>
  );
};

export default NotFound;