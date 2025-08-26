// IMPORTS
import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules'
import './Projects.css';

// COMPONENT
function Projects() {

    return (
        <div className="projects">
            <h2>My Projects</h2>
            <p>Learning fast, building faster!</p>
        </div>
    );
}

export default Projects;