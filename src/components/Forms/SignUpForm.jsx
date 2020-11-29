import React, { useState } from "react";
import { useHistory } from "react-router-dom";

function SignUpForm() {
    const [user, setNewUser] = useState({
        username: "",
        password: "",
        email: "",
        first_name: "Eli",
        last_name: "Eli2",
    });

        const handleChange = (e) => {
        e.preventDefault();
        const { id, value } = e.target;
        setNewUser((prevUser) => ({
            ...prevUser,
            [id]: value,
        }));
    }

    const history = useHistory();

    const postData = async() => {
        const response = await fetch(
        `${process.env.REACT_APP_API_URL}users/`,
        {
            method: "post",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(user),
        }
        );
        return response.json();
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        postData().then((response) => {
        window.localStorage.setItem("username", response.username);
        history.push("/signin");
        });
    };

    return (
        <form className="create-form">
            <h1>Welcome to Deep Tech Heroes!</h1>
            <p>Sign up, then become a Hero or a Host, or both!</p>

            <label htmlFor="username">Create a Username</label>
            <input
                type="text"
                id="username"
                placeholder="Create a Username"
                required
                onChange={handleChange}
            />
            <br/>
            <label htmlFor="password">Create a password</label>
            <input
                type="password"
                id="password"
                placeholder="Minimum 8 characters"
                required
                onChange={handleChange}
            />
            <br/>
            <label htmlFor="email">Add Your Email</label>
            <input
                type="text"
                id="email"
                placeholder=""
                required
                onChange={handleChange}
            />
            <br/>
            <br/>
            <br/>
            <button
                type="submit"
                onClick={ handleSubmit }
            >Sign Up</button>
            <br/>

            <p>Username: { user.username }</p>
            <p>Password: { user.password }</p>
            <p>Email: { user.email }</p>
            
        </form>
    );
}

export default SignUpForm;