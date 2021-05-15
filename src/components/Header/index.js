import React from 'react';
import Nav from '../Nav';

function Header(props) {
    return (
        <header>
            <h1>Hilary Richardson</h1>
            <Nav contactSelected={props.contactSelected} setContactSelected={props.setContactSelected}></Nav>
        </header>
    );
}

export default Header;