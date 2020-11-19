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
                <Link to="/apply"><button type='button'>Apply</button></Link>
            </div>
            <div>
                <h3>Heroes Confirmed</h3>
                <ul>
                    {eventData.applications.map((applicationData, key) => {
                        return (
                            <li key={key}>
                                {/* <IsAccepted applicationData={ applicationData }/> */}
                                <p>{applicationData.reason_apply}</p>
                            </li>
                        );
                    })}
                </ul>
            </div>
        </div>
    );
}

export default EventPage;