import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import './Forms.css';

function NewApplicationForm() {
    const [application, setNewApplication] = useState({
        event_id: "",
        reason_apply: "",
        event: "",
    });

    const handleChange = (e) => {
        e.preventDefault();
        const { id, value } = e.target;
        setNewApplication((prevApplication) => ({
            ...prevApplication,
            [id]: value,
        }));
    }

    const history = useHistory();

    const postData = async () => {
        const token = window.localStorage.getItem("token")

        const response = await fetch (
            `${process.env.REACT_APP_API_URL}events/apply/`,
            {
                method: 'POST',
                headers: {
                    "Content-Type": "application/json",
                    'Authorization': `Token ${token}`
                },
                body: JSON.stringify(application),
            }
        );
        return response.json();
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        postData()
        .then((response) => {
        window.localStorage.setItem("application", response.application);
        history.push("/events");
        });
    };

    return (
            <form className='create-form'>
                <h1>Apply for an Event</h1>
                <p>You will need to be signed in as a Hero to be able to apply for an Event.</p>
                <p>Already a Hero? <Link to="/signin">Sign In</Link></p>
                <p>Not a Hero yet? <Link to="/signup">Sign Up</Link></p>

                <p>Which Event do you want to be a Hero at?</p>
                <label htmlFor='event_id'>Event Number:</label>
                <input
                    type='number'
                    id='event_id'
                    required
                    onChange={handleChange}
                />
                <br/>
                <label htmlFor='reason_apply'>Reason to Apply</label>
                <input
                    type='text'
                    id='reason_apply'
                    required
                    onChange={handleChange}
                />
                <br/>
                <label htmlFor='event_id'>Confirm Event Number:</label>
                <input
                    type='number'
                    id='event'
                    required
                    onChange={handleChange}
                />
                <br/>
                <br/>
                <br/>
                <h3>Check the details below are correct, then click Submit.</h3>
                <p>Event number: { application.event_id }</p>
                <p>Your reason for applying to be a Hero at this Event: { application.reason_apply }</p>
                <br/>
                <p>Are you ready to submit your application?</p>
                <button type='submit' onClick={ handleSubmit }> Apply </button>
            </form>
    );
}
    export default NewApplicationForm;