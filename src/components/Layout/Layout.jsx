import classes from "./Layout.module.css";
import Navbar from "../Navbar/Navbar";
import { Toaster } from "react-hot-toast";

import ModalRoot from "../Modals/ModalRoot";
const Layout = () => {
  return (
    <div className={classes.layout}>
      <Navbar />
      <ModalRoot />
      <Toaster
        position="top-center"
        toastOptions={{
          style: {
            background: "var(--white)",
            color: "var(--modal-background)",
          },
        }}
      />
    </div>
  );
};

export default Layout;
