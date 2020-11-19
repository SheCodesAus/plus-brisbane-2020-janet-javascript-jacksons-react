import React from 'react';
import { Link } from 'react-router-dom';
import "./ApplicationCard.css";

function ApplicationCard(props) {
    const { applicationData } = props;
    return (
        <div className='application-card'>
            <Link to={`/applications/${applicationData.id}`}>
                <img src={ applicationData.image } alt="" />
                <h3>{ applicationData.application_name }</h3>
            </Link>
        </div>
    );
}

export default ApplicationCard;