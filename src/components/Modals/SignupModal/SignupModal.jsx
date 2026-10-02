import { useFormik } from "formik";
import * as Yup from "yup";
import useMovies from "../../../Context/useReducer";
import Modal from "../Modal";
import classes from "./SignupModal.module.css";

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
const ALLOWED_IMAGE_TYPES = ["image/jpeg", "image/png", "image/webp"];

const validationSchema = Yup.object({
  username: Yup.string()
    .trim()
    .required("Username is required")
    .min(3, "Username must be at least 3 characters"),
  email: Yup.string()
    .trim()
    .required("Email is required")
    .matches(EMAIL_REGEX, "Enter a valid email address"),
  password: Yup.string()
    .required("Password is required")
    .min(3, "Password must be at least 3 characters"),
  confirmPassword: Yup.string()
    .required("Please confirm your password")
    .oneOf([Yup.ref("password")], "Passwords do not match"),
  avatar: Yup.mixed()
    .nullable()
    .test(
      "file-type",
      "Only JPG, PNG or WEBP images are allowed",
      (file) => !file || ALLOWED_IMAGE_TYPES.includes(file.type),
    ),
});

const TextField = ({ formik, name, label, type = "text", ...rest }) => {
  const error = formik.touched[name] && formik.errors[name];

  return (
    <div className={classes.field}>
      <label htmlFor={name}>{label}</label>
      <input
        id={name}
        name={name}
        type={type}
        value={formik.values[name]}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        className={error ? classes.invalid : ""}
        {...rest}
      />
      {error && <span className={classes.error}>{error}</span>}
    </div>
  );
};

const SignupModal = () => {
  const { dispatch } = useMovies();

  const close = () => dispatch({ type: "CLOSE_MODAL" });
  const openLogin = () => dispatch({ type: "OPEN_MODAL", payload: "login" });

  const formik = useFormik({
    initialValues: {
      avatar: null,
      username: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
    validationSchema,
    validateOnMount: true,
    onSubmit: (values) => {
      // TODO: API-ზე მოთხოვნა. ფაილის გასაგზავნად გამოიყენე FormData
      console.log(values);
    },
  });

  const { values, errors, setFieldValue } = formik;

  const avatarHandler = (e) => {
    setFieldValue("avatar", e.target.files[0] ?? null);
  };

  return (
    <Modal title="Sign up" subtitle="Welcome to Kino XII" onClose={close}>
      <form
        className={classes.form}
        onSubmit={() => console.log(values)}
        noValidate
      >
        <div className={classes.field}>
          <label htmlFor="avatar" className={classes.avatar}>
            <span>
              <span className={classes.avatarTitle}>
                Upload avatar (optional)
              </span>
              <span className={classes.avatarHint}>JPG, PNG or WEBP</span>
            </span>
          </label>
          <input
            id="avatar"
            name="avatar"
            type="file"
            accept={ALLOWED_IMAGE_TYPES.join(",")}
            className={classes.avatarInput}
            onChange={avatarHandler}
          />
          {errors.avatar && (
            <span className={classes.error}>{errors.avatar}</span>
          )}
        </div>

        <TextField
          formik={formik}
          name="username"
          label="Username"
          autoComplete="username"
          placeholder="User"
        />

        <TextField
          formik={formik}
          name="email"
          label="Email"
          type="email"
          autoComplete="email"
          placeholder="example@gmail.com"
        />

        <div className={classes.row}>
          <TextField
            formik={formik}
            name="password"
            label="Password"
            type="password"
            autoComplete="new-password"
            placeholder="••••••••"
          />
          <TextField
            formik={formik}
            name="confirmPassword"
            label="Confirm password"
            type="password"
            autoComplete="new-password"
            placeholder="••••••••"
          />
        </div>

        <button
          type="submit"
          className={classes.submit}
          disabled={!formik.isValid}
        >
          Sign up
        </button>

        <p className={classes.switch}>
          Already have an account?{" "}
          <button type="button" onClick={openLogin}>
            Login
          </button>
        </p>
      </form>
    </Modal>
  );
};

export default SignupModal;
