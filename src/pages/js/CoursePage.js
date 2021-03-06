import React from 'react';
import '../css/CoursePage.css';
import { Link } from "react-router-dom";

import HalfStar from '../../assets/half-star.png';
import Star from '../../assets/star.png';
import RankingBackdrop from '../../assets/ranking-backdrop.png';
import YellowHalfStar from '../../assets/yellow-half-star.png';
import YellowStar from '../../assets/yellow-star.png';

export default function CoursePage() {
    return (
        <div className="course-wrap">
            <div className="title-div">
                <div className="title-wrap">
                    <div className="return">
                        <Link to ="/interactionMajor" style={{ textDecoration: 'none', color: 'black' }} >
                            <h4>Return</h4>
                        </Link>
                    </div>
                    <div className="div-title">
                        <h1>IXXN221</h1>
                    </div>
                    <div className="course-title-info">
                        <div className="title-text">
                            <h2>Interaction Design I / Hoahoa ā-Pāhekoheko I</h2>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure, voluptatum reiciendis, reprehenderit quod dicta nobis autem commodi velit adipisci ex omnis asperiores. Sit aliquid dignissimos vitae debitis harum ullam tenetur.</p>
                        </div>
                        <div className="course-points-div">
                            <div className="points-block">
                                <h4>Points</h4>
                                <h1>15</h1>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="requirements-div">
                <div className="div-title">
                    <h1>Requirements</h1>
                </div>
                <div className="paper-requirements">
                    <h2>75 points including 30 points from BDI or BAS Schedules </h2> 
                    <h1> OR </h1>   
                    <h2> Permission from Head of School</h2>
                </div>
            </div>
            <div className="course-info-div">
                <div className="info-box">
                    <h3>Course offered in:</h3>
                    <h1>Trimester 2</h1>
                </div>
                <div className="info-box">
                    <h3>Campus:</h3>
                    <h1>Te Aro</h1>
                </div>
                <div className="info-box">
                    <h3>Duration:</h3>
                    <h1>1 Trimester</h1>
                </div>
            </div>
            <div className="projects-div">
                <div className="div-title">
                    <h1>Projects</h1>
                </div>

                <div className="course-project">
                    <div className="div-title">
                        <h2>Project One - Project Name</h2>
                    </div>

                    <div className="project-blurb">
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure, voluptatum reiciendis, reprehenderit quod dicta nobis autem commodi velit adipisci ex omnis asperiores. Sit aliquid dignissimos vitae debitis harum ullam tenetur.</p>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure, voluptatum reiciendis, reprehenderit quod dicta nobis autem commodi velit adipisci ex omnis asperiores. Sit aliquid dignissimos vitae debitis harum ullam tenetur.</p>
                    </div>

                    <div className="image-slideshow">
                        <div className="slidebox">
                            {/* Insert Image here */}
                        </div>
                        <div className="slidebox">
                            {/* Insert Image here */}
                        </div>
                        <div className="slidebox">
                            {/* Insert Image here */}
                        </div>
                    </div>
                </div>


                <div className="course-project">
                    <div className="div-title">
                        <h2>Project Two - Project Name</h2>
                    </div>

                    <div className="project-blurb">
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure, voluptatum reiciendis, reprehenderit quod dicta nobis autem commodi velit adipisci ex omnis asperiores. Sit aliquid dignissimos vitae debitis harum ullam tenetur.</p>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure, voluptatum reiciendis, reprehenderit quod dicta nobis autem commodi velit adipisci ex omnis asperiores. Sit aliquid dignissimos vitae debitis harum ullam tenetur.</p>
                    </div>

                    <div className="image-slideshow">
                        <div className="slidebox">
                            {/* Insert Image here */}
                        </div>
                        <div className="slidebox">
                            {/* Insert Image here */}
                        </div>
                        <div className="slidebox">
                            {/* Insert Image here */}
                        </div>
                    </div>
                </div>


                <div className="course-project">
                    <div className="div-title">
                        <h2>Project Three - Project Name</h2>
                    </div>

                    <div className="project-blurb">
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure, voluptatum reiciendis, reprehenderit quod dicta nobis autem commodi velit adipisci ex omnis asperiores. Sit aliquid dignissimos vitae debitis harum ullam tenetur.</p>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure, voluptatum reiciendis, reprehenderit quod dicta nobis autem commodi velit adipisci ex omnis asperiores. Sit aliquid dignissimos vitae debitis harum ullam tenetur.</p>
                    </div>

                    <div className="image-slideshow">
                        <div className="slidebox">
                            {/* Insert Image here */}
                        </div>
                        <div className="slidebox">
                            {/* Insert Image here */}
                        </div>
                        <div className="slidebox">
                            {/* Insert Image here */}
                        </div>
                    </div>
                </div>


                <div className="course-project">
                    <div className="div-title">
                        <h2>Project Four - Project Name</h2>
                    </div>

                    <div className="project-blurb">
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure, voluptatum reiciendis, reprehenderit quod dicta nobis autem commodi velit adipisci ex omnis asperiores. Sit aliquid dignissimos vitae debitis harum ullam tenetur.</p>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure, voluptatum reiciendis, reprehenderit quod dicta nobis autem commodi velit adipisci ex omnis asperiores. Sit aliquid dignissimos vitae debitis harum ullam tenetur.</p>
                    </div>

                    <div className="image-slideshow">
                        <div className="slidebox">
                            {/* Insert Image here */}
                        </div>
                        <div className="slidebox">
                            {/* Insert Image here */}
                        </div>
                        <div className="slidebox">
                            {/* Insert Image here */}
                        </div>
                    </div>
                </div>

                
            </div>
            <div className="course-ranking-div">
                <div className="div-title">
                    <h1>Course Ranking</h1>
                </div>
                <div className="ranking-div">
                    <div className="backdrop">
                        <img src= { RankingBackdrop } alt="Background to Course Ranking"/>
                    </div>
                    <div className="ranking-box">
                        <div className="ranking-title">
                            <h1>4.5</h1>
                            <h3>/5</h3>
                        </div>
                        <div className="ranking-star">
                            <div className="main-star">
                                <img src= { Star }  alt="Star" />
                            </div>
                            <div className="main-star">
                                <img src= { Star }  alt="Star" />
                            </div>
                            <div className="main-star">
                                <img src= { Star }  alt="Star" />
                            </div>
                            <div className="main-star">
                                <img src= { Star }  alt="Star" />
                            </div>
                            <div className="main-star">
                                <img src= { HalfStar }  alt="Star" />
                            </div>
                        </div>
                    </div>
                        
                    

                </div>
                <div className="feedback-div">
                    <div className="feedback">
                        <h3>Lorem</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore facere culpa incidunt cum necessitatibus, minima minus voluptate quis. Eveniet consequatur ea ex illum est beatae distinctio iure excepturi tenetur soluta.</p>
                        <div className="star-rating">
                            <div className="star">
                                <img src= { YellowStar }  alt="Star" />
                            </div>
                            <div className="star">
                                <img src= { YellowStar }  alt="Star" />
                            </div>
                            <div className="star">
                                <img src= { YellowStar }  alt="Star" />
                            </div>
                            <div className="star">
                                <img src= { YellowHalfStar }  alt="Half Star" />
                            </div>
                            <div className="star">
                            </div>
                        </div>
                    </div>
                    <div className="feedback">
                        <h3>Lorem</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore facere culpa incidunt cum necessitatibus, minima minus voluptate quis. Eveniet consequatur ea ex illum est beatae distinctio iure excepturi tenetur soluta.</p>
                        <div className="star-rating">
                            <div className="star">
                                <img src= { YellowStar }  alt="Star" />
                            </div>
                            <div className="star">
                                <img src= { YellowStar }  alt="Star" />
                            </div>
                            <div className="star">
                                <img src= { YellowStar }  alt="Star" />
                            </div>
                            <div className="star">
                                <img src= { YellowStar }  alt="Star" />
                            </div>
                            <div className="star">
                                <img src= { YellowStar }  alt="Half Star" />
                            </div>
                        </div>
                    </div>
                    <div className="feedback">
                        <h3>Lorem</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore facere culpa incidunt cum necessitatibus, minima minus voluptate quis. Eveniet consequatur ea ex illum est beatae distinctio iure excepturi tenetur soluta.</p>
                        <div className="star-rating">
                            <div className="star">
                                <img src= { YellowStar }  alt="Star" />
                            </div>
                            <div className="star">
                                <img src= { YellowStar }  alt="Star" />
                            </div>
                            <div className="star">
                                <img src= { YellowStar }  alt="Star" />
                            </div>
                            <div className="star">

                            </div>
                            <div className="star">

                            </div>
                        </div> 
                    </div>
                </div>
            </div>

        </div>
    )
}
