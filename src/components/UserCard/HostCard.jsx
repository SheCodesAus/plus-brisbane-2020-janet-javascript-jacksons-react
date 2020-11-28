import React from "react";
import { Link } from "react-router-dom";
import "./HostCard.css";


function HostCard(props) {
    const { hostData } = props;

    return (
        <div className="host-card">
            <Link to={`/hosts/${hostData.id}`}>
                <h3>{ hostData.organisation_name }</h3>
                <img src={ hostData.organisation_logo } alt="Company-Logo" />
            </Link>
    </div>
    );
}

export default HostCard;