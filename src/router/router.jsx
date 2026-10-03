import { createBrowserRouter } from "react-router-dom";
import Layout from "../components/Layout/Layout";
import Home from "../components/Home/Home";
import Details from "../components/Profile/Details/Details";
import Tickets from "../components/Profile/Tickets/Tickets";
import ProtectedRoute from "./ProtectedRoute";
import Profile from "../components/Profile/Profile";

const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      { path: "/", element: <Home /> },
      {
        element: <ProtectedRoute />,
        children: [
          {
            path: "/profile",
            element: <Profile />,
            children: [
              { index: true, element: <Details /> },
              { path: "tickets", element: <Tickets /> },
            ],
          },
        ],
      },
    ],
  },
]);

export default router;