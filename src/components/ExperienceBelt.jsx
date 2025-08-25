// IMPORTS
import React from 'react';
import { motion } from 'framer-motion';
import ExperienceItem from './ExperienceItem.jsx';
import tps from '../assets/tps.JPG';
import './ExperienceBelt.css';
// import iycge from '../assets/iycge.png';
// import skans from '../assets/skans.png';
// import nofrills from '../assets/nofrills.png';

const items = [
    {
        title: "Advisor",
        company: "International Youth Council on Gender Equality",
        date: "Aug 2025 - Present",
        imageURL: tps
    },
    {
        title: "Founder & CEO",
        company: "The Pink Stairs",
        date: "Jun 2024 - Present",
        imageURL: tps
    },
    {
        title: "Accounting Intern",
        company: "Skans Accountants",
        date: "Feb 2024 - Jun 2024",
        imageURL: tps
    },
    {
        title: "Frontend Supervisor",
        company: "No Frills",
        date: "Aug 2023 - Mar 2024",
        imageURL: tps
    },
    {
        title: "Cashier",
        company: "No Frills",
        date: "Aug 2022 - Aug 2023",
        imageURL: tps
    }
];

// COMPONENT
function ExperienceBelt() {
    return (
        <div className="experience-belt">
            <div className="belt-track">
                {items.map((item, index) => (
                    <motion.div
                        key={`first-${index}`}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                    >
                        <ExperienceItem
                            title={item.title}
                            company={item.company}
                            date={item.date}
                            imageURL={item.imageURL}
                        />
                    </motion.div>
                ))}
                {items.map((item, index) => (
                    <motion.div
                        key={`second-${index}`}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                    >
                        <ExperienceItem
                            title={item.title}
                            company={item.company}
                            date={item.date}
                            imageURL={item.imageURL}
                        />
                    </motion.div>
                ))}
            </div>
        </div>
    );
}

export default ExperienceBelt;