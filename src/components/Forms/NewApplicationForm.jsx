import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import './Forms.css';

function NewApplicationForm() {

    const history = useHistory();
    const eventid = window.localStorage.getItem("event")

    const [application, setNewApplication] = useState({
        event_id: eventid,
        reason_apply: "",
        apply_keynote: false,
        apply_facilitator: false,
        apply_mentor: false,
        apply_expert: false,
        apply_enthusiast: false,
        event: eventid,
    });

    const handleChange = (e) => {
        e.preventDefault();
        const { id, value } = e.target;
        setNewApplication((prevApplication) => ({
            ...prevApplication,
            [id]: value,
        }));
    }

    
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
                <p>Not a Hero yet? <Link to="/becomehero">Become a Hero</Link></p>

                <br/>
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
                    <label htmlFor='apply_facilitator'>Workshop Facilitator</label>
                    &nbsp;
                    <input
                        type='checkbox'
                        id='apply_facilitator'
                        value='true'
                        onChange={handleChange}
                    />
                    <br/>
                    <label htmlFor='apply_mentor'>Supportive Mentor</label>
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
                        id='apply_expert'
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