// IMPORTS
import React, { useState, useRef } from 'react';
import './Projects.css';
import ProjSwiper from '../components/ProjSwiper.jsx';
import nomnom from '../assets/nomnom.png';
import chalkboard from '../assets/chalkboard.png';
import chalk from '../assets/chalk.png';
import crimesight from '../assets/crimesight.png';
import queueme from '../assets/queueme.png';
import beamy from '../assets/beamy.png';
import bohanza from '../assets/bohanza.png';
import mazerace from '../assets/mazerace.png';
import byte from '../assets/byte.png';
import mind from '../assets/mind.png';

// COMPONENT
function Projects() {

    const sweprojects = [
        {
            title: "Nom Nom",
            description: "DMZ backed discreet safety app for domestic violence, disguised as a bakery",
            stack: "react native, typescript, node js, express, mongodb, aws, callkit",
            link: "https://www.youtube.com/watch?v=j03ZX847f54&t=1s",
            imageURL: nomnom
        },
        {
            title: "Chalkboard",
            description: "Desktop app designed to streamline student club organization in a high school or university setting",
            stack: "java, sqlite",
            link: "https://github.com/sxnnywu/Chalkboard",
            imageURL: chalk
        },
        {
            title: "CrimeSight",
            description: "Desktop app featuring customizable data visualization for dataset: Use of Force Rates in Correctional Institutions in Ontario",
            stack: "java",
            link: "https://github.com/sxnnywu/CrimeSight",
            imageURL: crimesight
        },
        {
            title: "QueueMe",
            description: "Mobile app digitizing physical lines for service providers and clients",
            stack: "react native, typescript, python, flask",
            link: "https://github.com/sxnnywu/QueueMe",
            imageURL: queueme
        },
        {
            title: "Code With Beamy",
            description: "A desktop app to learn Java's OOP through lessons, escape room game, and assessment.",
            stack: "java",
            link: "https://github.com/sxnnywu/Code-With-Beamy",
            imageURL: beamy
        }
    ];

    const gamedevprojects = [
        {
            title: "Bohanza",
            description: "Digitized card game utilizing heuristics",
            stack: "java",
            link: "https://github.com/sxnnywu/Bohanza",
            imageURL: bohanza
        },
        {
            title: "MazeRace",
            description: "Desktop maze game: Choose a character, race through the maze, collect coins, and unlock new levels.",
            stack: "java",
            link: "https://github.com/sxnnywu/MazeRace",
            imageURL: mazerace
        }
    ];

    const writingprojects = [
        {
            title: "Byte Sized Learning",
            description: "Co-author",
            stack: "Coding workbook for kids donated across Peru & Kenya to underserved students",
            imageURL: byte
        },
        {
            title: "MIND (Math in Nature's Design",
            description: "Cofounder, research writer, marketing manager",
            stack: "Weekly math blog with 600+ readers",
            link: "https://mindmathblog.wordpress.com/",
            imageURL: mind
        }
    ]

    return (
        <div className="projects" id="projects">
            <h2>My Projects</h2>
            <p>Want to see more? Click on the projects or check out my
                <span>
                    <a href="https://github.com/sxnnywu" target="_blank"> github!</a>
                </span>
            </p>

            <h4>Software</h4>
            <ProjSwiper projects={sweprojects} />

            <h4>Game Dev</h4>
            <ProjSwiper projects={gamedevprojects} />

            <h4>Publications</h4>
            <ProjSwiper projects={writingprojects} />
            
        </div>
    );
}

export default Projects;