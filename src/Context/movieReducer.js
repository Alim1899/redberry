export const STEPS = {
  ENTER_DETAILS: "enter_details",
  CHECKING_DETAILS: "checking_details",
  AUTHORIZED: "authorized",
};

const token = localStorage.getItem("token");

export const initialState = {
  searchQuery: "",
  token,
  isCheckingDetails: false,
  error: null,
  activeModal: "null",
};

const movieReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SEARCHING":
      return { ...state, searchQuery: action.payload };

    case "LOGIN_START":
      return { ...state, isCheckingDetails: true, error: null };

    case "LOGIN_SUCCESS":
      return {
        ...state,
        token: action.payload,
        isCheckingDetails: false,
        error: null,
      };

    case "LOGIN_FAILURE":
      return {
        ...state,
        token: null,
        isCheckingDetails: false,
        error: action.payload,
      };

    case "LOGOUT":
      return { ...state, token: null, isCheckingDetails: false, error: null };

    case "OPEN_MODAL":
      return { ...state, activeModal: action.payload };
    case "CLOSE_MODAL":
      return { ...state, activeModal: null };
    default:
      return state;
  }
};

// Selectors: step და isLoggedIn ტოკენიდან გამოითვლება
export const selectIsLoggedIn = (state) => !!state.token;

export const selectStep = (state) =>
  state.isCheckingDetails
    ? STEPS.CHECKING_DETAILS
    : state.token
      ? STEPS.AUTHORIZED
      : STEPS.ENTER_DETAILS;

export default movieReducer;
