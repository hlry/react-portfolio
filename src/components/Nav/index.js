import React from 'react';
// import { capitalizeFirstLetter } from "../../utils/helpers";


function Nav({ contactSelected, setContactSelected }) {

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
                    <span onClick={() => { setContactSelected(true) }}>
                        <a href="#contact-me" >Contact</a>
                    </span>

                </li>
                <li>
                    <a href="#resume">Resume</a>
                </li>
            </ul>
        </nav>
    );
}



export default Nav;