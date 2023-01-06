import React from 'react';
import "./style.css"
import "../../assets/images/Consulting2.jpeg";

const Consulting = () => {

    interface stickyInterface{
        id:string;
        content: string;
    };
    const stickys: stickyInterface[]=[
        {
            id:"1",
            content:"Collect, Process and Analyze your data"
        },
        {
            id:"2",
            content:"Create insights to identify clear opportunities to act on "
        },
        {
            id:"3",
            content:"Automate redundant actions"
        }
        
    ];

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
                        <a className="button-slide slide-right" href="#performance-intelligence">Performance Intelligence</a>
                    </div>
                    <div>
                        <a className="button-slide slide-right" href="#applied-intelligence">Applied Intelligence</a>
                    </div>
                    <div>
                        <a className="button-slide slide-right" href="#mos">MOS</a>
                    </div>
                    
                </div>
            </div>
            <div className="Consulting1img">
                <div>
                    <img className='consultingimg1 mobile-friend' src={require("../../assets/images/Consulting1.jpeg")} alt="consulting"/>
                    <div className="imageOverlay">
                        <p >What can Performance Intelligence do for You?</p> 
                    </div> 
                </div>    
            </div>
            <div className="box1row">
                <p id="performance-intelligence" className="left-text">Unlock profitable, sustainable growth based on a data-driven approach to optimizing operations.
                To succeed today, you need to <strong className="strongANDred reveal"> engineer smarter</strong>,<strong className="strongANDred reveal"> <br></br>operate better</strong>, and <strong className="strongANDred reveal">drive sustainable efficiency</strong>.</p>
            </div>
                <div>
                    <div className="box1row2">
                            <p className="left-text">To do that...<br></br> You need more than data. <br></br>You need information and analytics working together so that<br></br> you
                                can benefit from intelligence that scales.
                            </p>
                    </div>   
                </div>
            <div className='consulting1-flex'>
                    
                <div className="consultingCol1 reveal">
                    <div className="box1">
                            <p>
                                Performance Intelligence <br></br>connects the power of information and AI to human insight giving the people
                                behind every day essential information they need to <br></br><strong>unlock a new           level of performance.</strong>
                                
                            </p>
                     </div>
                     <div className="box1 ">
                        <p>Recognize
                                new opportunities, accelerate digital transformation, realize growth, and drive sustainability.
                        </p>
                     </div>
                </div>
                <div className="imageFlexcol">
                        <img className="mobile-friend" src={require("../../assets/images/Consulting2.jpeg")} alt="consulting"/>
                </div>
                
            </div>
            <div className="box1row2 upper-filter">
                <div className="logo-content-wrapper">
                    <div>
                        <p>Elevate your systems and empower your teams. With our processes, toolsets and metrics, Cherry America can help you get your processes under control and achieve ongoing peace of mind from:
                        </p>
                    </div>
                    
                        <ul>
                            <li>Strategic Marine Terminal Operational Excellence 
                            </li>
                            <li>Data Analytics as a Service (DAaaS) 
                            </li>
                            <li>Tactical Sustainment & Governance 
                            </li>
                        </ul>
                        
                    </div>
            </div>

            <div className="ai-title">
                <div className="title-p">
                    <p >Applied Intelligence</p>
                </div>
                <div className="box3row">
                    <img className='consultingimg2 mobile-friend reveal' src={require("../../assets/images/aiIMG2.jpg")} alt="consulting"/>
                    <p id="applied-intelligence" className="right-text">Applied Intelligence combines artificial intelligence (AI) and machine learning technologies with data analytics, automation and human ingenuity that solve complex business problems.</p>
                    
                </div>
            </div>
            <p className="thirdBlock">  It is a smarter, faster and more effective approach to collect, process, and analyze data to create insights to act on, while automating those actions where possible to unlock business value.</p>
            <div className='stickies'>
                {stickys.map((sticky) => {
                return (
                    <div>
                        <p>{sticky.content}</p>
                    </div>
                    )
                    })
                };

            </div>
            <div className="consultingIMG3">
                <div className="mos-title reveal">
                    <div className="mos-name"><p>Management Operating System<br></br>(MOS)</p></div>
                    <div className="threeheight">
                        <div id="mos"><p>A Management Operating System is the set of tools, meetings, and behaviors used to manage people and processes.</p>
                        </div>
                        <div><p>This system follows a strict process of<br></br> <strong className="strongANDred">Plan. Do. Check. Act.</strong><br></br>  This improvement cycle enables control and with steady process performance improvement.  The MOS incorporates and employs a variety of subsystems inclusive of ‘any’ TOS.</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* <div className="consulting-logo">
                <div className="logo-content-wrapper">
                    <div>
                        <p>Elevate your systems and empower your teams. With our processes, toolsets and metrics, Cherry America can help you get your processes under control and achieve ongoing peace of mind from:
                        </p>
                    </div>
                    <div>
                        <ul>
                            <li>
                            Strategic Marine Terminal Operational Excellence 
                            </li>
                            <li>
                            With Data Analytics as a Service (DAaaS) 
                            </li>
                            <li>
                            Tactical Sustainment & Governance 
                            </li>
                        </ul>
                    </div>
                </div>
            </div> */}
            
                
               
        </div>
        
    );
};

export default Consulting;