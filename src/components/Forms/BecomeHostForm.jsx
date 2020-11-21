import React, { useState } from "react";
import { Link, useParams, useHistory } from "react-router-dom";

const BecomeHostForm = (props) => {
    const [user, setUser] = useState(props.currentUsers)
    const { id } = useParams();
    const history = useHistory();
    var statuscode = 0;

    const handleChange = (e) => {
        e.preventDefault();
        const { id, value } = e.target;
        setUser({ ...user, [id]: value })
    }

    const postData = async () => {   
        const token = window.localStorage.getItem("token")
     
        const response = await fetch(
        `${process.env.REACT_APP_API_URL}users/${id}/`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json",
            'Authorization': `Token ${token}`
        },
        body: JSON.stringify(user),
        })
        .then((response) => {
            statuscode=(response.status);
            console.log(statuscode);
            return response.json();
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        postData()
        .then((response) => {
            if(statuscode === 201) {
                setUser(response);
                history.push(`/users/${id}`);
            } else {
                console.log(statuscode);
                history.push("/unauthorised");
            };
        });
    };


    return (
        <form className="create-form">
            <h1>Become a Host</h1>
            <p>Do you organise events related to Deep Tech?</p>
            <p>You need to be signed in to become a Host. Click here to <Link to="/signin">sign in</Link></p>

            <label htmlFor="contact_person">Your name: </label>
            <input 
                type="text" 
                id="contact_person"
                placeholder="{ user.contact_person }"
                required
                onChange={handleChange}
            />
            <br/>
            <label htmlFor="organisation_name">Your Organisation: </label>
            <input
                type="text"
                id="organisation_name"
                placeholder="The company, group or association your represent."
                onChange={handleChange}
            />
            <br/>
            <label htmlFor="contact_phone">Your Phone number: </label>
            <input
                type="text"
                id="contact_phone"
                onChange={handleChange}
            />
            <br/>
            <label htmlFor="contact_email">Your Email: </label>
            <input
                type="email"
                id="contact_email"
                onChange={handleChange}
            />
            <br/>
            <label htmlFor="company_logo">Copy the URL to an image of your organisations logo: </label>
            <input
                type="url"
                id="company_logo"
                onChange={handleChange}
            />
            <br/>
            <h4>Check the details below, then click Submit:</h4>

            <p>Name: { user.contact_person }</p>
            <p>Organisation: { user.organisation_name }</p>
            <p>Phone: { user.contact_phone }</p>
            <p>Email: { user.contact_email }</p>
            <p>Logo URL: { user.company_logo }</p>
            
            Ready to become a Host?
            <button 
                type="submit"
                onClick={ handleSubmit }
            >
            Submit
            </button>
            <br/>
        </form>
    );
}

export default BecomeHostForm;
