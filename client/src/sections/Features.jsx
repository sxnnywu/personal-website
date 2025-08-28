// IMPORTS
import React, { useState } from 'react';
import './Features.css';
import steam from '../assets/steam.png';
import innovation from '../assets/innovation.png';
import prof from '../assets/prof.png';
import FeatureItem from '../components/FeatureItem.jsx';

// COMPONENT
function Features() {

    const features = [
        {
            platform: "Full STEAM Ahead Podcast",
            link: "https://www.youtube.com/watch?v=s5EDPL-dHNg",
            image: steam
        },
        {
            platform: "Innovation Insider",
            link: "https://lnkd.in/gMwe-YkW",
            image: innovation
        },
        {
            platform: "Professor Kev Show",
            link: "https://www.youtube.com/watch?v=dEN2UKQS42U",
            image: prof
        }
    ]

    return (
        <div className="features" id="features">
            <h2>Where I've Been Featured</h2>
            <p>A few moments I'm proud of</p>
            <div className="featureContainer">
                <FeatureItem 
                    features={features}
                />
            </div>
        </div>
    );
}

export default Features;