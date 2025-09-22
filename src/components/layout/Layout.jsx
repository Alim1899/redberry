import Navbar from "../navbar/Navbar";
import classes from "./Layout.module.css";
import Listings from "../listings/Listings";
const Layout = () => {
  return (
    <div className={classes.layout}>
      <Navbar />
      <Listings />
    </div>
  );
};

export default Layout;
