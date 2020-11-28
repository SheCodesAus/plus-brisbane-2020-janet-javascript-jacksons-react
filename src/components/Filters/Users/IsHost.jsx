import React from "react";
import { Link } from "react-router-dom";

function IsHost (props) {
    const { eventData } = props;
    const host = window.localStorage.getItem("user_id")
    const IsHost = eventData.owner === host

    return (
        IsHost ?
        <div>User is the Event Host</div> :
        <div>User is not the Event Host</div>
    );
}

export default IsHost;