import React, { useState } from "react";
import { useNavigate } from "react-router";


const LoginForm = ({ login }) => {
    const navigate = useNavigate();
    let initialState = {
        username: "",
        password: ""
    }
    const [formData, setFormData] = useState(initialState);

    function handleChange(e){
        const {name, value} = e.target;
        setFormData(data => ({ ...data, [name]:value }))
    }

    async function handleSubmit(e){
        e.preventDefault();
        let res = await login(formData);
        if(res.success){
            navigate('/companies')
        } else{
            navigate('/')
        }
    }
    return (
        <div className="SignUpForm">
        <h1>Login</h1>
        <form className="SignUpForm-form" onSubmit={handleSubmit}>
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
            <button className="SignUpForm-btn">Sign Up</button>
        </form>
    </div>
    )
}

export default LoginForm;
