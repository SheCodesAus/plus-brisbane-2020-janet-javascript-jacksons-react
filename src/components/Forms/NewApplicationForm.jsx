import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import './Forms.css';

function NewApplicationForm() {
    
    const [application, setNewApplication] = useState({
        event_id: "",
        reason_apply: "",
        event: "",
        apply_keynote: false,
        apply_facilitator: false,
        apply_mentor: false,
        apply_expert: false,
        apply_enthusiast: false,
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
        // const event_id = window.localStorage.getItem("event_id");


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
        postData().then((response) => {
            window.localStorage.setItem("application", response.application);
            history.push("/confirmapplication");
        });
    };

    return (
            <form className='create-form'>
                <h1>Apply for an Event</h1>
                <p>You will need to be signed in as a Hero to be able to apply for an Event.</p>
                <p>Already a Hero? <Link to="/signin">Sign In</Link></p>
                <p>Not a Hero yet? <Link to="/signup">Sign Up</Link></p>

                <p>Which Event do you want to be a Hero at?</p>
                <label htmlFor='event_id'>Event Number: </label>
                <input
                    type='number'
                    id='event_id'
                    required
                    onChange={handleChange}
                />
                <br/>
                <p>What type of skills do you like to volunteer for the event?</p>
                    <label htmlFor='apply_keynote'>Keynote Speaker</label>
                    &nbsp;
                    <input
                        type='checkbox'
                        id='apply_keynote'
                        value='true'
                        onChange={handleChange}
                    />
                    <br/>
                    <label htmlFor='skills_facilitator'>Workshop Facilitator</label>
                    &nbsp;
                    <input
                        type='checkbox'
                        id='apply_facilitator'
                        value='true'
                        onChange={handleChange}
                    />
                    <br/>
                    <label htmlFor='skills_mentor'>Supportive Mentor</label>
                    &nbsp;
                    <input
                        type='checkbox'
                        id='apply_mentor'
                        value='true'
                        onChange={handleChange}
                    />
                    <br/>
                    <label htmlFor='apply_expert'>Topic Expert</label>
                    &nbsp;
                    <input
                        type='checkbox'
                        id='skills_expert'
                        value='true'
                        onChange={handleChange}
                    />
                    <br/>
                    <label htmlFor='apply_enthusiast'>Deep Tech Enthusiast</label>
                    &nbsp;
                    <input
                        type='checkbox'
                        id='apply_enthusiast'
                        value='true'
                        onChange={handleChange}
                    />
                    <br/>
                        <label htmlFor='reason_apply'>Tell us why you would like to be a Hero for this Event:</label>
                        <input
                            type='text'
                            id='reason_apply'
                            required
                            onChange={handleChange}
                        />
                <button
                    type='submit'
                    onClick={ handleSubmit }>
                    Apply
                </button>

            </form>
    );
}
    export default NewApplicationForm;