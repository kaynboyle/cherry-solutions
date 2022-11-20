import React, { useEffect, useState } from "react";
import "./style.css";

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
              <button id="home-header-button" className="button is-info">Learn More</button>
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
