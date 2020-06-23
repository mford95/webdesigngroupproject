
import React, { useContext, useEffect, useState } from "react";
import { Context } from "../../context/GlobalContextProvider";
import '../css/InteractionPapers.css';
import '../css/ResponsivePaperPage.css';
import { Link } from "react-router-dom";

import HalfStar from '../../assets/half-star.png';
import Star from '../../assets/star.png';
import RankingBackdrop from '../../assets/ranking-backdrop.png';
import YellowHalfStar from '../../assets/yellow-half-star.png';
import YellowStar from '../../assets/yellow-star.png';


import Fade from 'react-reveal/Fade';


export default function InteractionPapers(props) {
  const id = props.match.params.id;  
  const { state, fetchInteraction } = useContext(Context);
  const { interaction } = state;

  const [selectedCourse, setSelectedCourse] = useState({});

  useEffect(() => {
    fetchInteraction();
  }, []);

  useEffect(() => {
    setSelectedCourse(interaction.length && interaction.filter(i => i.fields.courseCode == id)[0].fields);
  }, [interaction]);

  useEffect(() => {
    console.log(selectedCourse);
    console.log(id);
  }, [selectedCourse]);

  return <div className="course-wrap">
  <div className="title-div">
      <div className="title-wrap">
          <Fade left>
            <div className="return">
                    <Link to ="/interactionMajor" style={{ textDecoration: 'none', color: 'black' }} >
                        <h4>Return</h4>
                    </Link>
            </div>
          </Fade>
          <Fade left >
            <div className="div-title">
                <h1>{selectedCourse.courseCode}</h1>
            </div>
          </Fade>  
          
          <div className="course-title-info">
            <Fade left>
              <div className="title-text">
                  <h2>{selectedCourse.courseTitle}</h2>
                  <p>{selectedCourse.courseDescription}</p>
              </div>
            </Fade>
            <Fade right >
                <div className="course-points-div">
                    <div className="points-block">
                        <h4>Points</h4>
                        <h1>{selectedCourse.points}</h1>
                    </div>
                </div>
            </Fade>
          </div>
      </div>
  </div>
  <div className="requirements-div">
      <Fade>
        <div className="div-title">
            <h1>Requirements</h1>
        </div>
      </Fade>
      <Fade left>
        <div className="paper-requirements">
          <h2>75 points including 30 points from BDI or BAS Schedules OR Permission from Head of School</h2>
        </div>
      </Fade>
      
  </div>
  <Fade bottom >
    <div className="course-info-div">
        <Fade>
            <div className="info-box">
                <h3>Course offered in:</h3>
                <h1>{selectedCourse.courseOfferedIn}</h1>
            </div>
        </Fade>
        <Fade>
            <div className="info-box">
                <h3>Campus:</h3>
                <h1>{selectedCourse.campus}</h1>
            </div>
        </Fade>
        <Fade>
            <div className="info-box">
                <h3>Duration:</h3>
                <h1>{selectedCourse.duration}</h1>
            </div>
        </Fade>
            
    </div>
  </Fade>

  <div className="projects-div">
    <Fade>
        <div className="div-title">
            <h1>Projects</h1>
        </div>
    </Fade>
    <Fade right cascade>   
      <div className="course-project">
          <div className="div-title">
              <h2>Project One </h2>
          </div>

          <div className="project-blurb">
              <p>{selectedCourse.project1Description}</p>
              
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
    </Fade>

    <Fade right cascade>
      <div className="course-project">
          <div className="div-title">
              <h2>Project Two </h2>
          </div>

          <div className="project-blurb">
              <p>{selectedCourse.project2Description}</p>
   
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
    </Fade>

    </div>
    <Fade bottom>
        <div className="course-ranking-div">
                <Fade>
                    <div className="div-title">
                        <h1>Course Ranking</h1>
                    </div>
                </Fade>
                <Fade right cascade>
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
                </Fade>

                <Fade bottom cascade>
                <div className="feedback-div">
                    <Fade bottom cascade>
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
                    </Fade>
                    <Fade bottom cascade>
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
                    </Fade>
                    <Fade bottom cascade>
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
                    </Fade>
                </div>
                </Fade>

        </div>
    </Fade>

</div>
}
