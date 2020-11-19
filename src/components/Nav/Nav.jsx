import React from 'react';
import { Link } from 'react-router-dom';
import './Nav.css';


function Nav() {
    
    return (
        <nav>
            <div className="logo">
                <Link to="/"><img src="https://res.cloudinary.com/flifree/image/upload/v1605358493/Deep%20Tech%20Heroes/Deep_Tech_Heroes_rhjokp.jpg" alt=""></img></Link>
            </div>
            <div className="nav-menu">
                <Link to="/">Home</Link>
                &nbsp;&nbsp;&nbsp;&nbsp;
                <Link to="/events">Events</Link>
                &nbsp;&nbsp;&nbsp;&nbsp;
                <Link to="/users">Heroes</Link>
                &nbsp;&nbsp;&nbsp;&nbsp;
                <Link to="/users">Hosts</Link>
                &nbsp;&nbsp;&nbsp;&nbsp;
                <Link to="/contact">Contact Us</Link>
            </div>
            <div>
                <Link to="/signin">Sign In</Link> &nbsp;
                <Link to="/signout">Sign Out</Link>
            </div>
        </nav>
    );
}

export default Nav;