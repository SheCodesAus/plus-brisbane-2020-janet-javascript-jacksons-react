import React from 'react';
import { Link } from 'react-router-dom';
import './Nav.css';


function Nav() {
    function handleClick(e) {
        e.preventDefault();
    }

    return (
        <nav>
            <div>
                <Link to="/events"><img src="https://res.cloudinary.com/flifree/image/upload/v1605358493/Deep%20Tech%20Heroes/Deep_Tech_Heroes_rhjokp.jpg" alt=""></img></Link>
            </div>
            <div>
                <Link to="/">Home</Link>
                <Link to="/events">Events</Link>
                <Link to="/heroes">Heroes</Link>
                <Link to="/hosts">Hosts</Link>
                <Link to="/contact">Contact Us</Link>
            </div>
            <div>
                <Link to="/signout">Sign Out</Link>
            </div>
        </nav>
    );
}

export default Nav;