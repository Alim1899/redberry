import useMovies from "../../Context/useReducer";
import LoginModal from "./LoginModal/LoginModal";
import SignupModal from "./SignupModal/SignupModal";
const MODALS = {
  login: LoginModal,
  signup: SignupModal,
};

const ModalRoot = () => {
  const { state } = useMovies();
  const ActiveModal = MODALS[state.activeModal];

  return ActiveModal ? <ActiveModal /> : null;
};

export default ModalRoot;