import { createBrowserRouter } from "react-router-dom";
import Layout from "../components/Layout/Layout";
import Details from "../components/Profile/Details/Details";
import Tickets from "../components/Profile/Tickets/Tickets";
import ProtectedRoute from "./ProtectedRoute";
import Profile from "../components/Profile/Profile";
import NotFound from "../components/NotFound/NotFound";
import Home from "../components/Home/Home";

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
      { path: "*", element: <NotFound /> },
    ],
  },
]);

export default router;
