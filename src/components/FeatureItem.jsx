import React, { useEffect } from 'react';
import './FeatureItem.css';
import AOS from 'aos';
import 'aos/dist/aos.css';

function FeatureItem({ features = [] }) {

    useEffect(() => {
        AOS.init({ duration: 800, once: true, offset: 600 });
        AOS.refreshHard();
    }, []);

    return (
        <div className='feature-item'>

            {features.map((feature, index) => (
                <div
                    onClick={() => {
                        window.open(feature.link, "_blank", "noopener,noreferrer")}}
                        data-aos="fade-up"
                        data-aos-delay={index * 200}
                        data-aos-anchor-placement="top-bottom"
                    key={index}
                >
                    <img src={feature.image} alt='thumbnail' />
                    <h3>{feature.platform}</h3>
                </div>
            ))}
        </div>
    )
}

export default FeatureItem;