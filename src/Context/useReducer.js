import { useContext } from "react";
import MovieContext from "./MovieContext"; // Adjust the path if needed

const useMovies = () => {
  const context = useContext(MovieContext);
  if (!context) {
    throw new Error("useAuth must be used within a MovieProvider");
  }
  return context;
};

export default useMovies;
