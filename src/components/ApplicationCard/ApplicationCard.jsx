import React from 'react';
import { Link } from 'react-router-dom';
import IsAccepted from '../Filters/Application/IsAccepted';
import "./ApplicationCard.css";

function ApplicationCard(props) {
    const { applicationData } = props;
    return (
        <div className='application-card'>
            <Link to={`/applications/${applicationData.id}`}>
                <h3>Application details: { applicationData.reason_apply }</h3>
                <h3>Application for event: { applicationData.event }</h3>
                <p>Application Status: <IsAccepted applicationData={ applicationData.is_accepted } /></p>
            </Link>
        </div>
    );
}

export default ApplicationCard;