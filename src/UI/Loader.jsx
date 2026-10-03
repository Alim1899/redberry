import classes from "./Loader.module.css";

const Loader = () => (
  <div className={classes.loader} role="status" aria-label="Loading">
    <span className={classes.spinner} />
  </div>
);

export default Loader;