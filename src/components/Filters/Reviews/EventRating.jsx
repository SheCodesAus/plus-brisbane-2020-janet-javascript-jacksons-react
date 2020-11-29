import React from "react";

function EventRating(props) {
    const { reviewData } = props
    const rating = reviewData.rating

    switch(rating) {
        case 1:
            return "OneStar"
        case 2:
            return "Two Stars"
        case 3:
            return "Three Stars"
        case 4:
            return "Four Stars"
        case 5:
            return "Five Stars"
    }
};

export default EventRating;