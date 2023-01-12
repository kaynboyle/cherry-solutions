import React from 'react';
import "./style.css"
const Footer = () => {
    return(
        <div className="App">
            <div className="hero-software">
                <div>
                    <img className='softwareimg1 mobile-friend' src={require("../../assets/images/software1.jpeg")} alt="consulting"/>
                </div> 
                <div className="imageOverlaySoftware">
                    <p >Software Solutions</p> 
                </div>    
            </div>
            <div className="softwarebox1">
                <p  className="left-text">Simplified big data processing, real-time asset performance benchmarked again assets design capability</p>
            </div>
            
        </div>
    );
};

export default Footer;