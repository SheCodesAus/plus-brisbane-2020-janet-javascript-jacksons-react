import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';

function EventPage() {
    const [eventData, setEventData] = useState({ events: [], applications: [] });
    const { id } = useParams();

    useEffect(() => {
        fetch(`${process.env.REACT_APP_API_URL}events/${id}/`, {
            headers: {
                "Content-Type": "application/json",
            },
        })
        .then((results) => {
            return results.json();
        })
        .then((data) => {
            setEventData(data);

        });
    }, [id]);

    window.localStorage.setItem("event", eventData.id);

    return (
        <div>
            <div className='event-title'>
                <h1>{ eventData.event_name }</h1>
            </div>
            <div className='event-image'>
                <img src={ eventData.image } alt="" />
            </div>
            <div className='event-description'>
                <h5>Location: { eventData.event_location }</h5>
                <p>Date: </p>
                <p>Details: { eventData.event_description }</p>
                <p>Estimated event size: { eventData.event_size }</p>
                <p>The Event Host is seeking Heroes for the following opportunities: </p>
                <p>Keynote Speaker: { eventData.skills_keynote }</p>
                <p>Workshop Facilitator: { eventData.skills_facilitator }</p>
                <p>Supportive Mentor: { eventData.skills_mentor }</p>
                <p>Topic Expert: { eventData.skills_expert }</p>
                <p>Tech Enthusiast: { eventData.skills_enthusiast }</p>
                <p>Is this a paid opportunity? { eventData.is_paid }</p>
                <br/>
                <p>Are you interested in being a Hero for this Event?</p>
                <Link to="/apply"><button type='button'>Apply to be a Hero</button></Link>
            </div>
            <div>
                <h3>Hero Applications</h3>
                <ul>
                    {eventData.applications.map((applicationData, key) => {
                        return (
                            <li key={key}>
                                {/* <IsAccepted applicationData={ applicationData }/> */}
                                <p>Hero: { applicationData.owner } </p>
                                <p>Reason: { applicationData.reason_apply }</p>
                                <p>Status: { applicationData.is_accepted }</p>
                            </li>
                        );
                    })}
                </ul>
            </div>
        </div>
    );
}

export default EventPage;