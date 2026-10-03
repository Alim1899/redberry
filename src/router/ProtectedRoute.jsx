import { Navigate, Outlet } from "react-router-dom";
import useMovies from '../Context/useReducer'
const ProtectedRoute = () => {
  const { state } = useMovies();
  return state.token ? <Outlet /> : <Navigate to="/" replace />;
};

export default ProtectedRoute;