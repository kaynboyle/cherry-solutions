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
      <h2>DEVELOP AND MAINTAIN A CULTURE OF OPERATIONAL EXCELLENCE WITH A
STRATEGIC PROGRAM AND TOOLSET
Supports increasing and evolving customer and shareholder requirements.</h2>
      <h2>Solutions</h2>
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
        </div>
    </main>
  );
};

export default Home;
