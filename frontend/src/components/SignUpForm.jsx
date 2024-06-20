import React, { useState } from "react";


const SignUpForm = () => {
   let initialState = {
        username: "",
        password: "",
        firstName: "",
        lastName:"",
        email: ""
    }
    const [formData, setFormData] = useState(initialState)

    function handleChange(e) {
        const {name, value} = e.target;
        setFormData(data => ({ ...data, [name]: value }))
    }

    return(
        <div className="SignUpForm">
            <h1>Sign Up!</h1>
            <form className="SignUpForm-form">
               <div className="SignUpForm-data">
                    <label className="SignUpForm-label">Username </label>
                    <input 
                        className="SignUpForm-input"
                        name="username"
                        value={formData.username}
                        onChange={handleChange}
                    />
                </div> 
                <div className="SignUpForm-data">
                    <label className="SignUpForm-label">Password </label>
                    <input 
                        className="SignUpForm-input"
                        name="password"
                        value={formData.password}
                        onChange={handleChange}
                    />
                </div> 
                <div className="SignUpForm-data">
                    <label className="SignUpForm-label">First Name </label>
                    <input 
                        className="SignUpForm-input"
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleChange}
                    />
                </div> 
                <div className="SignUpForm-data">
                    <label className="SignUpForm-label">Last Name </label>
                    <input 
                        className="SignUpForm-input"
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleChange}
                    />
                </div> 
                <div className="SignUpForm-data">
                    <label className="SignUpForm-label">Email </label>
                    <input 
                        className="SignUpForm-input"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                    />
                </div> 
            </form>
        </div>
    )
}

export default SignUpForm;