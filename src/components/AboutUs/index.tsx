import React, { FC } from "react";
import { useEffect, useState } from "react";
import "./style.css";
import {reveal} from "../../scripts/reveal";

const AboutUs:FC = () => {
    window.addEventListener("scroll", reveal);
    return(
        <div className="App">
            <div className="headerAbout">
                <div className="width20per bgRED fXLARGE borders-20 fWEIGHT700 flex-center-image"><img className="cherryamericaIMG margin-top-20px"src={require("../../assets/images/whitecherry.png")} alt="consulting"/></div>
                <div className="width80per text-align-center borders-20 fLARGE fWEIGHT700 margin-top-20px"><p>Cherry America provides professional consulting services and software solutions to the marine transportation industry. Cherry America’s experience and tool sets lead optimization and change in all sizes of organizations.</p></div>
            </div>
           <div className="flexRow margin-top-20px">
            <div className="width50per">
                <div className="text-align-center margin-top-20px ">
                    <p className="text-align-center">
                    Notable technology implementations by our team in reference to these products:
                    </p>
                    <ul className="acomplishments-ul text-align-center">
                        <li className=" text-align-center">
                        1st to implement longshore time tracking solution on US West Coast
                        </li>
                        <li className="text-align-center">
                        1st to implement OCR, EPS technology on US West Coast
                        </li>
                        <li className="text-align-center">
                        2+ decades of enhancing MTOs Business Intelligence Environments
                        </li>
                    </ul>
                </div>
            </div>
            <div className="width50per text-align-center borders-20 fLARGE fWEIGHT70 fWHITE bgRED">
                <p>Cherry America brings 80+ years of combined experience working in marine terminal operations and the shipping industry.</p>
            </div>
           </div>
            <div className="ribbon">
                <strong className="ribbon-content">Leadership Team</strong>
            </div>
            <div className="headshots">
                <div className="headshot-container-divs ">
                    <div className="brian round">
                    </div>
                    <div className="about-text bgLTBLUE fBLACK br-10 text-align-center">
                        <strong>Brian Boyle</strong>
                    </div>
                    <div className="about-text br-10">
                       Owner, Executive Resource, 30+ years of Maritime and Marine Terminal experience
                    </div>
                </div>
                <div className="headshot-container-divs">
                    <div className="damon round">
                    </div>
                    <div className="about-text br-10 text-align-center bgLTBLUE fBLACK">
                        <strong>Damon Gomes</strong>
                      

                    </div>
                    <div className="about-text br-10">
                       COO, 20+ years<br></br> of Maritime and<br></br> Marine Terminal experience<br></br>

                    </div>
                </div>
                <div className="headshot-container-divs">
                    <div className="norm round">
                    </div>
                    <div className="about-text br-10 text-align-center bgLTBLUE fBLACK">
                        <strong>Norm Kaiser</strong>
                    </div>
                    <div className="about-text br-10">
                   Operation Resource,<br></br> 25+ years of Maritime and Marine Terminal experience
                    </div>
                </div>
                <div className="headshot-container-divs">
                    <div className="jim round">
                    </div>
                    <div className="about-text br-10 text-align-center bgLTBLUE fBLACK">
                        <strong>Jim Britton</strong>
                    </div>
                    <div className="about-text br-10">
                        CFO, 30+ years of Finance in Maritime and Marine Terminal experience
                    </div>
                </div>
                

            </div>
        </div>

    )

}

export default AboutUs;