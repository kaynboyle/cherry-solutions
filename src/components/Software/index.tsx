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
            <div className="box1row">
                <h2 id="AI" >Applied Inteligence</h2>
                <p className="left-text">Applied Intelligence combines <strong className="strongANDred reveal">artificial intelligence (AI)</strong> and  <strong className="strongANDred reveal">machine learning technologies</strong> with data <strong className="strongANDred reveal">analytics</strong>, <strong className="strongANDred reveal">automation</strong>, and <strong className="strongANDred reveal">human ingenuity</strong> to solve complex business problems</p>
            </div>
            <div className="flexRow">
            <div className="width50per">
                <div className="text-align-center margin-top-20px ">
                    <p className="text-align-center borders-20 fLARGE font600 LH2">
                    This approach involves collecting, processing, and analyzing data to create insights that can be acted upon, while <span className="bgLTBLUE">automating redundant actions to unlock business value</span>
                    </p>
                </div>
            </div>
            <div className="width50per text-align-center borders-20 fLARGE font600 bgLTBLUE LH2">
                <p>However, to effectively apply artificial intelligence,<br></br> <span className="bgWHITE">human intelligence must first be synthesized</span> into usable information from controlled data and processes.</p>
            </div>
           </div>
           <div className="borders-20 LHpoint5 width500 fXLARGE font600 border-bottom-red reveal "><p>How We Use AI</p></div>
            <div className='consulting1-flex margin-top-20px'>
                    
                    <div className="consultingCol1 width50per font600">
                        
                         <div className="margin-top-20px borders-20-5 LHpoint5 width500"><p>AI measures and predicts performance.</p></div>
                         <div className="borders-20-5 LHpoint5 width500"><p>A Commercial Off the Shelf (COTS) software tool is used to capture, index, and manage a library of artifacts for the Process Control System project and beyond.</p></div>
                         <div className="borders-20-5 LHpoint5 width500"><p>The artifacts include process maps, gap analysis materials, functional and process specifications, B2B and S2S relationship and performance specifications, and mapping of the order lifecycle.</p></div>
                         <div className="borders-20-5LHpoint5 width500"><p>The materials establish and house project artifacts, transitioning into the terminal's MOS sustainment toolset, and enable continuous improvement.</p></div>




                    </div>
    
    
                    
                    <div className="imageFlexcol">
                            <img className="mobile-friend" src={require("../../assets/images/aiMG1.jpeg")} alt="consulting"/>
                    </div>
                    
                </div>
            <div className="softwarebox1">
                <h2>Cherry COLA: Cherry Collective Data Assistant </h2>
                <p  className="left-text">Simplified big data processing, real-time asset performance benchmarked against assets design capability</p>
            </div>

            <div id="cherry-COLA">
                <div className="flexRow ">
                    <div className="width50per text-align-center padding-top-50px" >
                        <p className="fXLARGE"><strong className="border-bottom-LB">Cherry COLA: Cherry Collective Data Assistant </strong><br></br>
                            ‘Stop Gap’ Tools Include: COLA I, II, III, IV & V
                            </p>
                            
                    </div>
                    <div className="width50per bgLTBLUE ">
                        <p className="text-center borders-20 font600">Introducing the Cherry COLA suite of data management software, designed to streamline your operational resource planning and management processes </p>

                    </div>
                </div>
            </div>
            <div className="headerAbout">
                <div className="width20per bgLTBLUE fLARGE borders-20 fWEIGHT700 flex-center-image"><p>With five modules available<br></br> Cherry COLA<br></br>is your one-stop-shop for data management "stop gap" tools</p></div>
                <div className="width80per fLARGE fWEIGHT700 margin-top-20px marginLR30 LH2"><p><span className="redbox">Cherry COLA I</span> captures planning, ordering, and dispatch of production resources used by terminal operators<br></br><span className="redbox">Cherry COLA II</span> links resource modeling and job number application for precise cost modeling<br></br><span className="redbox">Cherry COLA III</span> provides a labeling framework linked to planning, authorization, and execution processes for each measurable body of work<br></br><span className="redbox">Cherry COLA IV</span> tracks container handling equipment usage, and <br></br><span className="redbox">Cherry COLA V</span> measures gathered data against established performance design criteria, allowing you to manage and optimize production variances</p></div>
            </div>
            <div className="flexRow ">
                    <div className="width50per text-align-center padding-top-50px" >
                        <p className="fXLARGE">Upgrade to Cherry COLA to improve your data management and streamline your operations
                            </p>
                            
                    </div>
                    <div className="width50per bgLTBLUE ">
                        <div className="back-to-top margin-top-50px">
                            <a href="#top"className="button-slideb slide-rightb font600">Click Here to Schedule a Demo</a>
                        </div>

                    </div>
                </div>
            <div id="cherry-PIE">
                
            </div>
        </div>
    );
};

export default Footer;