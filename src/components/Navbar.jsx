// IMPORTS
import React from 'react';
import './Navbar.css';

// COMPONENT
function Navbar() {

    const [darkMode, setDarkMode] = React.useState(true);

    return (
        <div className="navbar">
            <a href="#about">About</a>
            <a href="#experience">Experience</a>
            <a href="#projects">Projects</a>
            <a href="#features">Features</a>
            <a href="#contact">Contact</a>
            <button className="toggle" onClick={() => setDarkMode(!darkMode)}>
                {darkMode ? "🌙" : "☀️"}
            </button>
        </div>
    )
}

export default Navbar;