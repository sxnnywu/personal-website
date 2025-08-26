// IMPORTS
import React, { useState } from 'react';
import './Projects.css';

// COMPONENT
function Projects() {

    return (
        <div className="experience">
            <h2>Experience</h2>
            <p>Strategy, problem-solving, and growth in action</p>
            <ExperienceBelt onSelect={handleSelectExperience} />

            {selectedExperience && (
                <div className="modal-overlay">
                    <ExperienceStory
                        experience={selectedExperience}
                        onClose={() => setSelectedExperience(null)}
                    />
                </div>
            )}
        </div>
    );
}

export default Projects;