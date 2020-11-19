import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import './Forms.css';

function NewApplicationForm() {
    const [application, setNewApplication] = useState({
        reason_apply: "",
    });

    const handleChange = (e) => {
        e.preventDefault();
        const { id, value } = e.target;
        setNewApplication((prevEvent) => ({
            ...prevEvent,
            [id]: value,
        }));
    }

    const history = useHistory();


    return (
        <form>





            <button type='submit' onClick={ handleSubmit }>
                    Apply
            </button>
        </form>
    );
}
    export default NewApplicationForm;