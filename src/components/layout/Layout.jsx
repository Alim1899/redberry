import Navbar from "../navbar/Navbar";
import classes from "./Layout.module.css";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div className={classes.layout}>
      <Navbar />
      <Outlet />
    </div>
  );
};

export default Layout;
