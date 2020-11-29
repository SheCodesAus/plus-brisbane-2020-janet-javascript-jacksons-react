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
        <div className='page-wrapper'>
            <div className='page-header'>
                <h1 className='page-title'>HOSTS</h1>
                <Link className='ext-link' to='/newevent'>
                    <button className='page-button' type="button">Create an Event</button>
                </Link>
            </div>
            
            <div className='page-main'>
                {hostList.map((hostData, key) => {
                    return <HostCard key={key} hostData={hostData} />;
                })}
            </div>
        </div>
    );
}

export default HostsPage;