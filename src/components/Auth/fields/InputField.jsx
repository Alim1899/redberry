import { useState } from "react";
import classes from "./Fields.module.css";

const InputField = ({ label, type, required, icon, validate }) => {
  const [value, setValue] = useState("");
  const [error, setError] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleChange = (e) => {
    const val = e.target.value;
    setValue(val);

    if (validate) {
      const validationError = validate(val);
      setError(validationError);
    } else {
      setError("");
    }
  };

  const inputType =
    type === "password" ? (showPassword ? "text" : "password") : type;

  return (
    <div className={classes.inputWrapper}>
      {!value && (
        <label className={classes.placeholder}>
          {label}
          {required && <span className={classes.star}>*</span>}
        </label>
      )}

      <input
        type={inputType}
        value={value}
        onChange={handleChange}
        className={`${classes.input} ${error ? classes.errorInput : ""}`}
      />

      {type === "password" && icon && (
        <img
          src={icon}
          alt="toggle visibility"
          className={classes.icon}
          onClick={() => setShowPassword(!showPassword)}
        />
      )}

      {error && <p className={classes.errorMsg}>{error}</p>}
    </div>
  );
};

export default InputField;
