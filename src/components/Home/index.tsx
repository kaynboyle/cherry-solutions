import React, { useEffect, useState, ReactElement } from "react";
import "./style.css";
import "../../index.scss";
import Button from "react-bootstrap/Button";
import cn from "classnames";
import {
  AiOutlineDotChart,
  AiFillBulb,
  AiOutlineTeam,
  AiOutlineLaptop,
  AiFillReconciliation,
  AiOutlineSync,
} from "react-icons/ai";
import { FaLinkedin, FaYoutube, FaPencilAlt } from "react-icons/fa";
import { IconContext, IconType } from "react-icons";
import { GrPowerCycle } from "react-icons/gr";
import { UrlWithStringQuery } from "url";
import * as myImg from "../../assets/images/mos-circle-img.jpg";

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
interface partnerInterface {
  id: string;
  source: ReactElement;
}
const cards: cardInterface[] = [
  {
    id: "1",
    front: "Management Operating Systems (MOS)",
    back1: "MOS is the set of",
    back2: "tools, meetings, and behaviors",
    back3: "used to manage people, processes, and technology.",
    href: "/consulting#mos",
    icon: <AiOutlineDotChart size={50} />,
  },
  {
    id: "2",
    front: "Empowering Effective Management & Decision Making",
    back1: "‘Before, During & After’",
    back2: "",
    back3: "integrated tools with a user manual ",
    href: " ",
    icon: <AiOutlineTeam size={50} />,
  },
  {
    id: "3",
    front: "Applied Intelligence",
    back1: "Evolving to AI",
    back2: "from designed, monitored, and managed HI",
    back3: "(Human Intelligence)",
    href: "/consulting#applied-intelligence",
    icon: <AiFillBulb size={50} />,
  },
  {
    id: "4",
    front: "Performance Intelligence",
    back1: "Evolving underperforming",
    back2: "‘Business Intelligence’ to transform source data into Information:",
    back3: "Identify, Action, and Eliminate Underperformance",
    href: "/consulting#performance-intelligence",
    icon: <AiFillReconciliation size={50} />,
  },
  {
    id: "5",
    front: "Data Management Software Solutions",
    back1: "Applied Resource ‘Stop-Gap’ Data:",
    back2: "Payroll versus Time Tracking Equipment Utilization",
    back3: "Commercial Design vs Actual",
    href: " ",
    icon: <AiOutlineLaptop size={50} />,
  },
  {
    id: "6",
    front: " CAPA Corrective Action Preventative Action",
    back1: "Defect & Performance",
    back2:
      " Variation Actioning as well as Intra/Interdepartmental Ownership and Outcome",
    back3: "Integrated Transparency: PEOPLE + PROCESS + TECHNOLOGY",
    href: "/consulting#capa",
    icon: <AiOutlineSync size={50} />,
  },
];
const partners: partnerInterface[] = [
  {
    id: "1",
    source: (
      <img src={require("../../assets/images/chevron.png")} alt="partner" />
    ),
  },
  {
    id: "2",
    source: (
      <img src={require("../../assets/images/amp.png")} alt="partner" />
    ),
  },
  {
    id: "3",
    source: (
      <img src={require("../../assets/images/its.png")} alt="partner" />
    ),
  },
  {
    id: "4",
    source: (
      <img src={require("../../assets/images/amazon.png")} alt="partner" />
    ),
  },
  {
    id: "5",
    source: (
      <img src={require("../../assets/images/cargoVelocity.jpg")} alt="partner" />
    ),
  },
  {
    id: "6",
    source: (
      <img src={require("../../assets/images/endava.png")} alt="partner" />
    ),
  },
  {
    id: "7",
    source: (
      <img src={require("../../assets/images/nautilus.png")} alt="partner" />
    ),
  },
  {
    id: "8",
    source: (
      <img src={require("../../assets/images/pasha.png")} alt="partner" />
    ),
  },
  {
    id: "9",
    source: (
      <img src={require("../../assets/images/Tong_Yang_Group_Logo.png")} alt="partner" />
    ),
  },
  {
    id: "10",
    source: (
      <img src={require("../../assets/images/yusen.png")} alt="partner" />
    ),
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
                <strong>
                  Optimizing Global Terminal Operations <br></br>
                  and Integrated Marine and Intermodal Processes & Performance
                </strong>
              </p>
              <a href="#learn-more" className="learn-more-button">
                Learn More
              </a>
              <p> </p>
              <p>
                by Applying State-Of-The-Art Software and Professional Services
                Solutions
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="results-box ">
        <div className="proven-results reveal">
          <p className="middle-p">
            <strong>
              Establishing and sustaining a culture of Operational Excellence
            </strong>
          </p>
          <p className="middle-p">
            in support of increasing and evolving customer and shareholder requirements.
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
                          <IconContext.Provider
                            value={{ className: "react-icons-home" }}
                          >
                            {card.icon}
                          </IconContext.Provider>
                        </div>
                        <p className="card-text ">{card.front}</p>
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
      <div className="resize-gif">
        <div className="gif-container">
          <img src={require("../../assets/images/cherryGIF.gif")}></img>
        </div>
        <div className="gif-p">
          <p>providing ongoing peace of mind that your process are under control</p>
        </div>
      </div>
      <div className="cherry">
        <div className="proven-results reveal">
          <p> Proven Results and Notable Accomplishments</p>
        </div>
        <div className="results-flex">
          <div className="result-item" id="box1">
            <ul>
              <li>
                Material reduction, up to 15%, of Labor & Equipment Hour-Per-Lift cost.
                <ul>
                  <li>
                    Lift = Revenue generating ‘Through-Put’ unit, for example, an ISO
                    Container{" "}
                  </li>
                </ul>
              </li>
              <li>
                Ongoing protection from entropy, preventing 1-3%* of annual erosion
                <ul>
                  <li>
                    Estimate of system and process erosion due in organic management
                    systems
                  </li>
                </ul>
              </li>
              <li>
                Startup ROI as measured in months and ongoing support cost fractional to
                savings
                <ul>
                  <li>
                    Program ‘Surge’ resource investment and ongoing savings vs. staff
                    costs
                  </li>
                </ul>
              </li>
            </ul>
          </div>

          <div className="result-item" id="box2">
            <ul>
              <li>
                1st: Design & implement labor agency payroll to time tracking solution
                on US West Coast
                <ul>
                  <li>
                    Transforming ‘Payroll’ into ‘Time Tracking’ for resource performance
                  </li>
                </ul>
              </li>
              <li>
                1st: Design & implement comprehensive semi-automation deployment on US
                West Coast
                <ul>
                  <li>
                    Integrating and deploying OCR, EPS, GOS, and TOS for performance
                    management{" "}
                  </li>
                </ul>
              </li>
              <li>
                2+ decades of enhancing MTOs and related terminal, warehouse,
                trucking-related ‘Business Intelligence’ Environments – Establishing
                Performance Intelligence Platforms
                <ul>
                  <li>
                    In ‘Brownfield’, ‘Greenfield’ and Acquisition Transformation
                    scenarios{" "}
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="ribbon">
        <strong className="ribbon-content">
          Working with leading companies and partners
        </strong>
      </div>
      <div className="partner-flex">
        {partners.map((partner) => {
          return <div className="partner-child">{partner.source}</div>;
        })}
      </div>
    </main>
  );
};

export default Home;
