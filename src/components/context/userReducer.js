const initialState = {
  loggedIn: false,
  products: [],
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case "USER_LOGGED_IN":
      return {
        ...state,
        loggedIn: action.loggedIn,
      };
    default:
      return state;
  }
};

export { initialState };
export default userReducer;
