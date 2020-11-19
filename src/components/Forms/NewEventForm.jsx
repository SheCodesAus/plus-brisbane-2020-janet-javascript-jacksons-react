import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import './Forms.css';

function NewEventForm() {
    const [event, setNewEvent] = useState({
        event_name: "",
        event_description: "",
        event_location: "",
        skills_required: "",
        event_size: "",
        is_paid: "",
    });

    const handleChange = (e) => {
        e.preventDefault();
        const { id, value } = e.target;
        setNewEvent((prevEvent) => ({
            ...prevEvent,
            [id]: value,
        }));
    }

    const history = useHistory();

    const postData = async () => {
        // const token = window.localStorage.getItem('token')

        const response = await fetch (
            `${process.env.REACT_APP_API_URL}/events/new/`,
            {
                method: 'POST',
                headers: {
                    "Content-Type": "application/json",
                    // 'Authorization': `Token ${token}`
                },
                body: JSON.stringify(event),
            }
        );
        return response.json();
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        postData().then((response) => {
            window.localStorage.setItem("event", response.event);
            history.push('/events');
        });
    };

    return (
        <form className='create-form'>
            <h1>Create a New Event</h1>
            <p>Include instructions for how to prepare new event submission here.</p>
            <p>You will need to be signed in as a Host to be able to create an Event.</p>

            <label htmlFor='event_name'>Event Name</label>
            <input
                type='text'
                id='event_name'
                required
                onChange={handleChange}
            />

            <label htmlFor='event_description'>Event Details</label>
            <input
                type='textarea'
                id='event_description'
                required
                onChange={handleChange}
            />

            <label htmlFor='event_location'>Event Location</label>
            <input
                type='text'
                id='event_location'
                onChange={handleChange}
            />

            <label htmlFor='skills_required'>Hero Skills Required</label>
            <select id="skills_required" onChange={handleChange}>
                <option value="1">Keynote Speaker</option>
                <option value="2">Workshop Facilitator</option>
                <option value="3">Tech Mentor</option>
                <option value="4">Topic Expert</option>
            </select>
            <br/>

            <label htmlFor='event_size'>Event Size</label>
            <select id='event_size' onChange={handleChange}>
                <option value="1">Intimate - less than 50 attendees</option>
                <option value="2">Small - 50 to 100 attendees</option>
                <option value="3">Medium - 100 to 500 attendees</option>
                <option value="4">Large - 500 to 1000 attendees</option>
                <option value="5">Very Large - 1000 to 5000 attendees</option>
                <option value="6">Huge - greater than 5000 attendees</option>
            </select>
            <br/>
            
            Is there a budget allocation to pay Heroes for their involvement?
            <label htmlFor='is_paid'>Payment Available</label>
            <input
                type='radio'
                id='is_paid'
                value='true'
                onChange={handleChange}
            />
            &nbsp;
            <label>ProBono Opportunity</label>
            <input
                type='radio'
                id='is_paid'
                value='false'
                onChange={handleChange}
            />

            <label>Event Image or Logo</label>
            <input
                type='url'
                id='image'
                onChange={handleChange}
            />
            <br/>

            <button
                type='submit'
                onClick={ handleSubmit }>
                    Publish New Event
                    </button>
        </form>
    );
}

export default NewEventForm;