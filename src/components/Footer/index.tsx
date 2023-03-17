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
                      
                        
                            <a href="./consulting#MOS" className="footer-links"><strong className="strongANDred">+</strong> Management Operating System (MOS)</a><br></br>
                            <a  href="./consulting#EffectiveManagement" className="footer-links"><strong className="strongANDred">+</strong> Effective Management and Decision Making</a><br></br>
                            <a href="./consulting#capa" className="footer-links"><strong className="strongANDred">+</strong> CAPA: Corrective Action Preventative Action</a>
                        
                    </div>
                    <div className="footer-divs">
                        <p >Data Management Tools</p>
                            <a href="./consulting#ai" className="footer-links"><strong className="strongANDred">+</strong> Applied Intelligence (AI)</a><br></br>
                            <a href="./consulting#pi" className="footer-links"><strong className="strongANDred">+</strong> Performance Intelligence (PI)</a><br></br>
                            <a href="./Software#cherryCOLA" className="footer-links"><strong className="strongANDred">+</strong> Cherry COLA: Cherry Collective Data Assistant</a><br></br>
                            
                        
                    </div>
                    <div className="footer-divs">
                        <p className="">About Us</p>
                        
                       
                            <a href="./about-us" className="footer-links"><strong className="strongANDred">+</strong> Meet the Team</a>
                            
                    
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