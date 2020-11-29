import React from "react";
// import { Link } from "react-router-dom";

function ApplyEnthusiast (props) {
    const { applicationData } = props;
    const ApplyEnthusiast = applicationData.apply_enthusiast 

    return (
        ApplyEnthusiast ?
        <div>Tech Enthusiast</div> :
        <div></div>
    )
}

export default ApplyEnthusiast;