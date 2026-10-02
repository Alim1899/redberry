import classes from "./Layout.module.css"
import Navbar from "../Navbar/Navbar"
import ModalRoot from "../Modals/ModalRoot"
const Layout = () => {
  return (
    <div className={classes.layout}>
      <Navbar/>
      <ModalRoot/>
    </div>
  )
}

export default Layout
