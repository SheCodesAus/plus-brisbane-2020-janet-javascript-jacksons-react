import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

function EventPage() {
    const [eventData, setEventData] = useState({ events: [] });
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

    return (
        <div>
            <div className='event-title'>
                <h1>{ eventData.event_name }</h1>
            </div>
            <div className='event-image'>
                <img src={ eventData.image } alt="" />
            </div>
            <div className='event-description'>
                <p>{ eventData.event_description }</p>
                <button type='button'>Apply</button>
            </div>
        </div>
    );
}

export default EventPage;