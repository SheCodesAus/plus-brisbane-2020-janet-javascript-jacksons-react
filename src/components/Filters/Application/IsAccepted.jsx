import React from "react";
// import { Link } from "react-router-dom";

function IsAccepted (props) {
    const { applicationData } = props;
    const IsAccepted = applicationData.is_accepted 

    return (
        IsAccepted ?
        <div>Outcome: Accepted</div> :
        <div>Outcome: Not Accepted</div>
    )
}

export default IsAccepted;