import React from 'react';
import { Link } from 'react-router-dom';
import "./ApplicationCard.css";

function ApplicationCard(props) {
    const { applicationData } = props;
    return (
        <div className='application-card'>
            <Link to={`/applications/${applicationData.id}`}>
                <h3>reason to apply: { applicationData.reason_apply }</h3>
                <h3> Application for event: { applicationData.event }</h3>

            </Link>
        </div>
    );
}

export default ApplicationCard;