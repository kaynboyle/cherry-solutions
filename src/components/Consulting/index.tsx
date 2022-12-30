import React from 'react';
import "./style.css"
import { FaLinkedin, FaYoutube, FaPencilAlt } from 'react-icons/fa';
import { IconContext } from "react-icons";
import "../../assets/images/Consulting1.jpeg";
const Consulting = () => {
    return(
        <div>
            <div className='consulting1-flex'>
                <div className="consulting1">
                    <div className="Consulting1img">
                        <div className="imageOverlay">
                            <p >What can Performance Intelligence do for You?</p>
                        </div>
                        
                    </div>
                
                
                    <div className="box1">
                        <p>Unlock profitable, sustainable growth based on a data-driven approach to optimizing operations.
                        To succeed today, you need to engineer smarter, operate better, and drive sustainable efficiency. </p>
                    </div>
                    
                    <div className="box1">
                        <p>To do that you need more than data. You need information and analytics working together so that you
                            can benefit from intelligence that scales.
                        </p>
                    </div>
                    </div>
                </div>
        </div>
        
    );
};

export default Consulting;