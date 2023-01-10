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
    interface MOSInterface{
        id:string;
        title: string;
        content: string;
    };
    const MOSfeaturse: MOSInterface[]=[
        {
            id:"1",
            title:"Collect, Process and Analyze your data",
            content:"d"
        },
        {
            id:"2",
            title:"Create insights to identify clear opportunities to act on ",
            content: ""
        },
        {
            id:"3",
            title:"Automate redundant actions",
            content:""
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
            <div id="top"className='header-wrap'>
                <h1>Consulting</h1>
                <div className="consultingHeader">
                    <div>
                        <a className="button-slide slide-right" href="#performance-intelligence">PI</a>
                    </div>
                    <div>
                        <a className="button-slide slide-right" href="#applied-intelligence">AI</a>
                    </div>
                    <div>
                        <a className="button-slide slide-right" href="#mos">MOS</a>
                    </div>
                    <div>
                        <a className="button-slide slide-right" href="#capa">CAPA</a>
                    </div>
                    
                </div>
            </div>
            <div className="Consulting1img">
                <div>
                    <img id="performance-intelligence"className='consultingimg1 mobile-friend' src={require("../../assets/images/Consulting1.jpeg")} alt="consulting"/>
                    <div className="imageOverlay">
                        <p >What can Performance Intelligence do for You?</p> 
                    </div> 
                </div>    
            </div>
            <div className="box1row">
                <p  className="left-text">Unlock profitable, sustainable growth based on a data-driven approach to optimizing operations.
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

            <div id="applied-intelligence"  className="ai-title">
                <div className="title-p">
                    <p >Applied Intelligence</p>
                </div>
                <div className="box3row">
                    <img className='consultingimg2 mobile-friend reveal' src={require("../../assets/images/aiIMG2.jpg")} alt="consulting"/>
                    <p className="right-text">Applied Intelligence combines artificial intelligence (AI) and machine learning technologies with data analytics, automation and human ingenuity that solve complex business problems.</p>
                    
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
            <div id="mos" className="consultingIMG3">
                <div className="mos-title reveal">
                    <div className="mos-name"><p>Management Operating System<br></br>(MOS)</p></div>
                    <div className="threeheight">
                        <div ><p>A Management Operating System is the set of tools, meetings, and behaviors used to manage people and processes.</p>
                        </div>
                        <div><p>This system follows a strict process of<br></br> <strong className="strongANDred">Plan. Do. Check. Act.</strong><br></br>  This improvement cycle enables control and with steady process performance improvement.  The MOS incorporates and employs a variety of subsystems inclusive of ‘any’ TOS.</p>
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <p className="mos-graph-title">Four Stages of MOS Development</p>
                <div className="flex-graph">
                    <div className="size-contain">
                        <div className="graph-div">
                                <div className="mos-height"></div>
                        </div>
                        <p>Pace of Improvment</p>
                    </div>
                    <div className="fightingfires-ect">
                        <ul className="greater-ul">
                            <li className="title-li"><strong> 1. Fighting Fires</strong><br></br>
                                <ul>
                                    <li>Working hard but losing ground</li>
                                    <li>Lack of a coherent structure in operations management</li> 
                                    <li>Addressing symptoms instead of root causes</li>
                                    <li>Explaining away poor perfomance as "out of our control"</li>
                                </ul>
                            </li>
                            <li className="title-li"><strong >2. Treading Water</strong>
                                <ul>
                                    <li>Solving problems at the same rate they are occuring</li>
                                    <li>Meaningful but informal structure in place</li> 
                                    <li>holding ground but not improving</li>
                                    <li>High risk of derailment by a big event</li>
                                </ul>
                            </li>
                            <li className="title-li"><strong>3. Incrementally Improving</strong>
                                <ul>
                                    <li>Steady incremental gains</li>
                                    <li>Rigorous formal structure in place</li> 
                                    <li>CI literate workforce; broad engagement of hearts and minds</li>
                                    <li>Stringing towards world class; the best of continuous improvment</li>
                                    <li>Risk of complacency</li>
                                </ul>
                            </li>
                            <li className="title-li"><strong>4. Step Change Breakthroughs</strong>
                                <ul>
                                    <li>Achieving regular breakthrough improvements</li>
                                    <li>Routine challenging of the conventional limits; going beyond benchmarking</li> 
                                    <li>Strong, visible individual ownership for overall business performance</li>
                                    <li>Redefining world class</li>
                                </ul>
                            </li>

                        </ul>
                    </div>
                    
                </div>
            </div>
            <div id="capa" className="box1row new-color">
                <p  className="left-text recolor"><strong >CAPA</strong>: Corrective Action Preventative Action
                </p>
            </div>
            <div className="box1row2">
                <p className="left-text">As a part of our Process Intelligence methodology,<br></br> CAPA is a proven quality management process<br></br> that focuses on making improvements to an organization’s<br></br> processes to eliminate causes of actions that deviate from <br></br>stated standards and expectations. 
                </p>
            </div>  
            <div>
            <div className='consulting1-flex consulting1-addendum'>
                <div className="imageFlexcol reveal">
                    <img className="mobile-friend" src={require("../../assets/images/capa-img1.jpg")} alt="consulting"/>

                </div>
                <div className="box1 box1-addendum">
                    <p>
                    The CAPA methodology evaluates how processes, technologies, and people interact and work together, to accumulate a risk analysis to identify undesirable situations in terminal operations and identify actions to prevent an occurrence or recurrence.  The CAPA process focuses the knowledge and ownership transfers from operations to IT and AM.

                    <br></br><strong>CAPA is a point solution used when terminals need to mature rapidly and integrate internal sub-departments across the terminal.  </strong>

                    </p>
                    
                </div>
                
            </div> 
            </div>
            <div className="back-to-top">
                <a href="#top"className="button-slideb slide-rightb">Back to Top</a>
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