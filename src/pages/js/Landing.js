import React from 'react'
import "../css/Landing.css";

import Stats from "../../components/js/Stats";

import industrialLink from "../../assets/industrialLink.png";
import mediaLink from "../../assets/mediaLink.png";
import interactionLink from "../../assets/interactionLink.png";
import communicationLink from "../../assets/communicationLink.png";

import industrialImg from "../../assets/industrialImg.png";
import mediaImg from "../../assets/mediaImg.png";
import interactionImg from "../../assets/interactionImg.png";
import communicationImg from "../../assets/communicationImg.png";


export default function Landing() {
    return (
        <div>
            <div class="landing-section">
                <div class="landing-section-text">
                    <h1>School of Design</h1>
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

            <div className="major-description">
                <h2>Industrial</h2>
                <div className="major-main-content">
                    <img src={industrialImg} alt="3D printer with blue splodge" />
                    <div className="major-main-content-text">
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.</p>
                        <button className="major-main-content-industrial-button">Learn more</button>
                    </div>
                </div>
            </div>

            <div className="major-description">
                <h2>Media</h2>
                <div className="major-main-content">
                    <img src={mediaImg} alt="playstation controller with red splodge" />
                    <div className="major-main-content-text">
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.</p>
                        <button className="major-main-content-media-button">Learn more</button>
                    </div>
                </div>
            </div>

            <div className="major-description">
                <h2>Interaction</h2>
                <div className="major-main-content">
                    <img src={interactionImg} alt="mobile phone with interface on it with yellow splodge" />
                    <div className="major-main-content-text">
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.</p>
                        <button className="major-main-content-interaction-button">Learn more</button>
                    </div>
                </div>
            </div>

            <div className="major-description">
                <h2>Communication</h2>
                <div className="major-main-content">
                    <img src={communicationImg} alt="open book with graphic design elements with orange splodge" />
                    <div className="major-main-content-text">
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.</p>
                        <button className="major-main-content-communication-button">Learn more</button>
                    </div>
                </div>
            </div>

        </div>
    )
}
