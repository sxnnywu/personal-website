// IMPORTS
import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/effect-coverflow';
import { EffectCoverflow, Pagination } from 'swiper/modules'
import './Projects.css';

// COMPONENT
function Projects() {

    const projects = [
        {
            title: "Bohanza",
            description: "Digitized card game utilizing heuristics",
            stack: "java",
            link: "#"
        },
        {
            title: "QueueMe",
            description: "Reducing physical waiting times through an online queueing system",
            stack: "react native, typescript, python, flask",
            link: "#"
        },
        {
            title: "Bohanza",
            description: "Digitized card game utilizing heuristics",
            stack: "java",
            link: "#"
        },
        {
            title: "QueueMe",
            description: "Reducing physical waiting times through an online queueing system",
            stack: "react native, typescript, python, flask",
            link: "#"
        }
    ]

    return (
        <div className="projects">
            <h2>My Projects</h2>
            <p>Want to see more? Check out my
                <span>
                    <a href="https://github.com/sxnnywu" target="_blank"> github!</a>
                </span>
            </p>

            <Swiper
                effect="coverflow"
                grabCursor={true}
                centeredSlides={true}
                slidesPerView="auto"
                loop={true}
                coverflowEffect={{
                    rotate: 20,
                    stretch: 50,
                    depth: 250,
                    modifier: 1,
                    slideShadows: false,
                }}
                pagination={{ clickable: true }}
                modules={[EffectCoverflow, Pagination]}
                className="mySwiper"
            >
                {projects.map((proj, index) => (
                    <SwiperSlide key={index} className="project-slide">
                        <div className="project-card">
                            <h3>{proj.title}</h3>
                            <p>{proj.description}</p>
                            {proj.link && (
                                <a href={proj.link} target="_blank" rel="noopener noreferrer">
                                    View Project →
                                </a>
                            )}
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
}

export default Projects;