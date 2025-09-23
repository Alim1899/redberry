import { useReducer } from "react";
import userReducer, { initialState } from "./userReducer";
import UserContext from "./UserContext";
const UserProvider = ({ children }) => {
  const [state, dispatch] = useReducer(userReducer, initialState);

  return (
    <UserContext.Provider value={{ state, dispatch }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserProvider;
