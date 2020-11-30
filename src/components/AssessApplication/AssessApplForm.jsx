import React, { useState } from "react";
import { useParams, useHistory } from "react-router-dom";

const AssessAppl = (props) => {
    const appid = window.localStorage.getItem("appID")

    const [application, setApplication] = useState(props.currentApplication)
    // const { id } = useParams();
    const history = useHistory();
    var statuscode = 0;

    const handleChange = (e) => {
        e.preventDefault();
        const { id, value } = e.target;
        setApplication({ ...application, [id]: value })
    }

    const postData = async () => {   
        const token = window.localStorage.getItem("token")
     
        const response = await fetch(
        `${process.env.REACT_APP_API_URL}applications/${appid}/assess/`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json",
            'Authorization': `Token ${token}`
        },
        body: JSON.stringify(application),
        })
        .then((response) => {
            statuscode=(response.status);
            console.log(statuscode);
            return response.json();
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        postData()
        .then((response) => {
            if(statuscode === 201) {
                setApplication(response);
                history.push(`/applications/${appid}`);
            } else {
                console.log(statuscode);
                history.push("/unauthorised");
            };
        });
    };


    return (
        <form className="assess-application">
            <label htmlFor="id">Enter the Application number:</label>
            <input
                type="number"
                id="id"
                default={appid}
                onChange={handleChange}
            />
            <br/>
            <label htmlFor="is_accepted">Tick the box to ACCEPT this Application? Leave blank if application is not accepted.</label>
            <input
                type="checkbox"
                id="is_accepted"
                onChange={handleChange}
                />
            <br/>
            <label htmlFor="is_assessed">Tick this box to mark the Application as ASSESSED: </label>
            <input
                type="checkbox"
                id="is_assessed"
                onChange={handleChange}
                />  
            <br/>          
            <button 
                type="submit"
                onClick={ handleSubmit }
            >
            CONFIRM
            </button>
            <br/>
        </form>
    );
}

export default AssessAppl;


