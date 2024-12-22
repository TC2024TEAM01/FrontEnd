import FormInput from '../components/FormInput';
import { useState } from 'react';
import NavBar from '../components/NavBarpro';
const Signup = () => {
    const [values, setValues] = useState({
        firstname: "",
        lastname: "",
        email: "",
        birthday: "",
        role: "hr", // Set default value to "employee"
        password: "",
        confirmPassword: "",
      });
    
      const inputs = [
        {
          id: 1,
          name: "firstname",
          type: "text",
          placeholder: "First Name",
          errorMessage: "First name should be 3-16 characters and shouldn't include any special character!",
          label: "First Name",
          pattern: "^[A-Za-z0-9]{3,16}$",
          required: true,
        },
        {
          id: 2,
          name: "lastname",
          type: "text",
          placeholder: "Last Name",
          errorMessage: "Last name should be 3-16 characters and shouldn't include any special character!",
          label: "Last Name",
          pattern: "^[A-Za-z0-9]{3,16}$",
          required: true,
        },
        {
          id: 3,
          name: "email",
          type: "email",
          placeholder: "Email",
          errorMessage: "It should be a valid email address!",
          label: "Email",
          required: true,
        },
        {
          id: 4,
          name: "birthday",
          type: "date",
          placeholder: "Birthday",
          label: "Birthday",
          required: true,
        },
        {
          id: 5,
          name: "role",
          type: "select",
          placeholder: "Role",
          label: "Role",
          options: ["hr", "employee"],
          required: true,
        },
        {
          id: 6,
          name: "password",
          type: "password",
          placeholder: "Password",
          errorMessage: "Password should be 8-20 characters and include at least 1 letter, 1 number and 1 special character!",
          label: "Password",
          pattern: `^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,20}$`,
          required: true,
        },
        {
          id: 7,
          name: "confirmPassword",
          type: "password",
          placeholder: "Confirm Password",
          errorMessage: "Passwords don't match!",
          label: "Confirm Password",
          pattern: values.password,
          required: true,
        },
      ];
    
      const handleSubmit = (e) => {
        e.preventDefault();
        console.log(values);
      };
    
      const onChange = (e) => {
        setValues({ ...values, [e.target.name]: e.target.value });
      };

  return (
    <div>
      <NavBar/>
    <form onSubmit={handleSubmit}>
        <h1>Register</h1>
        {inputs.map((input) => (
          <FormInput
            key={input.id}
            {...input}
            value={values[input.name]}
            onChange={onChange}
          />
        ))}
        <button>Submit</button>
      </form>
      </div>
  )
}

export default Signup
