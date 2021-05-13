import React from 'react';
import github from "../../assets/github/GitHub-Mark-64px.png";
import linkedin from "../../assets/linkedin/LI-In-Bug.png";
import twitter from "../../assets/twitter/larry.png";

function Footer() {

    return (
        <footer
            style={{ display: "flex", alignItems: "center", justifyContent: "space-around" }}
        >
            <a href="https://github.com/hlry" target="_blank">
                <img
                    src={github}
                    className="my-2"
                    style={{ width: 50 }}
                    alt="github"
                />
            </a>

            <a href="https://www.linkedin.com/in/hilaryrichardson" target="_blank">
                <img
                    src={linkedin}
                    className="my-2"
                    style={{ width: 50 }}
                    alt="linkedin"
                />
            </a>

            <a href="https://twitter.com/historiaster" target="_blank">
                <img
                    src={twitter}
                    className="my-2"
                    style={{ width: 50 }}
                    alt="twitter"
                />
            </a>

        </footer>
    );
}

export default Footer;