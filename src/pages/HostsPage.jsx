import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import HostCard from '../components/UserCard/HostCard';


function HostsPage() {
    const [hostList, setHostList] = useState([]);

    useEffect(() => {
        fetch(`${process.env.REACT_APP_API_URL}users/hosts`, {
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
        })
        .then((results) => {
            return results.json();
        })
        .then((data) => {
            setHostList(data);
        });
    }, []);

    return (
        <div id='hosts'>
            <Link to='/newevent'><button type="button">Create an Event</button></Link>
            <div>
                <h1>Hosts</h1>
            </div>
            <div id="hosts-list">
                {hostList.map((hostData, key) => {
                    return <HostCard key={key} hostData={hostData} />;
                })}
            </div>
        </div>
    );
}

export default HostsPage;