import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import './Forms.css';

function NewApplicationForm() {
    const [application, setNewApplication] = useState({
        reason_apply: "",
    });



    return (
        <form>





            <button type='submit' onClick={ handleSubmit }>
                    Apply
            </button>
        </form>
    );
}
    export default NewApplicationForm;