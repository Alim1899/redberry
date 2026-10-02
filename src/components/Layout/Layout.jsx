import classes from "./Layout.module.css"
import Navbar from "../Navbar/Navbar"
const Layout = () => {
  return (
    <div className={classes.layout}>
      <Navbar/>
    </div>
  )
}

export default Layout
