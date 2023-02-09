import React from 'react';
import "./style.css"
import { FaLinkedin, FaYoutube, FaPencilAlt } from 'react-icons/fa';
import { IconContext } from "react-icons";
const Footer = () => {
    return(
        <footer id="get-footer" >
            <div className="photofooter reveal">
                <div className="footer-height"></div>
            </div>
            <div id="target-bottom">
                {/* <IconContext.Provider value={{ className: 'react-icons' }}>
                    <FaLinkedin size={28}/>
                    <FaYoutube size={28}/>
                    <FaPencilAlt size={28}/>
                </IconContext.Provider> */}
                <div className="flex-footer-links">
                    <div className="footer-divs ">
                        <p>Professional Services</p>
                      
                        
                            <a>Management Operating System (MOS)</a>
                            <a>Effective Management and Decision Making</a>
                            <a>Applied Intelligence (AI)</a>
                            <a>Performance Intelligence (PI)</a>
                            <a>CAPA: Corrective Action Preventative Action</a>
                        
                    </div>
                    <div className="footer-divs">
                        <p >Data Management Tools</p>
                        
                            <a>Cherry COLA: Cherry Collective Data Assistant</a><br></br>
                            <a>Cherry Performance Intelligence Engine (PIE)</a>
                            
                        
                    </div>
                    <div className="footer-divs">
                        <p className="">About Us</p>
                        
                       
                            <a>Meet the Team</a>
                            
                    
                    </div>
                </div>
             
            </div>
            <div className='footer-container'>
                &copy;{new Date().getFullYear()} Cherry Solutions. All Rights Reserved


            </div>
            
        </footer>
    );
};

export default Footer;