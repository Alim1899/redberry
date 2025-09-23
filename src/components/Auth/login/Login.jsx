import cover from "../../../assets/photos/cover.png";
import eye from "../../../assets/svg/eye.svg";
import InputField from "../fields/InputField";
import Submit from "../fields/Submit";
import classes from "./Login.module.css";
const Login = () => {
  const validateRedberryEmail = (email) => {
    if (!email) return "";
    const regex = /^[a-zA-Z0-9._%+-]+@redberry\.ge$/;
    return regex.test(email) ? "" : "Email must end with @redberry.ge";
  };
  return (
    <div className={classes.login}>
      <img alt="cover" src={cover} />
      <div className={classes.fields}>
        <div className={classes.loginWrap}>
          <h2>Log in</h2>
          <InputField
            label="Email"
            type="email"
            required
            validate={validateRedberryEmail}
          />

          <InputField label="Password" type="password" required icon={eye} />
          <Submit text="Log in" />
          <h3 className={classes.register}>
            Not a member? <span>Register</span>
          </h3>
        </div>
      </div>
    </div>
  );
};

export default Login;
