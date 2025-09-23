import { useContext } from "react";
import UserContext from "./UserContext";
const useData = () => {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error("useData must be used within a UserProvider");
  }
  return context;
};
export default useData;
