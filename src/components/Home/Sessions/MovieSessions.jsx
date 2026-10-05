import SessionCard from "./SessionCard";
import classes from "./Sessions.module.css";

const MovieSessions = ({ group }) => {
  const { movie, sessions } = group;

  return (
    <article className={classes.movie}>
      <header className={classes.header}>
        <img src={movie.posterUrl} alt="" className={classes.poster} />
        <div>
          <div className={classes.titleRow}>
            <h2 className={classes.title}>{movie.title}</h2>
            {movie.ageRating && (
              <span className={classes.age}>{movie.ageRating.code}</span>
            )}
          </div>
          <p className={classes.duration}>{movie.runtimeMinutes} min</p>
        </div>
      </header>

      <div className={classes.row}>
        {sessions.map((session) => (
          <SessionCard key={session.id} session={session} />
        ))}
      </div>
    </article>
  );
};

export default MovieSessions;