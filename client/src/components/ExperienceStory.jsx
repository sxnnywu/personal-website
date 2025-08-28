import React from 'react';
import './ExperienceStory.css';

function Section({ heading, items }) {
    return (
        <div className="section">
            <h3>{heading}</h3>
            <ul>
                {items.map((item, i) => (
                    <li key={i}>{item}</li>
                ))}
            </ul>
        </div>
    );
}

function ExperienceStory({ experience, onClose }) {

    const { title, company, duration, whatIDid,
        howIDid, impact, skills } = experience;

    return (
        <div className="experience-story">
            <h2>{title}</h2>
            <h3>{company}</h3>
            <p>{duration}</p>

            <div className="content">
                <Section heading="What I Did" items={whatIDid} />
                <Section heading="How I Did It" items={howIDid} />
                <Section heading="Impact" items={impact} />
                <div className="skills">
                    <h3>Skills & Tools</h3>
                        {skills.map((skill, i) => (
                            <div className="skill" key={i}>{skill}</div>
                        ))}
                </div>
            </div>

            <button onClick={onClose}>Close</button>
        </div>
    )
}

export default ExperienceStory;