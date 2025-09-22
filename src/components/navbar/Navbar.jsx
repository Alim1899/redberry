import classes from "./Navbar.module.css";
import logo from "../../assets/photos/logo.png";
import cart from "../../assets/svg/cart.svg";
import down from "../../assets/svg/down.svg";
import avatar from "../../assets/photos/avatar.png";

const Navbar = () => {
  return (
    <div className={classes.navbar}>
      <div className={classes.logo}>
        <img className={classes.icon} alt="logo" src={logo}></img>
        <h2>RedSeam Clothing</h2>
      </div>
      <div className={classes.cart}>
        <img className={classes.icon} alt="cart" src={cart} />
        <img className={classes.icona} alt="avatar" src={avatar} />
        <img className={classes.icon} alt="down" src={down} />
      </div>
    </div>
  );
};

export default Navbar;
