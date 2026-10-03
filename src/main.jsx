import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import MovieProvider from "./Context/MovieProvider.jsx";
import router from "./router/router.jsx";
import { RouterProvider } from "react-router-dom";
import "./main.css"
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <MovieProvider>
      <RouterProvider router={router}/>
    </MovieProvider>
  </StrictMode>,
);
