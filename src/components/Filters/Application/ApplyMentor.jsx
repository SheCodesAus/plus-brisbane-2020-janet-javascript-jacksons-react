import React from "react";
// import { Link } from "react-router-dom";

function ApplyMentor (props) {
    const { applicationData } = props;
    const ApplyMentor = applicationData.apply_mentor 

    return (
        ApplyMentor ?
        <div>Supportive Mentor</div> :
        <div></div>
    )
}

export default ApplyMentor;