import React from "react";
import { Link } from "react-router-dom";

function Footer() {
    return (
        <nav>
            <div className="footer">
                <Link to="/about">About</Link>
                &nbsp;&nbsp; | &nbsp;&nbsp;
                <Link to="/twitter">Twitter</Link>
                &nbsp;&nbsp; | &nbsp;&nbsp;
                <Link to="/contact">Contact</Link>
            </div>
            <div className="copyright">
                <p>&copy; Deep Tech Heroes 2020</p>
            </div>
        </nav>
    );
}

export default Footer;