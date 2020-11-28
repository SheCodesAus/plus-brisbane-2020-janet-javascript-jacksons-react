import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

function ApplicationPage() {
    const [applicationData, setApplicationData] = useState({ applications:[]});
    const { id } =useParams();

    useEffect(() => {
        fetch(`${process.env.REACT_APP_API_URL}applications/${id}/`, {
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
        })
        .then((results) => {
            return results.json();
        })
        .then((data) => {
            setApplicationData(data);
        });
    }, [id]);

    return (
        <div>
            <h1>Application {applicationData.id}</h1>
            <h3>Tell us why you would like to be a Hero for this Event:{ applicationData.reason_apply }</h3>
            <h3>Application for event: { applicationData.event }</h3>
        </div>
    );
}
export default ApplicationPage;