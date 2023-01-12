import React, { useEffect, useState } from "react";
import "./style.css";
import "../../index.scss";
import Button from "react-bootstrap/Button";
import cn from "classnames";
import { AiOutlineDotChart, AiFillBulb, AiOutlineTeam,AiOutlineLaptop,AiFillReconciliation,AiOutlineSync } from "react-icons/ai";
import { FaLinkedin, FaYoutube, FaPencilAlt } from "react-icons/fa";
import { IconContext, IconType } from "react-icons";
import { GrPowerCycle } from "react-icons/gr";

interface cardInterface {
  id: string;
  front: string;
  back1: string;
  back2: string;
  back3: string;
  href: string;
  icon: JSX.Element;
  children?: IconContext;
}
const cards: cardInterface[] = [
  {
    id: "1",
    front: "Performance Intelligence",
    back1: "Marine Terminal Operational Excellence",
    back2: "DAaaS Install (Data Analytics as a Service)",
    back3: "Tactical Sustainment & Governance",
    href: "/consulting#performance-intelligence",
    icon: <AiFillReconciliation size={50} />,
  },
  {
    id: "2",
    front: "Applied Intelligence",
    back1: "Collect, Process & Analyze Data",
    back2: "Create Insights Identify Opportunities for Improvment",
    back3: "Automate Actions",
    href: "/consulting#applied-intelligence",
    icon: <AiFillBulb size={50} />,
  },
  {
    id: "3",
    front: "Management Operating Systems (MOS)",
    back1: "Tools,meetings, behaviors managing people and processes that",
    back2: " deliver results",
    back3: "Plan, Do, Check, Act Improvement Cycle",
    href: "/consulting#mos",
    icon: <AiOutlineDotChart size={50} />,
  },
  {
    id: "4",
    front: "CAPA Process Intelligence",
    back1: "Corrective Action Preventative Action",
    back2: "",
    back3: " ",
    href: "/consulting#capa",
    icon: <AiOutlineSync size={50}/>,
  },
  {
    id: "5",
    front: "Empowering Effective Management & Decision Making",
    back1: "Observe, Orient, Decide,",
    back2: "Act",
    back3: " ",
    href: " ",
    icon: <AiOutlineTeam size={50} />,
  },
  {
    id: "6",
    front: "Data Management Tools",
    back1: "Collective Data Assistant",
    back2: "Cherry Cola",
    back3: "Cherry Pie",
    href: " ",
    icon: <AiOutlineLaptop size={50} />,
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
              <a href="#learn-more" className="learn-more-button">
                Learn More
              </a>
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
          <p className="middle-p">
            Develop and maintain a culture of operational excellence with a strategic
            program and toolset
          </p>
          <p className="middle-p">
            Supports increasing and evolving customer and shareholder requirements.
          </p>
        </div>

        <div id="learn-more" className="card-container mobile-friend">
          <div className="flip-cards">
            {cards.map((card) => {
              return (
                <div className="flip-card-outer">
                  <div className={cn("flip-card-inner", "hover-trigger")}>
                    <div className="card front">
                      <div className="card-body d-flex justify-content-center align-items-center">
                        <div className="iconDIV">
                          <IconContext.Provider value={{ className: "react-icons-home" }}>
                            {card.icon}
                          </IconContext.Provider>
                        </div>
                        <p className="card-text ">
                          {card.front}
                        </p>
                      </div>
                    </div>
                    <div className="card back">
                      <div className="card-body">
                        <p className="card-text">
                          {card.back1}
                          <br></br>
                          {card.back2}
                          <br></br>
                          {card.back3}
                        </p>
                        <a href={card.href} className="learn-more-button">
                          Learn More
                        </a>
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
        <div className="three"></div>
      </div>
      <div className="bottomHome resize-gif">
        <div className="gif-container">
          <img src={require("../../assets/images/cherryGIF.gif")}></img>
        </div>
        <div className="gif-p">
          <p>providing ongoing peace of mind that your process are under control</p>
        </div>
      </div>
      <div className="cherry">
        <div className="proven-results reveal">
          <p> Proven Results </p>
        </div>
        <div className="results-flex">
          <div className="result-item" id="box1">
            <ul>
              <li>
                Reduction of up to 15% of man-hour & Equipment hour per lift costs
              </li>
              <li>
                Ongoing protection from entropy, preventing 1-3% of annual erosion
              </li>
              <li>
                Startup ROI as measured in months and ongoing support cost fractional to
                savings
              </li>
            </ul>
          </div>

          <div className="result-item" id="box2">
            <p className="bold-text">Notable Cherry America technology</p>
            <p>implementations include...</p>
            <li>1st to implement longshore time tracking solution on US West Coast</li>
            <li>1st to implement OCR, EPS technology on US West Coast</li>
            <li>2+ decades of enhancing MTOs Business Intelligence Environments</li>
          </div>
        </div>
      </div>
      <div className="ribbon">
        <strong className="ribbon-content">
          Working with leading companies and partners
        </strong>
      </div>
      <div className="bottomHome">
        <div className="partner-size">
          <div className="partners1"></div>
        </div>
        <div className="partner-size">
          <div className="partners2"></div>
        </div>
        <div className="partner-size">
          <div className="partners3"></div>
        </div>
      </div>
    </main>
  );
};

export default Home;
