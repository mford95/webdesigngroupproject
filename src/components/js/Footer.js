import React, { Component } from 'react'
import "../css/Footer.css";
import {Link} from "react-router-dom";

import contactImg from "../../assets/footer/contact.png"
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
            <div>
                <div className="Holder">
            <div className="mainContainer">
                <div className="leftSide">

                    <div className="contactHolder">

                        <div className="contactImg">
                            <img className="ImgSize" src={locationImg} alt='' ></img> 
                            
                        </div>

                        <div className= "contactText">
                        <p>139 Vivian Street, Te Aro, Wellington</p>
                        </div>
                        
                    </div>

                    <div className="contactHolder">
                        <div className="contactImg">
                            <img className="ImgSize" src={phoneImg} alt='' ></img> 
                        </div>
                        <div className= "contactText">
                        <p>04 463 6200</p>
                        </div>
                        
                    </div>
                    <div className="contactHolder">
                        <div className="contactImg">
                            <img className="ImgSize" src={contactImg} alt='' ></img> 
                        </div>
                        <div className= "contactText">
                        <p>foad@vuw.ac.nz</p>
                        </div>
                        
                    </div>
                </div>
                 <div className="rightSide">
                    <div className="logoHolder">
                    <img className="vicLogo" src={vicLogo} alt='' ></img> 
                    </div>
                </div>

                </div>
                <div className="socialContainer">
                <div className="middleSocial">
                    <img className="socialImg" src={socialFb} alt='' ></img> 
                    <img className="socialImg" src={socialIg} alt='' ></img> 
                    <img className="socialImg" src={socialTiktok} alt='' ></img> 
                    <img className="socialImg" src={socialBehance} alt='' ></img> 
                    </div>
                    <div className="middleCopy">
                    <h6>Copyright © Victoria University of Wellington, New Zealand</h6>
                    </div>
                </div>
                </div>
            </div>
        )
    }
}
