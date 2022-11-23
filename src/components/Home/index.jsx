import React, { useEffect, useState } from "react";
import "./style.css";
import Button from 'react-bootstrap/Button';


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
    </main>

  );
};

export default Home;
