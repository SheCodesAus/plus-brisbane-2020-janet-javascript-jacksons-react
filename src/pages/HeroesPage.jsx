import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import HeroCard from '../components/UserCard/HeroCard';


function HeroesPage() {
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
        <div className='page-wrapper'>
            <div className='page-header'>
                <h1 className='page-title'>HEROES</h1>
                <Link className='ext-link' to='/apply'>
                    <button className='page-button' type="button">Apply for an Event</button>
                </Link>
            </div>
            
            <div className='page-main'>
                {heroList.map((heroData, key) => {
                    return <HeroCard key={key} heroData={heroData} />;
                })}
            </div>
        </div>
    );
}

export default HeroesPage;