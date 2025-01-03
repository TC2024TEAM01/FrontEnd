
import FormInput from '../components/FormInput';
import { useState } from 'react';

const Editpage = () => {    
    const [values, setValues] = useState({
        firstname: "",
        lastname: "",
        email: "",
        contactnumber: "",
        password: "",
    });

    const inputs = [
        {
          id: 1,
          name: "firstname",
          type: "text",
          placeholder: "First Name",
          errorMessage: "First name should be 3-16 with no special charachters",
          label: "First Name",
          pattern: "^[A-Za-z0-9]{3,16}$",
          required: true,
        },
        {
          id: 2,
          name: "lastname",
          type: "text",
          placeholder: "Last Name",
          errorMessage: "Last name should be 3-16 with no special charachters",
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
          name: "contactnumber",
          type: "text",
          placeholder: "Contact Number",
          errorMessage: "Contact Number should be in format 0XXX XX XX XX",
          label: "Contact Number",
          pattern: "^0[0-9]{3} [0-9]{2} [0-9]{2} [0-9]{2}$",
          required: true,
        },
        {
          id: 5,
          name: "password",
          type: "password",
          placeholder: "Password",
          errorMessage: "Password should be 8-20 characters and include at least 1 letter, 1 number and 1 special character!",
          label: "Password",
          pattern: `^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,20}$`,
          required: true,
        }
      ];

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(values);
    };

    const onChange = (e) => {
        setValues({ ...values, [e.target.name]: e.target.value });
    };

    return (
        <div style={
            {
                backgroundColor: 'white'
            }
        }>

        <div className="formContainer">
            <form onSubmit={handleSubmit}>
                <h1 style={{
                    textAlign: 'start',
                    marginBottom: '60px',
                    marginTop: '30px',
                    color: 'black',
                    fontSize: '2rem',
                    fontWeight: '600',
                }}>Edit profile</h1>
                <div className="form">
                <div className="nameInputs">
                    {inputs.slice(0, 2).map((input) => (
                        <FormInput
                            key={input.id}
                            {...input}
                            value={values[input.name]}
                            onChange={onChange}
                        />
                    ))}
                </div>
                <div className="otherInputs">
                    {inputs.slice(2).map((input) => (
                        <FormInput
                            key={input.id}
                            {...input}
                            value={values[input.name]}
                            onChange={onChange}

                        />
                    ))}
                </div>

                </div>
                
                <div className='buttons'>
                         <button className='cancel'>cancel</button>
                         <button className='submit'>Save</button>
                </div>
                
            </form>
        </div>
        </div>
    );
};

export default Editpage
