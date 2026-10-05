import { useReducer, useEffect } from "react";
import movieReducer, { initialState } from "./movieReducer"; // Ensure this is correct
import MovieContext from "./MovieContext"; // Import from the new file
import { getCurrentUser, getFilterOptions } from "../api/Auth";

const MovieProvider = ({ children }) => {
  const [state, dispatch] = useReducer(movieReducer, initialState);
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) return;

    getCurrentUser(token)
      .then((res) => dispatch({ type: "USER_LOADED", payload: res.data }))
      .catch((err) => {
        if (err.status === 401) localStorage.removeItem("token");
        dispatch({ type: "LOGOUT" });
      });
  }, []);

  useEffect(() => {
    getFilterOptions()
      .then((res) =>
        dispatch({ type: "FILTER_OPTIONS_LOADED", payload: res.data }),
      )
      .catch((err) => console.error(err));
  }, []);
  return (
    <MovieContext.Provider value={{ state, dispatch }}>
      {children}
    </MovieContext.Provider>
  );
};

export default MovieProvider;
