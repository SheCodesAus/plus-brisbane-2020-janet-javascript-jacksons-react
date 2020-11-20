import React from "react";
import { useHistory } from "react-router-dom";

function SignOutForm() {
    const history = useHistory();

    const handleSignout = (e) => {
        e.preventDefault();
        window.localStorage.clear("")
        history.push("/")
    };

    return (
        <div>
            <button onClick={handleSignout}>Sign Out</button>
        </div>
    );
}

export default SignOutForm;