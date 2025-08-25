// IMPORTS
import React, { useState } from 'react';
import './Experience.css';
import ExperienceBelt from '../components/ExperienceBelt.jsx';
import ExperienceStory from '../components/ExperienceStory.jsx';

// COMPONENT
function Experience() {

    const [selectedExperience, setSelectedExperience] = useState(null);

    const experiences = [
        {
            title: "Advisor",
            company: "International Youth Council on Gender Equality",
            duration: "Aug 2025 - Present",
            whatIDid: [
                "Founded and led a startup focused on innovative tech solutions.",
                "Managed a team of developers and designers to deliver high-quality products."
            ],
            howIDid: [
                "Implemented agile methodologies to streamline project management.",
                "Fostered a collaborative team environment to encourage creativity and innovation."
            ],
            impact: [
                "Successfully launched multiple products, achieving significant user engagement.",
                "Grew the company from a small startup to a recognized name in the industry."
            ],
            skills: ["Leadership", "Project Management", "Agile Methodologies", "Team Building"],
        },
        {
            title: "Founder & CEO",
            company: "The Pink Stairs",
            duration: "Jun 2024 - Present",
            whatIDid: [
                "Founded and led a startup focused on innovative tech solutions.",
                "Managed a team of developers and designers to deliver high-quality products."
            ],
            howIDid: [
                "Implemented agile methodologies to streamline project management.",
                "Fostered a collaborative team environment to encourage creativity and innovation."
            ],
            impact: [
                "Successfully launched multiple products, achieving significant user engagement.",
                "Grew the company from a small startup to a recognized name in the industry."
            ],
            skills: ["Leadership", "Project Management", "Agile Methodologies", "Team Building"],
        },
        {
            title: "Accounting Intern",
            company: "Skans Accountants",
            duration: "Feb 2024 - Jun 2024",
            whatIDid: [
                "Founded and led a startup focused on innovative tech solutions.",
                "Managed a team of developers and designers to deliver high-quality products."
            ],
            howIDid: [
                "Implemented agile methodologies to streamline project management.",
                "Fostered a collaborative team environment to encourage creativity and innovation."
            ],
            impact: [
                "Successfully launched multiple products, achieving significant user engagement.",
                "Grew the company from a small startup to a recognized name in the industry."
            ],
            skills: ["Leadership", "Project Management", "Agile Methodologies", "Team Building"],
        },
        {
            title: "Frontend Supervisor",
            company: "No Frills",
            duration: "Aug 2023 - Mar 2024",
            whatIDid: [
                "Founded and led a startup focused on innovative tech solutions.",
                "Managed a team of developers and designers to deliver high-quality products."
            ],
            howIDid: [
                "Implemented agile methodologies to streamline project management.",
                "Fostered a collaborative team environment to encourage creativity and innovation."
            ],
            impact: [
                "Successfully launched multiple products, achieving significant user engagement.",
                "Grew the company from a small startup to a recognized name in the industry."
            ],
            skills: ["Leadership", "Project Management", "Agile Methodologies", "Team Building"],
        },
        {
            title: "Cashier",
            company: "No Frills",
            duration: "Aug 2022 - Jul 2023",
            whatIDid: [
                "Founded and led a startup focused on innovative tech solutions.",
                "Managed a team of developers and designers to deliver high-quality products."
            ],
            howIDid: [
                "Implemented agile methodologies to streamline project management.",
                "Fostered a collaborative team environment to encourage creativity and innovation."
            ],
            impact: [
                "Successfully launched multiple products, achieving significant user engagement.",
                "Grew the company from a small startup to a recognized name in the industry."
            ],
            skills: ["Leadership", "Project Management", "Agile Methodologies", "Team Building"],
        },
    ]

    return (
        <div className="experience">
            <h2>Experience</h2>
            <ExperienceBelt onSelect={setSelectedExperience} />
            
            {selectedExperience && (
                <ExperienceStory
                experience={experiences[0]}
                onClose={() => setSelectedExperience(null)}
                />
            )}
        </div>
    );
}

export default Experience;