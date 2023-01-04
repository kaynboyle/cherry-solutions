import React, { useEffect, useState } from "react";
import "./style.css";
import "../../index.scss";
import Button from "react-bootstrap/Button";
import cn from "classnames";

interface cardInterface {
  id: string;
  front: string;
  back: string;
}
const cards: cardInterface[] = [
  {
    id: "1",
    front: "Performance Intelligence",
    back: "Marine Terminal Operational Excellence// DAaaS Install (Data Analytics as a Service)// Tactical Sustainment & Governance",
  },
  {
    id: "2",
    front: "Applied Intelligence",
    back: "Collect, Process & Analyze Data// Create Insights Identify Opportunities for Improvment// Automate Actions",
  },
  {
    id: "3",
    front: "Management Operating Systems (MOS)",
    back: "Tools,meetings, behaviors managing people and processes that deliver results// Plan, Do, Check, Act Improvement Cycle",
  },
  {
    id: "4",
    front: "CAPA Process Intelligence",
    back: "Corrective Action Preventative Action",
  },
  {
    id: "5",
    front: "Empowering Effective Management & Decision Making",
    back: "Observe, Orient, Decide, Act",
  },
  {
    id: "6",
    front: "Data Management Tools",
    back: "Collective Data Assistant/ Cherry Cola/ Cherry Pie",
  },
];

const Home = () => {
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
  return (
    <main>
      <div className="shadow-2xl">
        <div className="hero-image">
          <div className="shadow-2xl" id="hero-text">
            <div className="background">
              <p>
                Optimizing Container Terminal Performace, Tredictability & Transparancy.
              </p>
              <Button className="learn-more-button" variant="secondary">
                Learn More
              </Button>
              <p> </p>
              <p>
                Integrating People, Process & Technology by applying professional and
                solution serivices for configuring and installing 'Success by Design'
              </p>
            </div>
          </div>
        </div>
      </div>
     <div className="results-box ">
        <div className="proven-results reveal">
          <p className="middle-p">Develop an maintain a culture of operational excellence with a strategic program and toolset
          </p>
          <p className="middle-p">
          Supports increasing and evolving customer and shareholder requirements.
          
          </p>
        </div>
        <div className="Solutions">
          <h2></h2>
        </div>
        <div className='card-container'>
          <div className="flip-cards">
            {cards.map((card) => {
              return (
                <div className="flip-card-outer">
                  <div className={cn("flip-card-inner", "hover-trigger")}>
                    <div className="card front">
                      <div className="card-body d-flex justify-content-center align-items-center">
                        <p className="card-text ">{card.front}</p>
                      </div>
                    </div>
                    <div className="card back">
                      <div className="card-body">
                        <p className="card-text">{card.back}</p>
                        <Button className="learn-more-button" variant="secondary">
                          Learn More
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
          <div></div>
          </div>
        </div>
        <div className="photo3">
          <div className="three">

          </div>
        </div>
        <div className='cherry'>
          <div className="proven-results reveal">
            <h2>  Proven Results </h2>
          </div>
          <div className="results-flex reveal">
          <div className="result-item" id="box1">
            <ul>
              <li>
              Reduction of up to 15% of man-hour & Equipment hour per lift costs
              </li>
              <li>
              Ongoing protection from entropy, preventing 1-3% of annual erosion
              </li>
              <li>
              Startup ROI as measured in months and ongoing support cost fractional to savings

              </li>
            </ul>
          </div>
        
          <div className="result-item" id="box2">
            <p className="bold-text">Notable Cherry America technology</p>
            <p>implementations include
              1st to implement longshore time tracking solution on US West Coast
              1st to implement OCR, EPS technology on US West Coast
              2+ decades of enhancing MTOs Business Intelligence Environments
            </p>
          </div>
        </div>
      </div>
      <div className='bottomHome'>
      </div>
    </main>
  );
};

export default Home;
