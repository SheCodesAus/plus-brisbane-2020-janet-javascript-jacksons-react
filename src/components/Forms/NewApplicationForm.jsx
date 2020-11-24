import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { Link } from "react-router-dom";

import './Forms.css';

function NewApplicationForm() {
    const [application, setNewApplication] = useState({
        reason_apply: "",
    });

    const handleChange = (e) => {
        e.preventDefault();
        const { id, value } = e.target;
        setNewApplication((prevApplication) => ({
            ...prevApplication,
            [id]: value,
        }));
    }

    const history = useHistory();

    const postData = async () => {

        const response = await fetch (
            `${process.env.REACT_APP_API_URL}/applications/new/`,
            {
                method: 'POST',
                headers: {
                    "Content-Type": "application/json",
                    // 'Authorization': `Token ${token}`
                },
                body: JSON.stringify(application),
            }
        );
        return response.json();
    };

    // const handleSubmit = (e) => {
    //     e.preventDefault();
    //     postData().then((response) => {
    //         window.localStorage.setItem('application', response.application);
    //         history.push('/applications');
    //     });
    // };

    return (
            <form className='create-form'>
                <h1>Apply for an Event</h1>
                <p>You will need to be signed in as a Hero to be able to apply for an Event.</p>

                <label htmlFor='reason_apply'>Reason to Apply</label>
                <input
                    type='text'
                    id='reason_apply'
                    required
                    onChange={handleChange}
                />

                <Link to='/ConfirmApplication'>
                    <button type='submit' > Apply </button>
                </Link>

            </form>
    );
}
    export default NewApplicationForm;