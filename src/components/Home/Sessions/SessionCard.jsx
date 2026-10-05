import { Link } from "react-router-dom";
import classes from "./Sessions.module.css";

const LOW_SEATS = 5; // this many seats or fewer: red

const SessionCard = ({ session }) => {
  const { id, time, price, seatsLeft, isSoldOut, format, language, hall, venue } =
    session;

  const content = (
    <>
      <div className={classes.top}>
        <span className={classes.time}>{time}</span>
        <span className={classes.format}>{format.name}</span>
      </div>

      <div className={classes.middle}>
        <span className={classes.language}>{language.name}</span>
        {isSoldOut ? (
          <span className={classes.soldOutText}>Sold out</span>
        ) : (
          <span
            className={`${classes.seats} ${
              seatsLeft <= LOW_SEATS ? classes.low : ""
            }`}
          >
            {seatsLeft} left
          </span>
        )}
      </div>

      <div className={classes.bottom}>
        <span className={classes.venue}>
          {venue.name} · Hall {hall.name}
        </span>
        <span className={classes.price}>₾{price}</span>
      </div>
    </>
  );

  // sold out: not clickable
  if (isSoldOut) {
    return (
      <div className={`${classes.card} ${classes.soldOut}`} aria-disabled="true">
        {content}
      </div>
    );
  }

  return (
    <Link to={`/sessions/${id}`} className={classes.card}>
      {content}
    </Link>
  );
};

export default SessionCard;