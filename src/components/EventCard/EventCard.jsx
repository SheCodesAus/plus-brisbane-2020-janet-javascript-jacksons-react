import React from 'react';
import { Link } from 'react-router-dom';
import "./EventCard.css";

function EventCard(props) {
    const { eventData } = props;
    return (
        <div className='event-card'>
            <Link to={`/events/${eventData.id}`}>
                <img src={ eventData.image } alt="" />
                <h3>{ eventData.event_name }</h3>
            </Link>
        </div>
    );
}

export default EventCard;