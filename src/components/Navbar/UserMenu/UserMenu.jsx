import { useEffect, useRef, useState } from "react";
import useMovies from "../../../Context/useReducer";
import classes from "./UserMenu.module.css";
import arrowUp from "../../../assets/arrowUp.svg";
import arrowDown from "../../../assets/arrowDown.svg";
import logoutIcon from "../../../assets/logout.svg";
import ticketsIcon from "../../../assets/tickets.svg";
import userIcon from "../../../assets/user.svg";


const getInitials = (fullName) =>
  fullName
    .split(" ")
    .map((word) => word[0])
    .slice(0, 2)
    .join("")
    .toUpperCase();

const Avatar = ({ src, initials, showDot }) => (
  <span className={classes.avatar}>
    {src ? <img src={src} alt="" /> : initials}
    {showDot && <span className={classes.dot} />}
  </span>
);

const UserMenu = () => {
  const { state, dispatch } = useMovies();
  const {user} = state
  const [open, setOpen] = useState(false);
  const ref = useRef(null);
  const currentUser = state.user;
  const fullName = currentUser?.fullName ?? user?.username;
  const firstName = fullName?.split(" ")[0];
  const initials = getInitials(fullName);
  const profileComplete = currentUser?.profileComplete ?? false;

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

  const logoutHandler = () => {
    localStorage.removeItem("token");
    dispatch({ type: "LOGOUT" });
    setOpen(false);
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
          src={currentUser?.avatar}
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
              src={currentUser?.avatar}
              initials={initials}
              showDot={!profileComplete}
            />
            <div className={classes.info}>
              <p className={classes.fullName}>{fullName}</p>
              <p className={classes.email}>{currentUser?.email}</p>
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

          {/* TODO: router დამატებისას Link-ებით ჩაანაცვლე */}
          <button type="button" className={classes.item}>
            <img src={userIcon} alt="" />
            My Profile
          </button>
          <button type="button" className={classes.item}>
            <img src={ticketsIcon} alt="" />
            My Tickets
          </button>

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