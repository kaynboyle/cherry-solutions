import React, { FC } from "react";
import { useEffect, useState } from "react";
import "./style.css";
import {reveal} from "../../scripts/reveal";

const AboutUs:FC = () => {
    window.addEventListener("scroll", reveal);
    return(
        <div className="App">
            <div className="div1About">
                <p>Cherry America provides professional consulting services and software solutions to the marine transportation industry.<br></br> Cherry America’s experience and tool sets lead optimization and change in all sizes of organizations.</p>
            </div>
            <div className="ribbon">
                <strong className="ribbon-content">Cherry America brings 80+ years of combined experience working in marine terminal operations and the shipping industry.</strong>
            </div>
            <div className="div1About flex-about">
                <div>
                    <p>Cherry America provides professional consulting services and software solutions to the marine transportation industry.  Cherry America’s experience and tool sets lead optimization and change in all sizes of organizations.</p>
                
                </div>
                <div>
                    <p>
                    Notable technology implementations by our team in reference to these products:
                    </p>
                    <ul className="acomplishments-ul">
                        <li className="reveal">
                        1st to implement longshore time tracking solution on US West Coast
                        </li>
                        <li className="reveal">
                        1st to implement OCR, EPS technology on US West Coast
                        </li>
                        <li className="reveal">
                        2+ decades of enhancing MTOs Business Intelligence Environments
                        </li>
                    </ul>
                </div>
                

                
            </div>
            <div className="ribbon">
                <strong className="ribbon-content">Leadership Team</strong>
            </div>
            <div className="headshots">
                <div className="headshot-container-divs">
                    <div className="brian">
                    </div>
                    <div className="about-text">
                        <strong>Brian Boyle</strong>
                       <br></br> Owner, Executive Resource, 30+ years of Maritime and Marine Terminal experience
                    </div>
                </div>
                <div className="headshot-container-divs">
                    <div className="damon">
                    </div>
                    <div className="about-text">
                        <strong>Damon Gomes</strong>
                       <br></br><br></br>COO, 20+ years of Maritime and Marine Terminal experience 

                    </div>
                </div>
                <div className="headshot-container-divs">
                    <div className="norm">
                    </div>
                    <div className="about-text">
                        <strong>Norm Kaiser</strong>
                       <br></br>Operation Resource,<br></br> 25+ years of Maritime and Marine Terminal experience
                    </div>
                </div>
                <div className="headshot-container-divs">
                    <div className="jim">
                    </div>
                    <div className="about-text">
                        <strong>Jim Britton</strong>
                       <br></br> CFO, 30+ years of Finance in Maritime and Marine Terminal experience
                    </div>
                </div>
                

            </div>
        </div>

    )

}

export default AboutUs;