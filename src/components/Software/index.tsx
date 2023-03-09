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
                <p  className="left-text">Simplified big data processing, real-time asset performance benchmarked against assets design capability</p>
            </div>

            <div id="cherry-COLA">
                <div className="flexRow">
                    <div className="width50per text-align-center margin-top-60px" >
                        <p className="fXLARGE"><strong>Cherry COLA: Cherry Collective Data Assistant </strong><br></br>
                            ‘Stop Gap’ Tools Include: COLA I, II, III, IV & V
                            </p>
                            
                    </div>
                    <div className="width50per bgLTBLUE">
                    <ul className="software-ul margin-top-20px marginLR5160px100px">
                                <li >
                                Labor order and dispatch
                                </li>
                                <li >
                                Operations time tracking and labor cost modeling
                                </li>
                                <li>
                                 Job number administration

                                </li>
                                <li >
                                Equipment Usage

                                </li>
                                <li>
                                Contract Management

                                </li>
                            </ul>
                    </div>
                </div>
            </div>
            <div id="cherry-PIE">
                
            </div>
        </div>
    );
};

export default Footer;