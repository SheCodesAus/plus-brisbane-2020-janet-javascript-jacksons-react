import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import './Forms.css';

function NewEventForm() {
    const [event, setNewEvent] = useState({
        event_name: "",
        event_description: "",
        event_location: "",
        skills_keynote: false,
        skills_facilitator: false,
        skills_mentor: false,
        skills_expert: false,
        skills_enthusiast: false,
        event_size: "",
        is_paid: "",
        image: "",
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
    // var statuscode = 0;

    const postData = async () => {
        const token = window.localStorage.getItem('token')

        const response = await fetch (
            `${process.env.REACT_APP_API_URL}events/new/`,
            {
                method: 'POST',
                headers: {
                    "Content-Type": "application/json",
                    'Authorization': `Token ${token}`
                },
                body: JSON.stringify(event),
            }
        );
        return response.json();
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        postData()
        .then((response) => {
                window.localStorage.setItem("event", response.event);
                history.push("/events");
        });
    };

    return (
        <form className='create-form'>
            <h1>Create a New Event</h1>
            <p>Include instructions for how to prepare new event submission here.</p>
            <p>You will need to be signed in as a Host to be able to create an Event.</p>
            <p>Already a Host? <Link to="/signin">Sign In</Link></p>
            <p>Not a Host yet? <Link to="/signup">Sign Up</Link></p>

            <label htmlFor='event_name'>Event Name</label>
            <input
                type='text'
                id='event_name'
                required
                onChange={handleChange}
            />
            <br/>
            <label htmlFor='event_description'>Event Details</label>
            <input
                type='textarea'
                id='event_description'
                required
                onChange={handleChange}
            />
            <br/>
            <label htmlFor='event_location'>Event Location</label>
            <input
                type='text'
                id='event_location'
                onChange={handleChange}
            />
            <br/>
            <p>What type of Heroes do you need for your event?</p>
            <label htmlFor='skills_keynote'>Keynote Speaker</label>
            &nbsp;
            <input
                type='checkbox'
                id='skills_keynote'
                value='true'
                onChange={handleChange}
            />
            <br/>
            <label htmlFor='skills_facilitator'>Workshop Facilitator</label>
            &nbsp;
            <input
                type='checkbox'
                id='skills_facilitator'
                value='true'
                onChange={handleChange}
            />
            <br/>
            <label htmlFor='skills_mentor'>Supportive Mentor</label>
            &nbsp;
            <input
                type='checkbox'
                id='skills_mentor'
                value='true'
                onChange={handleChange}
            />
            <br/>
            <label htmlFor='skills_expert'>Topic Expert</label>
            &nbsp;
            <input
                type='checkbox'
                id='skills_expert'
                value='true'
                onChange={handleChange}
            />
            <br/>
            <label htmlFor='skills_enthusiast'>Deep Tech Enthusiast</label>
            &nbsp;
            <input
                type='checkbox'
                id='skills_enthusiast'
                value='true'
                onChange={handleChange}
            />
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
            
            <p>Is there a budget allocation to pay Heroes for their involvement?</p>
            <label htmlFor='is_paid'>Payment Available</label>
            &nbsp;
            <input
                type='radio'
                id='is_paid'
                value='true'
                onChange={handleChange}
            />
            <br/>
            <label htmlFor='is_paid'>ProBono Opportunity</label>
            &nbsp;
            <input
                type='radio'
                id='is_paid'
                value='false'
                onChange={handleChange}
            />
            <br/>
            <label>Event Image or Logo</label>
            <input
                type='url'
                id='image'
                onChange={handleChange}
            />
            <br/>
            <br/>
            <br/>
            <h3>Check the details below are correct, then click Submit to publish your Event.</h3>
            <br/>
            <p>Event: { event.event_name }</p>
            <p>Details: { event.event_description }</p>
            <p>Location: { event.event_location }</p>
            <p>Keynote Speaker: { event.skills_keynote }</p>
            <p>Workshop Facilitator: { event.skills_facilitator }</p>
            <p>Supportive Mentor: { event.skills_mentor }</p>
            <p>Topic Expert: { event.skills_expert }</p>
            <p>Tech Enthusiast: { event.skills_enthusiast }</p>
            <p>Event Size: { event.event_size }</p>
            <p>Payment available: { event.is_paid }</p>
            <p>Event Image: { event.image }</p>
            <br/>
            <p>Are you ready to publish your event?</p>
            <button
                type='submit'
                onClick={ handleSubmit }>
                Publish New Event
            </button>
            <br/>
        </form>
    );
}

export default NewEventForm;