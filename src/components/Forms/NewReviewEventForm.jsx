import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";

function NewReviewEventForm() {
    const eventid = window.localStorage.getItem("event")
    const history = useHistory();

    const [review, setNewReview] = useState({
        event_id: eventid,
        event: eventid,
        comment: "",
        rating: "",
        reviewer: ""
    });

    const handleChange = (e) => {
        e.preventDefault();
        const { id, value } = e.target;
        setNewReview((prevReview) => ({
            ...prevReview, [id]: value,
        }));
    }

    const postData = async () => {
        const token = window.localStorage.getItem("token")

        const response = await fetch(
            `${process.env.REACT_APP_API_URL}events/newreview/`,
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    'Authorization': `Token ${token}`
                },
                body: JSON.stringify(review),
            }
        );
        return response.json();
    };


    const handleSubmit = (e) => {
        e.preventDefault();
        postData()
        .then((response) => {
            window.localStorage.setItem("review", response.review);
            history.push(`/events/${eventid}`);
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

            <label htmlFor="comment">Share your thoughts here:</label>
            <input
                type="text"
                id="comment"
                default="Write your review here."
                onChange={handleChange}
                />
            <br/>
            <label htmlFor="rating">Rate this Event</label>
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