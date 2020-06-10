import React from 'react'
import "../css/Landing.css";

import Stats from "../../components/js/Stats";

import industrialLink from "../../assets/industrialLink.png";
import mediaLink from "../../assets/mediaLink.png";
import interactionLink from "../../assets/interactionLink.png";
import communicationLink from "../../assets/communicationLink.png";


export default function Landing() {
    return (
        <div>
            <div class="landing-section">
                <div class="landing-section-text">
                    <h1>Title</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</p>
                </div>
                <div class="shortcut-links">
                <a href=""><img src={industrialLink} alt="'Industrial' text with blue splodges" /></a>
                <a href=""><img src={mediaLink} alt="'Media' text with red splodges" /></a>
                <a href=""><img src={interactionLink} alt="'Interaction' text with yellow splodges" /></a>
                <a href=""><img src={communicationLink} alt="'Communication' text with orange splodges" /></a>

           
                </div>
                <div className="view-all">
                <p>Lorem ipsum dolor sit amet? consectetur adipiscing elit.<button>View all</button></p>
                </div>
            </div>
            
            <Stats />

        </div>
    )
}
