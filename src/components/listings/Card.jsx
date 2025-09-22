import classes from "./Listings.module.css";
const Card = ({ img, name, price }) => {
  return (
    <div className={classes.card}>
      <img alt={`img-${name}`} src={img} />
      <h3>{name}</h3>
      <h4>& {price}</h4>
    </div>
  );
};

export default Card;
