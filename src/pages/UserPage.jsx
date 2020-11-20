import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";

function UserPage() {
    const [userData, setUserData] = useState({ users: [] });
    const { id } = useParams();

    useEffect(() => {
        // const token = window.localStorage.getItem("token")

        fetch(`${process.env.REACT_APP_API_URL}users/${id}`, {
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
        })
        .then((results) => {
            return results.json();
        })
        .then((data) => {
            setUserData(data);
        });
    }, [id]);

    return (
        <div>
            <p>{ userData.username }</p>
            <p>Become a <Link to="/newhero">Hero</Link></p>
        </div>
    );
}

export default UserPage;
