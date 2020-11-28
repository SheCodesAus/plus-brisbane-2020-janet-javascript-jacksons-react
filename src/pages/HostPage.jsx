import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

function HostPage() {
    const [hostData, setHostData] = useState({
        id: window.localStorage.getItem("id"),
        first_name:"",
        last_name:"",
        organisation_name:"",
        organisation_logo:"",
        host_phone:""
    });

    const { id } = useParams();

    useEffect(() => {
        fetch(`${process.env.REACT_APP_API_URL}users/host/${id}/`)
        .then((results) => {
            return results.json();
        })
        .then((data) => {
            setHostData(data)
        });
    });

    return (
        <div>
            <div className='host-name'>
                <h2>{ hostData.first_name } { hostData.last_name }</h2>
            </div>
            <div className='host-image'>
                <img src={ hostData.organisation_logo } alt="organisation_logo" />
            </div>
            <div className='host-details'>
                <p>Organisation Name: {hostData.organisation_name}</p>
                <p>Organisation Phone: { hostData.host_phone }</p>
            </div>
        </div>
    );
}

export default HostPage;