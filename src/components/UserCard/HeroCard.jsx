import React from "react";
import { Link } from "react-router-dom";
import "./HeroCard.css";


function HeroCard(props) {
    const { heroData } = props;

    return (
        <Link to={`/hero/${heroData.id}`}>
            <div className="hero-card">
                <h3>{ heroData.first_name } {heroData.last_name}</h3>
                <img src={heroData.hero_image} alt="hero headshot"/>
                <h4>Bio: { heroData.hero_bio }</h4>
            </div>
        </Link>
    );
}

export default HeroCard;