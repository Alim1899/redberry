import { useFormik } from "formik";
import toast from "react-hot-toast";
import { updateProfile, getCurrentUser } from "../../../api/Auth";
import arrowDown from "../../../assets/arrowDown.svg";
import classes from "./Details.module.css";
import useMovies from "../../../Context/useReducer";


const VENUES = []; 



const TextField = ({ formik, name, label, hint, type = "text", ...rest }) => {
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
      {hint && !error && <span className={classes.hint}>{hint}</span>}
      {error && <span className={classes.error}>{error}</span>}
    </div>
  );
};

const Details = () => {
  const { state, dispatch } = useMovies();
  const user = state.user;

const formik = useFormik({
  initialValues: {
    fullName: user?.fullName ?? "",
    email: user?.email ?? "",
    mobileNumber: user?.mobileNumber ?? "",
    dateOfBirth: user?.dateOfBirth?.slice(0, 10) ?? "",
    // /me-ის პასუხში preferredVenue id-ა თუ ობიექტი, ორივეს ეგუება
    preferredVenueId: String(
      user?.preferredVenue?.id ?? user?.preferredVenue ?? "",
    ),
  },
  enableReinitialize: true,
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
          fieldErrors[field] = messages[0]; // სერვერის ტექსტი უცვლელად
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
  className={!formik.values.preferredVenueId ? classes.placeholder : ""}
>
  <option value="">e.g. Text</option>
  {VENUES.map((venue) => (
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
        disabled={!formik.dirty || formik.isSubmitting}
      >
        Save changes
      </button>
    </form>
  );
};

export default Details;