import React, { useState, useEffect } from "react";
import Carousel from "react-elastic-carousel";
import HeroCard from "./HeroCard";

function HeroCarousel() {
    const [heroList, setHeroList] = useState([]);

    useEffect(() => {
        fetch(`${process.env.REACT_APP_API_URL}users/heros`, {
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
        })
        .then((results) => {
            return results.json();
        })
        .then((data) => {
            setHeroList(data);
        });
    }, []);

    return (
        <Carousel>
            {heroList.map(heroData => <div key={heroData.id}><HeroCard heroData={heroData}/></div>)}
        </Carousel>
    );
}

export default HeroCarousel;