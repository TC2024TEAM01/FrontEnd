import FormInput from '../components/FormInput';
import { useState } from 'react';
import '../components/formInput.css';

const Profile = () => {
    const [isEditing, setIsEditing] = useState(false);
    const [values, setValues] = useState({
        firstname: "",
        lastname: "",
        email: "",
        contactnumber: "",
        password: "",
        role: "employee", // Add role to the state
    });

    const [originalValues, setOriginalValues] = useState({ ...values });
    const [errors, setErrors] = useState({});

    const inputs = [
        {
            id: 1,
            name: "firstname",
            type: "text",
            placeholder: "First Name",
            errorMessage: "First name should be 3-16 characters with no special characters",
            label: "First Name",
            pattern: "^[A-Za-z0-9]{3,16}$",
            required: true,
        },
        {
            id: 2,
            name: "lastname",
            type: "text",
            placeholder: "Last Name",
            errorMessage: "Last name should be 3-16 characters with no special characters",
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

    const validate = () => {
        const newErrors = {};
        inputs.forEach(input => {
            const value = values[input.name];
            if (input.required && !value) {
                newErrors[input.name] = `${input.label} is required`;
            } else if (input.pattern && !new RegExp(input.pattern).test(value)) {
                newErrors[input.name] = input.errorMessage;
            }
        });
        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleEditClick = () => {
        setIsEditing(true);
    };

    const handleSaveClick = () => {
        if (validate()) {
            setIsEditing(false);
            setOriginalValues({ ...values });
            // Save the updated profile data
            console.log("Profile data saved:", values);
        } else {
            console.log("Validation errors:", errors);
        }
    };

    const handleCancelClick = () => {
        setIsEditing(false);
        setValues({ ...originalValues });
        // Optionally reset the profile data to its original state
        console.log("Profile data reset to original values:", originalValues);
    };

    const disabledStyle = {
        backgroundColor: '#F9F9F9',
        border: '1px solid #ccc',
        borderRadius: '5px',
    };

    return (
        <div className="formContainer">
            <form onSubmit={handleSubmit}>
                <h1 style={{
                    textAlign: 'start',
                    marginBottom: '60px',
                    marginTop: '30px',
                    color: 'black',
                    fontSize: '2rem',
                    fontWeight: '600',
                }}>Profile</h1>
                <div className="form">
                    <div className="nameInputs">
                        {inputs.slice(0, 2).map((input) => (
                            <FormInput
                                key={input.id}
                                {...input}
                                value={values[input.name]}
                                onChange={onChange}
                                disabled={!isEditing}
                                style={!isEditing ? disabledStyle : {}}
                                errorMessage={errors[input.name]}
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
                                disabled={!isEditing}
                                style={!isEditing ? disabledStyle : {}}
                                errorMessage={errors[input.name]}
                            />
                        ))}
                        {!isEditing && (
                            <div className="formInput">
                                <label>Role</label>
                                <input
                                    type="text"
                                    value={values.role}
                                    disabled
                                    style={{ color: 'grey', ...disabledStyle }}
                                />
                            </div>
                        )}
                    </div>
                </div>
                <div className='buttons'>
                    {isEditing ? (
                        <>
                            <button type="button" className='cancel' onClick={handleCancelClick}>Cancel</button>
                            <button type="button" className='submit' onClick={handleSaveClick}>Save</button>
                        </>
                    ) : (
                        <button type="button" className='edit' onClick={handleEditClick}>
                            <svg width="25.65" height="25.65" viewBox="0 0 53 52" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fillRule="evenodd" clipRule="evenodd" d="M36.7526 9.1975L40.9096 12.5808C41.3109 12.9719 41.5359 13.5095 41.5327 14.0699C41.5294 14.6303 41.2983 15.1652 40.8925 15.5517L37.7336 19.3988L26.983 32.5153C26.7969 32.7345 26.5463 32.8893 26.267 32.9578L20.693 34.2401C19.9533 34.2707 19.3155 33.7252 19.231 32.9898L19.4918 27.4906C19.5111 27.2098 19.6223 26.9432 19.8081 26.7318L30.0949 14.1966L33.7176 9.7767C34.4215 8.81863 35.7453 8.56598 36.7526 9.1975Z" stroke="white" strokeWidth="2.48201" strokeLinecap="round" strokeLinejoin="round"/>
                                <path d="M11.6073 39.6509C10.9219 39.6509 10.3663 40.2065 10.3663 40.8919C10.3663 41.5773 10.9219 42.1329 11.6073 42.1329V39.6509ZM40.8882 42.1329C41.5736 42.1329 42.1292 41.5773 42.1292 40.8919C42.1292 40.2065 41.5736 39.6509 40.8882 39.6509V42.1329ZM31.2457 13.7323C30.9891 13.0967 30.2659 12.7894 29.6304 13.046C28.9948 13.3025 28.6875 14.0257 28.9441 14.6613L31.2457 13.7323ZM38.007 20.6159C38.6755 20.4648 39.0951 19.8004 38.944 19.1319C38.793 18.4633 38.1286 18.0438 37.4601 18.1949L38.007 20.6159ZM11.6073 42.1329H40.8882V39.6509H11.6073V42.1329ZM28.9441 14.6613C29.4255 15.8541 30.4183 17.5595 31.8881 18.8665C33.3796 20.1929 35.47 21.189 38.007 20.6159L37.4601 18.1949C35.9383 18.5386 34.6368 17.9894 33.5374 17.0118C32.4163 16.0148 31.6191 14.6575 31.2457 13.7323L28.9441 14.6613Z" fill="white"/>
                            </svg>
                        </button>
                    )}
                </div>
            </form>
        </div>
    );
};

export default Profile;