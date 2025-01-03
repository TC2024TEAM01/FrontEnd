/* eslint-disable react/no-unknown-property */
/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { useState } from "react";
import "./formInput.css";

const FormInput = (props) => {
  const [focused, setFocused] = useState(false);
  const { label, errorMessage, onChange, id, ...inputProps } = props;

  const handleFocus = (e) => {
    setFocused(true);
  };

  return (
    <div>
    <div className="formInput">
      <label>{label}</label>
        <input
          {...inputProps}
          onChange={onChange}
          onBlur={handleFocus}
          onFocus={() => inputProps.name === "confirmPassword" && setFocused(true)}
          focused={focused.toString()}
        />
          <span>{errorMessage}</span>
    </div>
    </div>
  );
};

export default FormInput;