import { useFormik } from "formik";
import * as Yup from "yup";
import toast from "react-hot-toast";
import useMovies from "../../../Context/useReducer";
import { updateProfile, getCurrentUser } from "../../../api/Auth";
import arrowDown from "../../../assets/arrowDown.svg";
import classes from "./Details.module.css";

const stripSpaces = (value) => (value ?? "").replace(/\s/g, "");

const toDate = (value) => {
  const [y, m, d] = value.split("-").map(Number);
  return new Date(y, m - 1, d);
};

const getAge = (value) => {
  const birth = toDate(value);
  const today = new Date();
  const age = today.getFullYear() - birth.getFullYear();
  const hadBirthday =
    today.getMonth() > birth.getMonth() ||
    (today.getMonth() === birth.getMonth() &&
      today.getDate() >= birth.getDate());
  return hadBirthday ? age : age - 1;
};

const getAgeNotice = (age) => {
  if (age == null) return null;
  if (age >= 18)
    return `You are ${age}, you can buy tickets for all age ratings`;
  if (age >= 16) return `You are ${age}, you cannot buy tickets for 18+ titles`;
  return `You are ${age}, you cannot buy tickets for 16+ or 18+ titles`;
};

const validationSchema = Yup.object({
  fullName: Yup.string()
    .trim()
    .required("Name is required")
    .min(3, "Name must be at least 3 characters")
    .max(50, "Name must not exceed 50 characters"),

  mobileNumber: Yup.string().test({
    name: "mobile",
    test: (value, ctx) => {
      const n = stripSpaces(value);
      if (!n) return ctx.createError({ message: "Mobile number is required" });
      if (!/^\d+$/.test(n))
        return ctx.createError({
          message:
            "Please enter a valid Georgian mobile number (9 digits starting with 5)",
        });
      if (!n.startsWith("5"))
        return ctx.createError({
          message: "Georgian mobile numbers must start with 5",
        });
      if (n.length !== 9)
        return ctx.createError({
          message: "Mobile number must be exactly 9 digits",
        });
      return true;
    },
  }),

  dateOfBirth: Yup.string().test({
    name: "dob",
    test: (value, ctx) => {
      if (!value)
        return ctx.createError({ message: "Date of birth is required" });
      if (toDate(value) > new Date())
        return ctx.createError({
          message: "Please enter a valid date of birth",
        });
      if (getAge(value) < 12)
        return ctx.createError({
          message: "You must be at least 12 years old to create an account",
        });
      return true;
    },
  }),
});

const TextField = ({ formik, name, label, hint, type = "text", ...rest }) => {
  const touched = formik.touched[name];
  const error = touched && formik.errors[name];
  const isValid = touched && !formik.errors[name];

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
        className={error ? classes.invalid : isValid ? classes.valid : ""}
        {...rest}
      />
      {hint && !error && <span className={classes.hint}>{hint}</span>}
      {error && <span className={classes.error}>{error}</span>}
    </div>
  );
};

const Details = () => {
  const { state, dispatch } = useMovies();
  const { user, filterOptions } = state;
  const ageNotice = getAgeNotice(user?.age);
  const { venues } = filterOptions;
  const formik = useFormik({
    initialValues: {
      fullName: user?.fullName ?? "",
      email: user?.email ?? "",
      mobileNumber: user?.mobileNumber ?? "",
      dateOfBirth: user?.dateOfBirth?.slice(0, 10) ?? "",
      preferredVenueId: String(
        user?.preferredVenue?.id ?? user?.preferredVenue ?? "",
      ),
    },
    enableReinitialize: true,
    validationSchema,
    validateOnMount: true,
    onSubmit: async (values, { setErrors, setTouched }) => {
      try {
        await updateProfile(state.token, values);

        const { data } = await getCurrentUser(state.token);
        dispatch({ type: "USER_LOADED", payload: data });
        toast.success("Profile updated");
      } catch (err) {
        if (err.errors) {
          const fieldErrors = {};
          Object.entries(err.errors).forEach(([field, messages]) => {
            fieldErrors[field] = messages[0]; //
          });
          setErrors(fieldErrors);
          setTouched(
            Object.fromEntries(Object.keys(fieldErrors).map((k) => [k, true])),
            false,
          );
        } else {
          toast.error("Something went wrong");
        }
      }
    },
  });

  return (
    <form className={classes.form} onSubmit={formik.handleSubmit} noValidate>
      <TextField
        formik={formik}
        name="fullName"
        label="Full name"
        autoComplete="name"
        placeholder="e.g. Text"
      />

      <TextField
        formik={formik}
        name="email"
        label="Email"
        hint="Set at registration and cannot be changed"
        disabled
      />

      <TextField
        formik={formik}
        name="mobileNumber"
        label="Mobile number"
        type="tel"
        autoComplete="tel"
        placeholder="555 123 456"
      />

      <TextField
        formik={formik}
        name="dateOfBirth"
        label="Date of birth"
        type="date"
        hint={ageNotice}
      />

      <div className={classes.field}>
        <label htmlFor="preferredVenueId">Preferred Venue (Optional)</label>
        <div className={classes.selectWrap}>
          <select
            id="preferredVenueId"
            name="preferredVenueId"
            value={formik.values.preferredVenueId}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            className={
              !formik.values.preferredVenueId ? classes.placeholder : ""
            }
          >
            <option value="">e.g. Text</option>
            {venues.map((venue) => (
              <option key={venue.id} value={venue.id}>
                {venue.name}
              </option>
            ))}
          </select>
          <img src={arrowDown} alt="" className={classes.chevron} />
        </div>
      </div>

      <button
        type="submit"
        className={classes.submit}
        disabled={!formik.dirty || !formik.isValid || formik.isSubmitting}
      >
        {formik.isSubmitting ? "Saving..." : "Save changes"}
      </button>
    </form>
  );
};

export default Details;
