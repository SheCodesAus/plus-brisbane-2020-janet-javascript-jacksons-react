import React from "react";
// import { Link } from "react-router-dom";

function ApplyExpert (props) {
    const { applicationData } = props;
    const ApplyExpert = applicationData.apply_expert 

    return (
        ApplyExpert ?
        <div>Topic Expert</div> :
        <div></div>
    )
}

export default ApplyExpert;