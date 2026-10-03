import { NavLink, Outlet } from "react-router-dom";
import classes from "./Profile.module.css";

const tabClass = ({ isActive }) =>
  isActive ? `${classes.tab} ${classes.active}` : classes.tab;

const Profile = () => {
  const ticketsCount = 0;

  return (
    <main className={classes.profile}>
      <h1 className={classes.title}>My Profile</h1>

      <nav className={classes.tabs}>
        <NavLink to="/profile" end className={tabClass}>
          Personal Information
        </NavLink>
        <NavLink to="/profile/tickets" className={tabClass}>
          My Tickets
          {ticketsCount > 0 && (
            <span className={classes.badge}>{ticketsCount}</span>
          )}
        </NavLink>
      </nav>

      <Outlet />
    </main>
  );
};

export default Profile;