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
                    This approach involves collecting, processing, and analyzing data to create insights that can be acted upon, while <span className="bgLTBLUE">automating redundant actions</span> to <span className="bgLTBLUE">unlock business value</span>
                    </p>
                </div>
            </div>
            <div className="width50per text-align-center borders-20 fLARGE font600 bgLTBLUE LH2">
                <p>However, to effectively apply artificial intelligence,<br></br> <span className="bgWHITE">human intelligence</span> must first be synthesized into usable information from controlled data and processes.</p>
            </div>
           </div>
            <div className='consulting1-flex margin-top-20px'>
                    
                    <div className="consultingCol1 width50per reveal font600">
                        
                         <div className="margin-top-20px borders-20-5 LHpoint5 width500"><p>The basis for AI is a foundational and functional Process Control System that captures inputs, outputs, capacities, constraints, assumptions, and expectations to measure and predict performance.</p></div>
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