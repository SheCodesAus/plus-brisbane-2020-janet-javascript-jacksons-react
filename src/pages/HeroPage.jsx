import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import BadgeEnthusiast from '../components/Categories/Badges/BadgeEnthusiast';
import BadgeExpert from '../components/Categories/Badges/BadgeExpert';
import BadgeMentor from '../components/Categories/Badges/BadgeMentor';
import BadgeFacilitator from '../components/Categories/Badges/BadgeFacilitator';
import BadgeKeynote from "../components/Categories/Badges/BadgeKeynote";

function HeroPage() {
    const [heroData, setHeroData] = useState({
        id: window.localStorage.getItem("id"),
        first_name:"",
        last_name:"",
        hero_image:"",
        linkedin_url:"",
        hero_bio:"",
        pref_pronoun:""
    });

    const { id } = useParams();

    useEffect(() => {
        fetch(`${process.env.REACT_APP_API_URL}users/hero/${id}/`)
        .then((results) => {
            return results.json();
        })
        .then((data) => {
            setHeroData(data)
        });
    });

    return (
        <div>
            <div className='hero-name'>
                <h2>Hero Name: { heroData.first_name } { heroData.last_name }</h2>
            </div>
            <div className='hero-image'>
                <img src={ heroData.hero_image } alt="hero-logo" />
            </div>
            <div className='hero-details'>
                <p>Bio: {heroData.hero_bio}</p>
                <p>LinkedIn Profile: {heroData.linkedin_url}</p>
                <p>{heroData.first_name} would like to be called { heroData.pref_pronounce }</p>
            </div>
            <div>
                <BadgeKeynote heroData={ heroData }/>
                <BadgeFacilitator heroData={ heroData }/>
                <BadgeMentor heroData={ heroData }/>
                <BadgeExpert heroData={ heroData }/>
                <BadgeEnthusiast heroData={ heroData }/>
            </div>
        </div>
    );
}

export default HeroPage;