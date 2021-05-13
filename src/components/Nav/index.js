import React from 'react';
// import { capitalizeFirstLetter } from "../../utils/helpers";

function Nav(props) {

    return (
        <nav>
            <ul>
                <li>
                    <a href="#about-me">About Me</a>
                </li>
                <li>
                    <a href="#port">Portfolio</a>
                </li>
                <li>
                    <a href="#contact-me">Contact Me</a>
                </li>
                <li>
                    <a href="./resume.html">Resume</a>
                </li>
            </ul>
        </nav>
    );
}

export default Nav;