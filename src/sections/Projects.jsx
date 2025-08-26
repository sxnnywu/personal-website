// IMPORTS
import React, { useState, useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/effect-coverflow';
import { EffectCoverflow, Pagination } from 'swiper/modules'
import './Projects.css';
import { m } from 'framer-motion';

// COMPONENT
function Projects() {

    const swiperRef = useRef(null);

    const projects = [
        {
            title: "Bohanza",
            description: "Digitized card game utilizing heuristics",
            stack: "java",
            link: "#"
        },
        {
            title: "QueueMe",
            description: "Mobile app digitizing physical lines for service providers and clients",
            stack: "react native, typescript, python, flask",
            link: "#"
        },
        {
            title: "Nom Nom",
            description: "DMZ backed discreet safety app for domestic violence, disguised as a bakery",
            stack: "react native, typescript, node js, express, mongodb, aws, callkit",
            link: "#"
        },
        {
            title: "Chalkboard",
            description: "Desktop app designed to streamline student club organization in a high school or university setting",
            stack: "java, sqlite",
            link: "#"
        },
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
                onSwiper={swiper =>(swiperRef.current = swiper)}
                effect="coverflow"
                grabCursor={true}
                centeredSlides={true}
                slidesPerView="auto"
                loop={true}
                speed={500}
                coverflowEffect={{
                    rotate: 20,
                    stretch: 0,
                    depth: 220,
                    modifier: 2,
                    slideShadows: true,
                }}
                pagination={{ clickable: true }}
                modules={[EffectCoverflow, Pagination]}
                className="mySwiper"
            >
                {projects.map((proj, index) => (
                    <SwiperSlide key={index} className="project-slide">
                        <div 
                            className="project-card" 
                            onClick={() => swiperRef.current.slideTo(index, 500)}
                        >
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