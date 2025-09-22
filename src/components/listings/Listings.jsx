import classes from "./Listings.module.css";
import filter from "../../assets/svg/filter.svg";
import down from "../../assets/svg/down.svg";
import border from "../../assets/svg/horizontal.svg";
import { useEffect, useState } from "react";
import Card from "./Card";

const Listings = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("https://api.redseam.redberryinternship.ge/api/products")
      .then((res) => res.json())
      .then((data) => setData(data.data))
      .catch((err) => console.error(err));
  }, []);

  return (
    <div className={classes.listings}>
      <div className={classes.header}>
        <h1 className={classes.head}>Products</h1>
        <div className={classes.controls}>
          <h6>Showing 1-10 of 100 results</h6>
          <img className={classes.border} alt="border" src={border} />
          <div className={classes.filter}>
            <img alt="filter" src={filter} />
            <h4>Filter</h4>
            <h4>Sort by</h4>
            <img alt="down" src={down} />
          </div>
        </div>
      </div>
      <div className={classes.cards}>
        {data.length > 0 ? (
          data.map((el) => {
            return (
              <Card
                key={el.id}
                img={el.cover_image}
                name={el.name}
                price={el.price}
              />
            );
          })
        ) : (
          <h1>Loading...</h1>
        )}
      </div>
    </div>
  );
};

export default Listings;
