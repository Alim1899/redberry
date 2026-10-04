import { useEffect, useRef, useState } from "react";
import useMovies from "../../../Context/useReducer";
import classes from "./UserMenu.module.css";
import arrowUp from "../../../assets/arrowUp.svg";
import arrowDown from "../../../assets/arrowDown.svg";
import logoutIcon from "../../../assets/logout.svg";
import ticketsIcon from "../../../assets/tickets.svg";
import userIcon from "../../../assets/user.svg";
import { logout } from "../../../api/Auth";
import { Link } from "react-router-dom";

const getInitials = (fullName, username) => {
  const name = fullName?.trim();

  if (name) {
    const words = name.split(/\s+/);
    if (words.length > 1) {
      return (words[0][0] + words[words.length - 1][0]).toUpperCase();
    }
    return name.slice(0, 2).toUpperCase(); 
  }

  return (username ?? "").slice(0, 2).toUpperCase();
};

const Avatar = ({ src, initials, showDot }) => (
  <span className={classes.avatar}>
    {src ? <img src={src} alt="" /> : initials}
    {showDot && <span className={classes.dot} />}
  </span>
);

const UserMenu = () => {
  const { state, dispatch } = useMovies();
  const { user } = state;
  const [open, setOpen] = useState(false);
  const ref = useRef(null);
 const displayName = user?.fullName?.trim() || user?.username || "";
const firstName = displayName.split(" ")[0];
const initials = getInitials(user?.fullName, user?.username);

const profileComplete = user?.profileComplete ?? false;

  useEffect(() => {
    if (!open) return;

    const onMouseDown = (e) => {
      if (!ref.current?.contains(e.target)) setOpen(false);
    };
    const onKeyDown = (e) => {
      if (e.key === "Escape") setOpen(false);
    };

    document.addEventListener("mousedown", onMouseDown);
    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.removeEventListener("mousedown", onMouseDown);
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [open]);

  const logoutHandler = async () => {
    try {
      await logout(state.token);
    } catch (err) {
      console.error(err);
    } finally {
      localStorage.removeItem("token");
      dispatch({ type: "LOGOUT" });
      setOpen(false);
    }
  };
  return (
    <div className={classes.userMenu} ref={ref}>
      <button
        type="button"
        className={classes.trigger}
        onClick={() => setOpen((prev) => !prev)}
        aria-expanded={open}
      >
        <Avatar
          src={user?.avatar}
          initials={initials}
          showDot={!profileComplete}
        />
        <span className={classes.name}>{firstName}</span>
        <img
          src={open ? arrowUp : arrowDown}
          alt=""
          className={classes.arrow}
        />
      </button>

      {open && (
        <div className={classes.dropdown}>
          <div className={classes.header}>
            <Avatar
              src={user?.avatar}
              initials={initials}
              showDot={!profileComplete}
            />
            <div className={classes.info}>
              <p className={classes.fullName}>{displayName}</p>
              <p className={classes.email}>{user?.email}</p>
            </div>
          </div>

          {profileComplete ? (
            <div className={`${classes.notice} ${classes.complete}`}>
              <p className={classes.noticeTitle}>Profile complete ✓</p>
            </div>
          ) : (
            <div className={classes.notice}>
              <p className={classes.noticeTitle}>Profile incomplete</p>
              <p className={classes.noticeText}>
                Please complete your profile to enable booking
              </p>
            </div>
          )}

          <Link
            to="/profile"
            className={classes.item}
            onClick={() => setOpen(false)}
          >
            <img src={userIcon} alt="" />
            My Profile
          </Link>

          <Link
            to="/profile/tickets"
            className={classes.item}
            onClick={() => setOpen(false)}
          >
            <img src={ticketsIcon} alt="" />
            My Tickets
          </Link>

          <div className={classes.divider} />

          <button
            type="button"
            className={`${classes.item} ${classes.logout}`}
            onClick={logoutHandler}
          >
            <img src={logoutIcon} alt="" />
            Log out
          </button>
        </div>
      )}
    </div>
  );
};

export default UserMenu;
