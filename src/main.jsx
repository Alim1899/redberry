import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import Layout from "./components/Layout/Layout.jsx";
import MovieProvider from "./Context/MovieProvider.jsx";
import "./main.css"
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <MovieProvider>
      <Layout />
    </MovieProvider>
  </StrictMode>,
);
