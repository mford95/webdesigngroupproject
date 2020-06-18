import React from 'react'
import "../css/Landing.css";

import { ParallaxProvider } from 'react-scroll-parallax';

import Fade from 'react-reveal/Fade';
import Reveal from 'react-reveal/Reveal';

import Stats from "../../components/js/Stats";

import industrialLink from "../../assets/industrialLink.png";
import mediaLink from "../../assets/mediaLink.png";
import interactionLink from "../../assets/interactionLink.png";
import communicationLink from "../../assets/communicationLink.png";

import industrialImg from "../../assets/industrialImg.png";
import mediaImg from "../../assets/mediaImg.png";
import interactionImg from "../../assets/interactionImg.png";
import communicationImg from "../../assets/communicationImg.png";


import interactionMobile from "../../assets/interactionMobile.png";
import interactionSplodge from "../../assets/interactionSplodge.png";




export default function Landing() {
    return (
        <div>
            <div class="landing-section">
                <div class="landing-section-text">
                    <h1>School of Design</h1>
                    <p>The Bachelor of Design Innovation (BDI) will prepare you to work as a designer in an exciting variety of design-based professions. Find out about the areas of design you can major in for your undergraduate degree, along with two areas offered at postgraduate level.</p>
                </div>
                <div class="shortcut-links">
                <a className="shortcut-links-hover" href=""><img src={industrialLink} alt="'Industrial' text with blue splodges" /></a>
                <a className="shortcut-links-hover" href=""><img src={mediaLink} alt="'Media' text with red splodges" /></a>
                <a className="shortcut-links-hover" href=""><img src={interactionLink} alt="'Interaction' text with yellow splodges" /></a>
                <a className="shortcut-links-hover" href=""><img src={communicationLink} alt="'Communication' text with orange splodges" /></a>

           
                </div>
                <div className="view-all">
                <p>Not sure exactly what you're after? No worries,<button>View all</button></p>
                </div>
            </div>
            
            <Stats />

            {/* <Fade left duration={2000} delay={1000}>
                <p>Markup that will be revealed on scroll</p>
            </Fade> */}

            {/* <Reveal effect="fadeInUp"> */}


            <div className="major-description">
                <Fade bottom duration={2000} fraction={0.1}>
                <h2>Industrial</h2>
                </Fade>
                <div className="major-main-content">
                    <div className="image">
                    <Fade bottom duration={1500} fraction={0.1}>
                        <img src={industrialImg} alt="3D printer with blue splodge" />
                        </Fade>

                    </div>
                    <Fade bottom duration={1500} fraction={0.1}>

                    <div className="major-main-content-text">
                        <div className="major-main-content-text-align">
                            <p>Learn how to develop original, useful and meaningful products that enrich our daily lives. Explore the complex social and cultural considerations that go into creating good design.</p>
                            <button className="major-main-content-industrial-button">Learn more</button>
                        </div>

                    </div>
                    </Fade>

                </div>
            </div>


            {/* </Reveal> */}


            <div className="major-description">
            <Fade bottom duration={2000} fraction={0.1}>
                <h2>Media</h2>
            </Fade>

                <div className="major-main-content">
                    <div className="image">
                    <Fade bottom duration={1500} fraction={0.1}>
                        <img src={mediaImg} alt="playstation controller with red splodge" />
                        </Fade>

                    </div>
                    <div className="major-main-content-text">
                        <div className="major-main-content-text-align">
                            <p>Media Design explores the different ways people interact with digital technology. This includes web experiences, visual and audio communication, augmented and virtual reality, gaming, and mobile media.</p>
                            <button className="major-main-content-media-button">Learn more</button>
                        </div>
                    </div>
                </div>
            </div>

            <div className="major-description">
                <h2>Interaction</h2>
                <div className="major-main-content">
                    <div className="image">
                        <img className="inter-image" src={interactionImg} alt="mobile phone with interface on it with yellow splodge" />
                    </div>
                    <div className="major-main-content-text">
                        <div className="major-main-content-text-align">
                            <p>Study how humans connect and interact with a vast range of physical and digital systems. Learn to envision how people experience products—from real objects to digital interactions with apps and websites—and bring that vision to life in ways that feel inspired, refined, and even magical.</p>
                            <button className="major-main-content-interaction-button">Learn more</button>
                        </div>
                    </div>
                </div>
            </div>

            <div className="major-description">
                <h2>Communication</h2>
                <div className="major-main-content">
                    <div className="image">
                        <img src={communicationImg} alt="open book with graphic design elements with orange splodge" />
                    </div>
                    <div className="major-main-content-text">
                        <div className="major-main-content-text-align">
                            <p>Learn to communicate effective visual messages, information and ideas that contribute to a successful design product.</p>
                            <button className="major-main-content-communication-button">Learn more</button>
                        </div>
                    </div>
                </div>
            </div>








            <div className="major-description">
                <h2>Communication</h2>
                <div className="major-main-content">
                    <div className="image">
                        <div className="la">
                            <img className="i-image" src={interactionMobile} alt="mobile phone with interface on it with yellow splodge" />
                        </div>
                    </div>
                    <div className="major-main-content-text">
                        <div className="major-main-content-text-align">
                            <p>Learn to communicate effective visual messages, information and ideas that contribute to a successful design product.</p>
                            <button className="major-main-content-communication-button">Learn more</button>
                        </div>
                    </div>
                </div>
            </div>












            <div className="major-description">
                <h2>Interaction</h2>
                <div className="major-main-content">
                    {/* <div className="image"> */}
                        <div className="major-main-content-image">
                            <div>
                            <img className="i-image" src={interactionMobile} alt="mobile phone with interface on it with yellow splodge" />
                            {/* <div class="overlay"> */}
                                <img className="s-image" src={interactionSplodge} alt="mobile phone with interface on it with yellow splodge" />
                            {/* </div> */}
                            </div>
                        {/* </div> */}

                    </div>
                    <div className="major-main-content-text">
                        <div className="major-main-content-text-align">
                            <p>Study how humans connect and interact with a vast range of physical and digital systems. Learn to envision how people experience products—from real objects to digital interactions with apps and websites—and bring that vision to life in ways that feel inspired, refined, and even magical.</p>
                            <button className="major-main-content-interaction-button">Learn more</button>
                        </div>
                    </div>
                </div>
            </div>










            <ParallaxProvider>

            <div className="major-description">
                <h2>Interaction</h2>
                <div className="major-main-content">
                    {/* <div className="image"> */}
                        <div className="major-main-content-image">
                        <div className="holder">

                            <div className="init">
                                <div class="one">
                                    <img className="" src={interactionSplodge} alt="mobile phone with interface on it with yellow splodge" />
                                </div>

                                <div class="one">
                                    <img className="" src={interactionMobile} alt="mobile phone with interface on it with yellow splodge" />
                                </div>
                            </div>
                        </div>

                    </div>
                    <div className="major-main-content-text">
                        <div className="major-main-content-text-align">
                            <p>Study how humans connect and interact with a vast range of physical and digital systems. Learn to envision how people experience products—from real objects to digital interactions with apps and websites—and bring that vision to life in ways that feel inspired, refined, and even magical.</p>
                            <button className="major-main-content-interaction-button">Learn more</button>
                        </div>
                    </div>
                </div>
            </div>

            </ParallaxProvider>







            <div class="overlay">
    <div class="text">Hello World</div>
  </div>

{/* <div className="wrap">
  <img className="i-image" src={interactionMobile} alt="mobile phone with interface on it with yellow splodge" />
  <img className="s-image" src={interactionSplodge} alt="mobile phone with interface on it with yellow splodge" />
  </div> */}
        </div>
    )
}
