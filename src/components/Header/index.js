import React from 'react';
import coverImage from "../../assets/cover/cover-image.jpg";

function Header() {
    return (
        <section className="my-5">
            <h1 id="header">HLRY Professional Portfolio</h1>
            <img src={coverImage} className="my-2" style={{ width: "100%" }} alt="cover" />
        </section>
    );
}

export default Header;