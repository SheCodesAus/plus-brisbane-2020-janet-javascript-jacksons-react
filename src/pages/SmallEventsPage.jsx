import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import EventCard from '../components/EventCard/EventCard';
import EventsFilter from "../components/Nav/EventsFilter";


function EventsPage() {
    const [eventList, setEventList] = useState([]);

    useEffect(() => {
        fetch(`${process.env.REACT_APP_API_URL}events/small/`, {
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
        })
        .then((results) => {
            return results.json();
        })
        .then((data) => {
            setEventList(data);
        });
    }, []);

    return (
        <div className='page-wrapper'>
            <div className='page-header'>
                <h1 className='page-title'>EVENTS</h1>
                <Link className='ext-link' to='/newevent'>
                    <button className='page-button' type="button">Create an Event</button>
                </Link>
                <EventsFilter />
            </div>
            
            <div className='page-main'>
                {eventList.map((eventData, key) => {
                    return <EventCard key={key} eventData={eventData} />;
                })}
            </div>
        </div>
    );
}

export default EventsPage;