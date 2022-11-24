
// {firstName, middleName = "N/A", lastName}:OptionalMiddleName)
import cn from "classnames";
import React, {Component} from 'react';


interface cards
  {
  id: string,
  variant: string,
  front: string,
  back: string,
};


function FlipCard(props:cards) {
    return (
      <div className="flip-card-outer">
        <div className="flip-card-inner">
          <div className="card front">
            <div className="card-body d-flex justify-content-center align-items-center">
              <p className="card-text fs-1 fw-bold">{props.id}</p>
            </div>
          </div>
          <div className="card back">
            <div className="card-body d-flex justify-content-center align-items-center">
              <p className="card-text fs-1 fw-bold">Back</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
  
  export default FlipCard;