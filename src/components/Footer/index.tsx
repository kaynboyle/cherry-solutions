import React from 'react';
import "./style.css"
import { FaLinkedin, FaYoutube, FaPencilAlt } from 'react-icons/fa';
import { IconContext } from "react-icons";
const Footer = () => {
    return(
        <footer id="get-footer" className='w-100 mt-auto bg-secondary p-4'>
            <div className='footer-container'>
                &copy;{new Date().getFullYear()} Cherry Solutions. All Rights Reserved


            </div>
            <div id="target-bottom">
                <IconContext.Provider value={{ className: 'react-icons' }}>
                    <FaLinkedin size={28}/>
                    <FaYoutube size={28}/>
                    <FaPencilAlt size={28}/>
                </IconContext.Provider>
             
            </div>
            
        </footer>
    );
};

export default Footer;