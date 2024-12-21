import  { useState } from "react";
import "../css/LoginForm.css"

const RegistrationApp = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  // Validation function
  const validateForm = () => {
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "Name is required.";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required.";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Email is invalid.";
    }

    if (!formData.password.trim()) {
      newErrors.password = "Password is required.";
    } else if (formData.password.length < 6) {
      newErrors.password = "Password must be at least 6 characters.";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(false);
    if (validateForm()) {
      setSubmitted(true);
    }
  };

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  return (
    <div className="login-bg">
      <div className="form-container">
        <img src="../../public/Frame 3.png" alt="" />
        <h2>Registration Form</h2>
        {submitted && (
            <p style={{ color: "green", textAlign: "center" }}>
            Form submitted successfully!
            </p>
        )}
        <form onSubmit={handleSubmit}>
        
            {/* Email Field */}
            <div className="emai-field" style={{ marginBottom: "15px" }}>
              <label style={{ display: "block", marginBottom: "5px" }}>
                  Email:
              </label>
              <input type="email" name="email" value={formData.email} onChange={handleChange}/>
              {errors.email && (
                  <p style={{ color: "red", fontSize: "14px" }}>{errors.email}</p>
              )}
            </div>

            {/* Password Field */}
            <div className="password-field"style={{ marginBottom: "15px" }}>
              <label style={{ display: "block", marginBottom: "5px" }}>
                  Password:
              </label>
              <input
                  type="password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
              />
              {errors.password && (
                  <p style={{ color: "red", fontSize: "14px" }}>{errors.password}</p>
              )}
            </div>
            <p>Forgot Password</p>

            <button type="submit">Register</button>
        </form>
      </div>
    </div>
    );
};

export default RegistrationApp;