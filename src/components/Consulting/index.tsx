import React from 'react';
import "./style.css"
import "../../assets/images/Consulting2.jpeg";
const Consulting = () => {
    function reveal() {
        var reveals = document.querySelectorAll(".reveal");
      
        for (var i = 0; i < reveals.length; i++) {
          var windowHeight = window.innerHeight;
          var elementTop = reveals[i].getBoundingClientRect().top;
          var elementVisible = 150;
      
          if (elementTop < windowHeight - elementVisible) {
            reveals[i].classList.add("active");
          } else {
            reveals[i].classList.remove("active");
          }
        }
      }
      
      window.addEventListener("scroll", reveal);
    return(
        <div id="consulting">
            <div className='header-wrap'>
                <h1>Consulting</h1>
                <div className="consultingHeader">
                    <div>
                        <h2>Performance Intelligence</h2>
                    </div>
                    <div>
                        <h2>Applied Intelligence</h2>
                    </div>
                    
                </div>
            </div>
            <div className="Consulting1img">
                <div>
                    <img className='consultingimg1' src={require("../../assets/images/Consulting1.jpeg")} alt="consulting"/>
                    <div className="imageOverlay">
                        <p >What can Performance Intelligence do for You?</p> 
                    </div> 
                </div>    
            </div>
            <div className="box1row">
                <p className="left-text">Unlock profitable, sustainable growth based on a data-driven approach to optimizing operations.
                To succeed today, you need to <strong className="strongANDred reveal"> engineer smarter</strong>,<strong className="strongANDred reveal"> <br></br>operate better</strong>, and <strong className="strongANDred reveal">drive sustainable efficiency</strong>.</p>
            </div>
                <div className="arrow-flex">
                    <div className="arrowIMGdiv reveal">
                        <img src={require("../../assets/images/arrow.png")} alt="arrow"/>
                    </div>
                    <div className="box1row two">
                            <p className="left-text">To do that you need more than data. <br></br>You need information and analytics working together so that<br></br> you
                                can benefit from intelligence that scales.
                            </p>
                    </div>   
                </div>
            <div className='consulting1-flex'>
                    
                <div className="consultingCol1">
                </div>
                <div className="consultingCol1">
                    <div className="box1">
                            <p>
                                Performance Intelligence <br></br>connects the power of information and AI to human insight giving the people
                                behind every day essential information they need to <br></br><strong>unlock a new           level of performance.</strong>
                                
                            </p>
                     </div>
                     <div className="box1">
                        <p>Recognize
                                new opportunities, accelerate digital transformation, realize growth, and drive sustainability.
                        </p>
                     </div>
                     <div className="Consulting2img">
                        <img src={require("../../assets/images/Consulting2.jpeg")} alt="consulting"/>
                    </div>

                </div>
                
            </div>
            
                
               
        </div>
        
    );
};

export default Consulting;