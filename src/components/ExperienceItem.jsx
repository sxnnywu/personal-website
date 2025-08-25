// IMPORTS
import React from 'react';
import './ExperienceItem.css';

// COMPONENT
function ExperienceItem({ title, company, date, imageURL }) {
    return (
        <div className="experience-item">
            {imageURL && <img src={imageURL} alt={`${title} logo`} />}
            <p>{title}</p>
            <p>{company}</p>
            <span>{date}</span>
            <button>Learn more</button>
        </div>
    );
}

export default ExperienceItem;