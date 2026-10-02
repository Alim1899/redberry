import { useReducer } from "react";
import movieReducer, { initialState } from "./movieReducer"; // Ensure this is correct
import MovieContext from "./MovieContext"; // Import from the new file

const MovieProvider = ({ children }) => {
  const [state, dispatch] = useReducer(movieReducer, initialState);

  return (
    <MovieContext.Provider value={{ state, dispatch }}>
      {children}
    </MovieContext.Provider>
  );
};



export default MovieProvider;
