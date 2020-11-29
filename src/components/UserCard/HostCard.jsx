import React from "react";
import { Link } from "react-router-dom";
import "./HostCard.css";


function HostCard(props) {
    const { hostData } = props;

    return (
        <Link to={`/host/${hostData.id}`}>
            <div className="host-card">  
                <h3>{ hostData.organisation_name }</h3>
                <img src={ hostData.organisation_logo } alt="Company-Logo" />
                </div>
        </Link>
    
    );
}

export default HostCard;