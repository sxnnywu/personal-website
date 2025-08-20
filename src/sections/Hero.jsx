// IMPORTS
import React from 'react';
import './Hero.css';
import headshot from '../assets/headshot.JPG';

// COMPONENT
function Hero() {
    return (
        <div className="hero">

            <div className="text">

                <h1>Sunny Wu</h1>

                <div className="headline">
                    <p className="headline-text"><b>Computer Science @ University of Waterloo</b></p>
                    <p className="headline-text"><b>Business Administration @ Lazaridis School of Business</b></p>
                </div>

                <div className="description">
                    <p>Things I love:</p>
                    <ul>
                        <li>Building tools that make life better</li>
                        <li>Fast-moving teams</li>
                        <li>Interdisciplinary work</li>
                        <li>Product-focused development</li>
                        <li>Math, notion, matcha</li>
                    </ul>
                </div>

                <div className="buttons"> 
                    <a href="https://www.linkedin.com/in/sunny-wu-dev/" target="_blank" rel="noopener noreferrer" className="button">LinkedIn</a>
                    <a href="https://www.github.com/sxnnywu" target="_blank" rel="noopener noreferrer" className="button">GitHub</a>
                    <a href="https://sunnywu.ca/resume.pdf" target="_blank" rel="noopener noreferrer" className="button">Resume</a>
                </div>
            </div>

            <img src={headshot} alt="Headshot" className="headshot" />

        </div>
    )
}
export default Hero;