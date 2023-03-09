import React from 'react';
import "./style.css"
import "../../assets/images/Consulting2.jpeg";
import {reveal} from "../../scripts/reveal";

const Consulting = () => {
    window.addEventListener("scroll", reveal);
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
    interface pmInterface{
        id:string;
        title: string;
        content: string;
    };
    const pm: pmInterface[]=[
        {
            id:"1",
            title: "PM 1 - Project management",
            content:"is the application of processes, methods, skills, knowledge, and experience to achieve specific project objectives according to the project acceptance criteria within agreed parameters. Project management has final deliverables that are constrained to a finite timescale and budget."
        },
        {
            id:"2",
            title: "PM 2 - Program management",
            content:"is the process of managing programs mapped to business objectives that improve organizational performance. Program managers oversee and coordinate the various projects and other strategic initiatives throughout an organization."
        },
        {
            id:"3",
            title: "PM 3 - Process Management",
            content:"refers to aligning processes with an organization's strategic goals as well as designing, and implementing process architectures, establishing process measurement systems that align with organizational goals, and educating and organizing managers so that they will manage processes effectively."
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

    return(
        <div id="consulting">
            {/* id="top"className='header-wrap' */}
            <div>
                {/* <h1>Consulting</h1>
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
                    
                </div> */}
            </div>
            <div className="hero-software">
                <div>
                    <img className='consultingimg1 mobile-friend' src={require("../../assets/images/Consulting1.jpeg")} alt="consulting"/>
                </div> 
                <div className="imageOverlay">
                        <h2>Professional Services</h2> 
                </div>    
            </div>
            <div className="box1row">
                <h2 >Management Operating System (MOS)</h2>
                <p  className="left-text">A MOS is the set of tools, meetings and behaviors used to manage your people, processes, and technology to<strong className="strongANDred reveal"> deliver results</strong></p>
            </div>
              
                <div id="mos" className="consultingIMG3">
                <div className="box1row2 closer">
                            <p className="left-text"> A Key Distinction TOS vs. MOS
                            </p>
                    </div>   
                <div className="mos-title reveal">
                    {/* <div className="mos-name"><p>Management Operating System<br></br>(MOS)</p></div> */}
                    <div className="threeheight">
                        <div ><p><strong><u>T</u>erminal <u>O</u>perating <u>S</u>ystem: A TOS</strong></p>
                            <p>The <strong className="strong">TOS</strong> is a key part of a <strong>terminal</strong>, one primarily focused on the control, movement, and storage of various types of cargo in and around<br></br> a container <strong>terminal</strong>.</p><p>The <strong>TOS</strong> is part of the <strong>MOS</strong> controlling data within its expert functions and linking to an integrated management <br></br>tools and processes.</p>
                        </div>
                    </div>
                    <div className="threeheight">
                        <div >
                            <p><strong><u>M</u>anagement <u>O</u>perating <u>S</u>ystem: A MOS</strong></p>
                            <p>A <strong>MOS</strong> follows the Plan, Do, Check, Act improvement cycle to get control and steadily improve process performance. </p>
                            <p>The <strong>MOS</strong> incorporates and employs a variety of expert systems <br></br>inclusive of ‘any’ <strong>TOS</strong>.</p>
                            <p>The <strong>MOS</strong> creates ability to align, and performance measure the effective utilization and delivery of expected ROI of the investment across expert systems.</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="box1row shortened-row">
                <p  className="left-text">The MOS enables a strict process of <strong className="strongANDred reveal">Plan. Do. Check. Act.</strong> This improvement cycle enables <br></br>control and steady process performance improvement. </p>
            </div>
            <div className="proven-results background-blueONwhite">
                    <p className="middle-p x-large"><strong>All Industrial Plants (Terminals) have a MOS</strong></p>
                </div>
            <div className="does-you-mos-work">
                
                <div className="imageFlexcol consultingCol1 mos-circle">
                    <div><img  src={require("../../assets/images/mos-circle-img.jpg")} alt="consulting"/></div>
                    <div><p className="reveal">Key Question:<br></br> ‘Does your MOS work?’</p></div> 
                            

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
            <div className="box1row">
                <h2 id="Effective-Management">Effective Management and Decision Making</h2>
                <p  className="left-text"><strong className="strongANDred reveal"> Observe, Orient, Decide Act</strong></p>
            </div>
            <div className="flex-row-justifyANDalign-center equal-boxes">
                <p className='hypothesis'>Hypothesis</p>
                <p className="red-border-right">Legacy Management Operating Systems at various terminals have eroded, and now lack cohesiveness and transparency; leading to asset underperformance. </p>
            </div>
            <div className='consulting1-flex'>
                    
                <div className="consultingCol1 reveal">
                    <div className="box1">
                            <p>
                            An audit of the current state of people, process, and technology investments in the context of how it is performing as the de facto ‘Management Operating System will isolate GAPS and develop both:
                            </p>
                     </div>
                     <div className="box1 ">
                        <li> A formally structured Strategic Master Plan linking ‘Optimal Future State’ to tactical objectives, milestones, and resources.</li>
                        <li>
                        Design integration of Financial Reporting (Accounting) and Operational Reporting (Management Accounting) sources to the<br></br> ‘Unit of Work’ / Cost = Zero Based</li>
                        <li>
                        A Plan and measurable tactical momentum for making terminal assets transparently perform to their present capability and progress against ‘Optimal’ as defined by the Master Plan. 
                        </li> 
                     </div>
                </div>


                
                <div className="imageFlexcol">
                        <img className="mobile-friend" src={require("../../assets/images/Consulting2.jpeg")} alt="consulting"/>
                </div>
                
            </div>
            <div className='flex-row-justifyANDalign-center marginB-80 margin-rect backgroundDB ' >
                <p className="red-border-right center-text max-width-500 paddingTB-40 backgroundWhite reveal">A formal, designed, and installed, Management Operating System program will tune existing resources as well as identify gaps in the toolset <br></br> <strong>(People, Process, and Technology)</strong> required for the global terminal operator to optimize their terminal investment. </p>
                <p className="red-border-right center-text max-width-500 backgroundWhite reveal">When a Terminal defaults to what appears to be  ‘Fighting Fires,’ identifying perceived tactical ‘Gaps’ via service or other performance failures without root cause identification of the true ‘Gap’ between <strong>ACTUAL and OPTIMAL</strong> it falls into a reactionary cycle. This reactionary posture and lack of transparency is a function of process, practice, and tool ‘GAP’ in their management system </p>
            </div>
            
            
            <div className="photo3 margin-rect">
                <div className="three"></div>
            </div> 
            
            <div className="box1row2 upper-filter">
                <div className="logo-content-wrapper">
                    <div>
                        <p className="bottom-red-underline">Resolving GAP and empowering terminal management requires the implementation of a Process Management Program, one leading to a new way of working, acting, and thinking. </p>
                        <p>Change begins with PM 1 being driven by the MOS project leader.
                        The functions of this ‘role’ begin to transition to terminal  departmental management as staff is onboarded to the program: 


                        </p>
                        
                    </div>
                    
                        <ul>
                            <li>PM 1 core competencies integrate into terminal management.  
                            </li>
                            <p>The Program lead leans more into the PM 2 role as the terminal <br></br>team matures.</p>
                            <li>PM 2 also onboards terminal resources as internal resources are aligned to the continuous improvement process regime and culture. 
                            </li>
                            <p>The outcome of the Program is the new way of working = PM 3 </p>
                        </ul>
                        
                    </div>
                    
            </div>
            
            <div className='ai-title'>
                <div className='pm'>
                    {pm.map((project) => {
                    return (
                        <div>
                            <p><strong><u>{project.title}</u></strong></p>
                            <p>{project.content}</p>
                        </div>
                        )
                        })
                    };

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
                    <img className="mobile-friend" src={require("../../assets/images/capa-img1.jpg")} alt="capa"/>

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