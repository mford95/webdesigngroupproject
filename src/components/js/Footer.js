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

export default class Footer extends Component {
    render() {
        return (
            <div>
            <div className="mainContainer">
                <div className="footerLeft">
                    <div className="leftHolder">
                    <img className="leftImg" src={locationImg} alt='' ></img> 
                    <h4>Wellington, New Zealand</h4>
                    </div>
                    <div className="leftHolder">
                    <img className="leftImg" src={phoneImg} alt='' ></img>
                    <h4>0800 000 000</h4> 
                    </div>
                    <div className="leftHolder">
                    <img className="leftImg" src={contactImg} alt='' ></img> 
                    <h4>email@vuw.ac.nz</h4> 
                    </div>
                </div>
                <div className="footerMiddle">
                    <div className="middleLinks">
                    <Link to="" className="middleLinksText" >Career</Link>
                    <Link to="" className="middleLinksText" >Resources</Link>
                    <Link to="" className="middleLinksText" >Levels</Link>
                    
                    
                    </div>
                    <div className="middleSocial">
                    <img className="socialImg" src={socialFb} alt='' ></img> 
                    <img className="socialImg" src={socialIg} alt='' ></img> 
                    <img className="socialImg" src={socialTiktok} alt='' ></img> 
                    <img className="socialImg" src={socialBehance} alt='' ></img> 
                    </div>
                </div>
                <div className="footerRight">
                <h1>^</h1>
                </div>
                </div>
            </div>
        )
    }
}
