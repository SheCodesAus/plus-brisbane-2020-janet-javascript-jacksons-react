import React from "react";
import { Link } from "react-router-dom";
import "./HeroCard.css";


function HeroCard(props) {
    const { heroData } = props;

    return (
        <div className="hero-card">
            <Link to={`/heroes/${heroData.id}`}>
                <h3>{ heroData.first_name } {heroData.last_name}</h3>
                <h4>Bio: { heroData.hero_bio }</h4>
            </Link>
        </div>
    );
}

export default HeroCard;