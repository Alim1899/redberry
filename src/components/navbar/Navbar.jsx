import useData from "../context/useData";
import { Link } from "react-router-dom";
import classes from "./Navbar.module.css";
import logo from "../../assets/photos/logo.png";
import cart from "../../assets/svg/cart.svg";
import user from "../../assets/svg/user.svg";
import down from "../../assets/svg/down.svg";
import avatar from "../../assets/photos/avatar.png";

const Navbar = () => {
  const { state } = useData();
  const { loggedIn } = state;
  return (
    <div className={classes.navbar}>
      <div className={classes.logo}>
        <Link to="/">
          <img className={classes.icon} alt="logo" src={logo}></img>
        </Link>
        <h2>RedSeam Clothing</h2>
      </div>
      {loggedIn ? (
        <div className={classes.cart}>
          <img className={classes.icon} alt="cart" src={cart} />
          <img className={classes.icona} alt="avatar" src={avatar} />
          <img className={classes.icon} alt="down" src={down} />
        </div>
      ) : (
        <div className={classes.login}>
          <Link to="login">
            <img alt="user" src={user} /> <h4>Log in</h4>
          </Link>
        </div>
      )}
    </div>
  );
};

export default Navbar;
