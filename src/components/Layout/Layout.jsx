import classes from "./Layout.module.css";
import Navbar from "../Navbar/Navbar";
import { Toaster } from "react-hot-toast";
import ModalRoot from "../Modals/ModalRoot";
import useMovies from "../../Context/useReducer";
import Loader from "../../UI/Loader";
const Layout = () => {
  const { state } = useMovies();
  if (state.isLoadingUser) {
    return <Loader />;
  }
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
