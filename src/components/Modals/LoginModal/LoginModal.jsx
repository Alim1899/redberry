import { useFormik } from "formik";
import * as Yup from "yup";
import useMovies from "../../../Context/useReducer";
import Modal from "../Modal";
import classes from "./LoginModal.module.css";

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

const validationSchema = Yup.object({
  email: Yup.string()
    .trim()
    .required("Email is required")
    .matches(EMAIL_REGEX, "Enter a valid email address"),
  password: Yup.string()
    .required("Password is required")
    .min(3, "Password must be at least 3 characters"),
});

const LoginModal = () => {
  const { dispatch } = useMovies();

  const close = () => dispatch({ type: "CLOSE_MODAL" });
  const openSignup = () => dispatch({ type: "OPEN_MODAL", payload: "signup" });

  const formik = useFormik({
    initialValues: { email: "", password: "" },
    validationSchema,
    validateOnMount: true,
    onSubmit: (values) => {
      console.log(values);
    },
  });

  const { values, errors, touched, handleChange, handleBlur, handleSubmit } =
    formik;

  const showError = (name) => touched[name] && errors[name];

  return (
    <Modal title="Log in" subtitle="Welcome back to Kino XII" onClose={close}>
      <form className={classes.form} onSubmit={handleSubmit} noValidate>
        <div className={classes.field}>
          <label htmlFor="email">Email</label>
          <input
            id="email"
            name="email"
            type="email"
            autoComplete="email"
            placeholder="example@gmail.com"
            value={values.email}
            onChange={handleChange}
            onBlur={handleBlur}
            className={showError("email") ? classes.invalid : ""}
          />
          {showError("email") && (
            <span className={classes.error}>{errors.email}</span>
          )}
        </div>

        <div className={classes.field}>
          <label htmlFor="password">Password</label>
          <input
            id="password"
            name="password"
            type="password"
            autoComplete="current-password"
            placeholder="••••••••"
            value={values.password}
            onChange={handleChange}
            onBlur={handleBlur}
            className={showError("password") ? classes.invalid : ""}
          />
          {showError("password") && (
            <span className={classes.error}>{errors.password}</span>
          )}
        </div>

        <button
          type="submit"
          className={classes.submit}
          disabled={!formik.isValid}
        >
          Log in
        </button>

        <p className={classes.switch}>
          Don't have an account?{" "}
          <button type="button" onClick={openSignup}>
            Sign up
          </button>
        </p>
      </form>
    </Modal>
  );
};

export default LoginModal;