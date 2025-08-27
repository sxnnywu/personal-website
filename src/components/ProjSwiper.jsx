import React, { useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/effect-coverflow';
import { EffectCoverflow, Pagination } from 'swiper/modules'
import './ProjSwiper.css';

function ProjSwiper({projects = []}) {

    const swiperRef = useRef(null);

    return (
        <Swiper
            onSwiper={swiper => (swiperRef.current = swiper)}
            effect="coverflow"
            grabCursor={true}
            centeredSlides={true}
            slidesPerView={'auto'}
            loop={projects.length > 2}
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
                        onClick={() => swiperRef.current?.slideToLoop(index, 500)}
                    >
                        {proj.imageURL && <img src={proj.imageURL} alt='mockup' />}
                        <h3>{proj.title}</h3>
                        <p className="description">{proj.description}</p>
                        <p className="stack">{proj.stack}</p>
                    </div>
                </SwiperSlide>
            ))}
        </Swiper>
    )
}

export default ProjSwiper;

