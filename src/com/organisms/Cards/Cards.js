import React from "react";
import "./Cards.scss";

const Cards = () => {
  return (
    <div id="Card">
      <div className="card-container">
        <div className="box-container">
          <div className="card-box"></div>
          <div className="capt-box"></div>
          <div className="btn-container">
            <button id="left-btn"></button>
            <button id="right-btn"></button>
          </div>
        </div>
      </div>
      <div className="box-container">
        <div className="card-box"></div>
        <div className="capt-box"></div>
        <div className="btn-container">
          <button id="left-btn"></button>
          <button id="right-btn"></button>
        </div>
      </div>
    </div>
  );
};

export default Cards;
