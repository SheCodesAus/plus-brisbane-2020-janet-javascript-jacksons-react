import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import EventCard from '../components/EventCard/EventCard';
import EventsFilter from "../components/Nav/EventsFilter";


function EventsPage() {
    const [eventList, setEventList] = useState([]);

    useEffect(() => {
        fetch(`${process.env.REACT_APP_API_URL}events/huge/`, {
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
        <div>
            <div>
                <EventsFilter />
            </div>
            <div id="events-list">
                {eventList.map((eventData, key) => {
                    return <EventCard key={key} eventData={eventData} />;
                })}
            </div>
        </div>
    );
}

export default EventsPage;