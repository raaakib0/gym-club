import React from "react";
import './Header.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDumbbell } from '@fortawesome/free-solid-svg-icons'

function Header() {
    return (
        <div className="Header-container">
            <h1><FontAwesomeIcon icon={faDumbbell}></FontAwesomeIcon> GYM CLUB</h1>
        </div>
    );
}

export default Header;