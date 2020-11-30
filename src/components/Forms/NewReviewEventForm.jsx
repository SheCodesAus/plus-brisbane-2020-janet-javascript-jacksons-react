import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";

function NewReviewEventForm() {
    const eventid = window.localStorage.getItem("event")
    const owner = window.localStorage.getItem("owner")
    const history = useHistory();
    var statuscode = 0;

    const [review, setNewReview] = useState({
        event_id: "",
        owner: "",
        comment: "",
        rating: "",
        // reviewer: ""
    });

    const handleChange = (e) => {
        e.preventDefault();
        const { id, value } = e.target;
        setNewReview((prevReview) => ({
            ...prevReview, [id]: value,
        }));
    }

    const postData = async () => {
        // const token = window.localStorage.getItem("token")

        const response = await fetch(
            `${process.env.REACT_APP_API_URL}events/newreview/`,
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    // 'Authorization': `Token ${token}`
                },
                body: JSON.stringify(review),
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
            // if(statuscode === 201) {
            //     setNewReview(response);
                window.localStorage.setItem("review", response)
            //     history.push(`/events/${eventid}`);
            // } else {
            //     console.log(statuscode);
            //     history.push("/unauthorised");
            // }
        });
    };

    return (
        <form className="create-form">
            <h1>Write a Review for an Event</h1>
            <p>Share your thoughts and feedback about being a Hero at an Event.</p>
            <p>This may encourage someone who has not yet found the courage to apply to be a Hero, to give it a go.</p>
            <p>It is also nice to let the Event Host know how much you appreciate the effort they put into creating the event. 
                It can be a long and thankless job for those working behind the scenes. 
                This is your change to show them some appreciation.</p>
            <p>You need to be signed in to write a review. <Link to="/signin">Sign in</Link></p>
            <br/>

            <label htmlFor="event_id">Which Event are you reviewing?</label>
            <input
                type="number"
                id="event_id"
                placeholder={eventid}
                onChange={handleChange}
            />
            <br/>
            <label htmlFor="owner">What is your User ID?</label>
            <input
                type="number"
                id="owner"
                placeholder={owner}
                onChange={handleChange}
                />
            <br/>
            <label htmlFor="comment">Share your thoughts here:</label>
            <input
                type="text"
                id="comment"
                default="Write your review here."
                onChange={handleChange}
                />
            <br/>
            <label htmlFor="rating">Rate this Event (maximum of 5 stars)</label>
            <select id='rating' onChange={handleChange}>
                <option value="5">5 Stars</option>
                <option value="4">4 Stars</option>
                <option value="3">3 Stars</option>
                <option value="2">2 Stars</option>
                <option value="1">1 Star</option>
            </select>
            <br/>
            Are you ready to publish your review?
            <button type="submit" onClick={ handleSubmit }>Publish Now</button>
            <br/>
        </form>
    );
}

export default NewReviewEventForm;