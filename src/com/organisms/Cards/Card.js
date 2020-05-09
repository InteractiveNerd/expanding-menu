import React from "react";

const Card = () => {
  return (
    <div className="card">
      <div className="card__container">
        <div className="card__container-hero"></div>
        <div className="card__container-caption"></div>
        <div className="card__container-btns">
          <button id="left"></button>
          <button id="right"></button>
        </div>
      </div>
    </div>
  );
};

export default Card;
