// IMPORTS
import React from 'react';
import './Navbar.css';

// COMPONENT
function Navbar() {

    const [darkMode, setDarkMode] = React.useState(true);
    const [isOpen, setIsOpen] = React.useState(false);

    return (
        <div className="navbar">
            <button className="hamburger" onClick={() => setIsOpen(!isOpen)}>
                ☰
            </button>
            <a href="#about">About</a>
            <a href="#experience">Experience</a>
            <a href="#projects">Projects</a>
            <a href="#features">Features</a>
            <a href="#contact">Contact</a>
            <button className="toggle" onClick={() => setDarkMode(!darkMode)}>
                {darkMode ? "🌙" : "☀️"}
            </button>

            {isOpen && (
                <div className="dropdown">
                    <a href="#about">About</a>
                    <a href="#experience">Experience</a>
                    <a href="#projects">Projects</a>
                    <a href="#features">Features</a>
                    <a href="#contact">Contact</a>
                    <button className="toggle" onClick={() => setDarkMode(!darkMode)}>
                        {darkMode ? "🌙" : "☀️"}
                    </button>
                </div>
            )}
        </div>
    )
}

export default Navbar;