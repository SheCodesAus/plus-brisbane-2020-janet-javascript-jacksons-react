import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";

function SignInForm() {
    const [credentials, setCredentials] = useState({
        username: "",
        password: "",
        user_id: "",
    });

    const history = useHistory();

    const handleChange = (e) => {
        const { id, value } = e.target;
        setCredentials((prevCredentials) => ({
            ...prevCredentials,
            [id]: value,
        }));
    };

    const postData = async () => {        
        const response = await fetch(
        `${process.env.REACT_APP_API_URL}api-token-auth/`, 
        {
        method: "post",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(credentials),
        }
        );
        return response.json();
    };
        
    const handleSubmit = (e) => {
        e.preventDefault();
        if (credentials.username && credentials.password) {
        postData().then((response) => {
        window.localStorage.setItem("token", response.token);
        window.localStorage.setItem("user", credentials.username);
        history.push("/events");
        });
        }
    };

    return (
        <form className="signin-form">
            <h2>It is great to see you again!</h2>
            <p>Sign in to continue</p>
            <div>
                <label htmlFor="username">Enter your username: </label>
                <input
                    type="text"
                    id="username"
                    placeholder="Username"
                    onChange={handleChange}
                />
            </div>
            &nbsp;
            <div>
                <label htmlFor="password">Enter your password: </label>
                <input
                    type="password"
                    id="password"
                    placeholder="Password"
                    onChange={handleChange}
                />
            </div>
            <p id="password-reset">Reset Password</p>
            <div>
                <button type="submit" onClick={handleSubmit}>Sign In</button>
            </div>
            <p>New to Deep Tech Heroes? <Link to="/signup">Sign Up</Link></p>
            <div>
                <button type="button" href="/about">Learn more about J-cubed</button>
            </div>
            &nbsp;
        </form>
    );
}

export default SignInForm;