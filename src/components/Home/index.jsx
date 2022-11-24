import React, { useEffect, useState } from "react";
import "./style.css";
import "../../index.scss"; 
import Button from 'react-bootstrap/Button';
import FlipCard from "./FlipCards";

const cards = [
  {
    id: "1",
    variant: "hover",
    front: "Hover",
    back: "Back"
  },
  {
    id: "2",
    variant: "click",
    front: "Click",
    back: "Back"
  },
  {
    id: "3",
    variant: "focus",
    front: "Focus",
    back: "Back"
  }
];
  
const Home = () => {
  return(
    <main>
      <div className="shadow-2xl">
        <div className="hero-image">
          <div className="shadow-2xl" id="hero-text">
            <div className="background">
              <p>Optimizing Container Terminal  Performace, 
                Tredictability & Transparancy.
              </p>
              <Button className="learn-more-button" variant="secondary">Learn More</Button>
              <p> </p>
              <p>Integrating People, Process & Technology 
                by applying professional and solution serivices
                for configuring and installing 'Success by Design'
              </p>
            </div>
          </div>
        </div>
      </div>
      <div>
          {cards.map((card) => (
            <FlipCard key={card.id} card={card} />
          ))}
      </div>
    </main>

  );
};

export default Home;
