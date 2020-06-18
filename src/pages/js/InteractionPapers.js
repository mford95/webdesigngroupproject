import React, { useContext, useEffect, useState } from "react";
import { Context } from "../../context/GlobalContextProvider";
import '../css/InteractionPapers.css';

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
          <div className="return">
              <h4>Return</h4>
          </div>
          <div className="div-title">
              <h1>{selectedCourse.courseCode}</h1>
          </div>
          <div className="course-title-info">
              <div className="title-text">
                  <h2>{selectedCourse.courseTitle}</h2>
                  <p>{selectedCourse.courseDescription}</p>
              </div>
              <div className="course-points-div">
                  <div className="points-block">
                      <h4>Points</h4>
                      <h1>{selectedCourse.points}</h1>
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
          <h1>{selectedCourse.courseOfferedIn}</h1>
      </div>
      <div className="info-box">
          <h3>Campus:</h3>
          <h1>{selectedCourse.campus}</h1>
      </div>
      <div className="info-box">
          <h3>Duration:</h3>
          <h1>{selectedCourse.duration}</h1>
      </div>
  </div>
  <div className="projects-div">
      <div className="div-title">
          <h1>Projects</h1>
      </div>

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


      <div className="course-project">
          <div className="div-title">
              <h2>Project Three</h2>
          </div>

          <div className="project-blurb">
              <p>{selectedCourse.project3Description}</p>
             
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

      </div>
      <div className="feedback-div">
          <div className="feedback">

          </div>
          <div className="feedback">

          </div>
          <div className="feedback">
              
          </div>
      </div>
  </div>

</div>
}
