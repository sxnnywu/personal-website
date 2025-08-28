import React from 'react';
import './FeatureItem.css';

function FeatureItem({ features = [] }) {
    return (
        <div className='feature-item'>

            {features.map((feature, index) => (
                <div
                    onClick={() => {
                        window.open(feature.link, "_blank", "noopener,noreferrer");
                    }}
                    key={index}
                    style={{ '--index': index }}
                >
                    <img src={feature.image} alt='thumbnail' />
                    <h3>{feature.platform}</h3>
                </div>
            ))}
        </div>
    )
}

export default FeatureItem;