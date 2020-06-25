import React, { Component } from 'react'
import "../css/Footer.css";
import {Link} from "react-router-dom";

import emailImg from "../../assets/footer/email.png"
import locationImg from "../../assets/footer/location.png"
import phoneImg from "../../assets/footer/phone.png"
import socialFb from "../../assets/footer/facebook.png"
import socialIg from "../../assets/footer/instagram.png"
import socialTiktok from "../../assets/footer/tiktok.png"
import socialBehance from "../../assets/footer/behance.png"
import vicLogo from "../../assets/footer/vicLogo.png"

export default class Footer extends Component {
    render() {
        return (
            

            <div className="Holder">
                <div className="joinBox">
                    <div className="joinLeft">
                    <h1>Interested in joining?</h1>
                    <p>Contact us to learn more about the exciting opportunities we offer.</p>
                    </div>
                </div>
            <div className="mainContainer">
                <div className="leftSide">

                    <div className="contactHolder">

                        <div className="contactImg">
                            <img className="ImgSize" src={locationImg} alt='' ></img> 

                            </div>
                            <div className= "contactText">
                                    <p>Wellington, New Zealand</p>
                                </div>
                            </div>
                            <div className="contactHolder">
                                <div className="contactImg">
                                    <img className="ImgSize" src={phoneImg} alt='Phone symbol' ></img> 
                                </div>
                                <div className= "contactText">
                                    <p>04 463 6200</p>
                                </div>
                            </div>

                            <div className="contactHolder">
                                <div className="contactImg">
                                    <img className="ImgSize email" src={emailImg} alt='Mail symbol' ></img> 
                                </div>
                                <div className= "contactText">
                                    <p>foad@vuw.ac.nz</p>
                                </div>
                            </div>
                        </div>

                        <div className="rightSide">
                            <div className="logoHolder">
                                <a href="https://www.wgtn.ac.nz/" target="_blank"><img className="vicLogo" src={vicLogo} alt='Victoria University of Wellington logo' ></img></a>
                            </div>
                        </div>
                    </div>


                    <div className="socialContainer">
                        <div className="middleSocial">
                            <a className="shortcut-links-hover" href="https://www.facebook.com/" target="_blank"><img className="socialImg shortcut" src={socialFb} alt='Facebook logo' ></img></a>
                            <a className="shortcut-links-hover" href="https://www.instagram.com/" target="_blank"><img className="socialImg" src={socialIg} alt='Instagram logo' ></img></a>
                            <a className="shortcut-links-hover" href="https://www.tiktok.com/en/" target="_blank"><img className="socialImg" src={socialTiktok} alt='TikTok logo' ></img></a>
                            <a className="shortcut-links-hover" href="https://www.behance.net/" target="_blank"><img className="socialImg" src={socialBehance} alt='Behance logo' ></img></a>
                        </div>
                        <div className="middleCopy">
                            <h6>Copyright © Victoria University of Wellington, New Zealand</h6>
                        </div>
                    </div>
                </div>
            
        )
    }
}
