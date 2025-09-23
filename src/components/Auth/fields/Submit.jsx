import classes from "./Fields.module.css";
const Submit = ({ text }) => {
  return <button className={classes.button}>{text}</button>;
};

export default Submit;
