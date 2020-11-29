import React, { useState, useEffect, Component } from 'react';
import { Link, useParams } from 'react-router-dom';
import IsAnon from "../components/Filters/Application/IsAnon";
import IsAccepted from "../components/Filters/Application/IsAccepted";
import IsAssessed from '../components/Filters/Application/IsAssessed';
import EventRating from '../components/Filters/Reviews/EventRating';
import IsEventHost from '../components/Filters/Users/IsEventHost';

function EventPage() {
    const [eventData, setEventData] = useState({ events: [], applications: [], review_event: [] });
    const { id } = useParams();

    window.localStorage.getItem("user")

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
    window.localStorage.setItem("owner", eventData.owner);
    window.localStorage.setItem("host_username", eventData.host_username);

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
                <p>Date: { eventData.event_date } </p>
                <p>Time: { eventData.event_time } </p>
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
            <br/>
            <div>
                <h3>Event Reviews</h3>
                <ul>
                    {eventData.review_event.map((reviewData, key) => {
                        return (
                            <li key={key}>
                                <p>Comment: { reviewData.comment }</p>
                                <p>Rating: <EventRating reviewData={ reviewData } /></p>
                                <p>Review by: { reviewData.reviewer }</p>
                                <br/>
                            </li>
                        );
                    })}
                </ul>
            </div>
            <br/>
            <div>
                <IsEventHost eventData={eventData} />
            </div>
            <br/>
            <div>
              <p>Would you like to attend this Event? Get a ticket { eventData.event_ticket }</p>
            </div>
        </div>
    );
}

export default EventPage;