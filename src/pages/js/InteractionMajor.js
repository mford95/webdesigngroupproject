import React, { useContext, useEffect, useState } from "react";
import { Context } from "../../context/GlobalContextProvider";
import {Link} from "react-router-dom";
import '../css/InteractionMajor.css';
import interactionHero from '../../assets/interactionImg.png';


export default function InteractionMajor() {

    const { state, fetchInteraction } = useContext(Context);
    const { interaction } = state;
    const [oneHundred, setoneHundred] = useState(null);
    const [twoHundred, settwoHundred] = useState(null);
    const [threeHundred, setthreeHundred] = useState(null);

    const projects = ["project1a", "project1B", "project1C", "project2a", "project2b", "project2c"];

    useEffect(() => {
        window.scrollTo(0, 0);
    });

    useEffect(() => {
       !interaction.length && fetchInteraction();
      }, []);
       
      useEffect(() => {
        console.log(interaction.filter(i => i.fields.level === 200));
        setoneHundred(interaction.filter(i => i.fields.level === 100));
        settwoHundred(interaction.filter(i => i.fields.level === 200));
        setthreeHundred(interaction.filter(i => i.fields.level === 300));
        console.log(interaction);
       }, [interaction]);
       
       
    return (
        <div className="interactionBody">
                      <div className="title-div">
                <div className="title-wrap">
                    <div className="return">
                    <Link to ="/Landing" style={{ textDecoration: 'none', color: 'black' }} >
                            <h4>Return</h4>
                        </Link>
                    </div>
                    <div className="div-title">
                        <h1>Interaction</h1>
                    </div>
                    <div className="course-title-info">
                        <div className="title-text">
                            <p>Study how humans connect and interact with a vast range of physical and digital systems. Learn to envision how people experience products from real objects to digital interactions with apps and websites and bring that vision to life in ways that feel inspired, refined, and even magical.
                            </p>
                        </div>
                    </div>
                    
                </div>
                <div className="course-hero-div">
                        <img src={interactionHero} alt="" />
                        </div>
            </div>
            <div className="interaction-info-div">
                <div className="info-box">
                    <h1>18</h1>
                    <h3>Student amount</h3>
                    
                </div>
                <div className="info-box">
                    <h1>A</h1>
                    <h3>Average Grade</h3>
                    
                </div>
                <div className="info-box">
                    <h1>3yrs</h1>
                    <h3>Course Length</h3>
                    
                </div>
            </div>
                <div className="Level-papers-div">
                    <div className="Level-papers-heading">
                    <h1>Level Papers</h1>
                    </div>
                    <div className="Level-papers-info">
                    <p>To achieve this, you’ll take a collaborative and cross-disciplinary approach, working alongside other students and drawing from other design disciplines such as industrial design and media design.</p>
                    <p>

                    Develop an understanding of the tools and concepts that drive good interaction design. You’ll examine the human condition with topics such as design psychology and design ethnography, helping you to understand people’s backgrounds, interests, and cultures.
                    </p>
                    <p>
                    Discover how to apply this knowledge while exploring the latest technology in areas such as web and game design, healthcare design, and tangible interactions design.</p>
                    </div>
                    
                <div className="Level-heading-div">
                    <h1>100 Level</h1>
                    </div>
                </div>
                <div className="level-paper-holder">
                    <div className="tri-heading">
                    <h2>Trimester 1</h2>
                    </div>
                    <div className="paper-thumbnail-holder">
                    {oneHundred && oneHundred.filter(i => i.fields.courseOfferedIn == "Trimester 1").map(i => 
                            <Link className="link-margin" to={`/Interaction-papers/${i.fields.courseCode}`}>
                            <div className="box-div">
                            
                            <img className="paper-thumbnail-box" 
                            src={`https:${i.fields[projects[Math.floor(Math.random() * (5 - 0 + 1)) + 0]].fields.file.url}?w=800&h=`} alt="" />

                            <div className="thumbnail-title">
                            <h3>{i.fields.courseCode}</h3>
                            
                            </div>
                            </div>
                            </Link>
                            )}
                        
                    </div>
                </div>
                <div className="level-paper-holder">
                    <div className="tri-heading">
                    <h2>Trimester 2</h2>
                    </div>
                    <div className="paper-thumbnail-holder">
                    {oneHundred && oneHundred.filter(i => i.fields.courseOfferedIn == "Trimester 2").map(i => 
                            <Link className="link-margin" to={`/Interaction-papers/${i.fields.courseCode}`}>
                            <div className="box-div">

                            <img className="paper-thumbnail-box" 
                            src={`https:${i.fields[projects[Math.floor(Math.random() * (5 - 0 + 1)) + 0]].fields.file.url}?w=1920&h=1080`} alt="" />

                            <div className="thumbnail-title">
                            <h3>{i.fields.courseCode}</h3>
                            </div>
                            </div>
                            </Link>
                            )}
                    </div>
                </div>
                <div className="Level-papers-div">
                <div className="Level-heading-div">
                    <h1>200 Level</h1>
                    </div>
                    </div>
                    <div className="level-paper-holder">
                    <div className="tri-heading">
                    <h2>Trimester 1</h2>
                    </div>
                    <div className="paper-thumbnail-holder">
                        {twoHundred && twoHundred.filter(i => i.fields.courseOfferedIn == "Trimester 1").map(i => 
                            <Link className="link-margin" to={`/Interaction-papers/${i.fields.courseCode}`}>
                            <div className="box-div">

                            <img className="paper-thumbnail-box" 
                            src={`https:${i.fields[projects[Math.floor(Math.random() * (5 - 0 + 1)) + 0]].fields.file.url}?w=1080&h=720`} alt="" />

                            <div className="thumbnail-title">
                            <h3>{i.fields.courseCode}</h3>
                            </div>
                            </div>
                            </Link>
                            )}
                    </div>
                </div>
                <div className="level-paper-holder">
                    <div className="tri-heading">
                    <h2>Trimester 2</h2>
                    </div>
                    <div className="paper-thumbnail-holder">
                    {twoHundred && twoHundred.filter(i => i.fields.courseOfferedIn == "Trimester 2").map(i => 
                            <Link className="link-margin"  to={`/Interaction-papers/${i.fields.courseCode}`}>
                            <div className="box-div">
                            
                            <img className="paper-thumbnail-box" 
                            src={`https:${i.fields[projects[Math.floor(Math.random() * (5 - 0 + 1)) + 0]].fields.file.url}?w=1080&h=720`} alt="" />
                            
                            <div className="thumbnail-title">
                            <h3>{i.fields.courseCode}</h3>
                            </div>
                            </div>
                            </Link>
                            )}
                    
                    </div>
                </div>

                <div className="Level-papers-div">
                <div className="Level-heading-div">
                    <h1>300 Level</h1>
                    </div>
                    </div>
                    <div className="level-paper-holder">
                    <div className="tri-heading">
                    <h2>Trimester 1</h2>
                    </div>
                    <div className="paper-thumbnail-holder">
                    {threeHundred && threeHundred.filter(i => i.fields.courseOfferedIn == "Trimester 1").map(i => 
                            <Link className="link-margin" to={`/Interaction-papers/${i.fields.courseCode}`}>
                            <div className="box-div">

                            <img className="paper-thumbnail-box" 
                            src={`https:${i.fields[projects[Math.floor(Math.random() * (5 - 0 + 1)) + 0]].fields.file.url}?w=1080&h=720`} alt="" />

                            <div className="thumbnail-title">
                            <h3>{i.fields.courseCode}</h3>
                            </div>
                            </div>
                            </Link>
                            )}
                    </div>
                </div>
                <div className="level-paper-holder">
                    <div className="tri-heading">
                    <h2>Trimester 2</h2>
                    </div>
                    <div className="paper-thumbnail-holder">
                    {threeHundred && threeHundred.filter(i => i.fields.courseOfferedIn == "Trimester 2").map(i => 
                            <Link className="link-margin" to={`/Interaction-papers/${i.fields.courseCode}`}>
                            <div className="box-div">

                            <img className="paper-thumbnail-box" 
                            src={`https:${i.fields[projects[Math.floor(Math.random() * (5 - 0 + 1)) + 0]].fields.file.url}?w=1080&h=720`} alt="" />

                            <div className="thumbnail-title">
                            <h3>{i.fields.courseCode}</h3>
                            </div>
                            </div>
                            </Link>
                            )}
                    
                    </div>
                </div>
        </div>
    )
}
