import React from 'react';
import { Link } from 'react-router-dom';
function About() {
    return (
        <div>
            <h1>About Page</h1>
            <Link to="/">Go to Home Page</Link>
            <li>
                <Link to="/user/anil">Anil</Link>
            </li>
            <li>
                <Link to="/user/peter">Peter</Link>
            </li>
        </div>

    )
}

export default About;