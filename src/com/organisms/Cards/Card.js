import React, { useState, useEffect } from "react";
import axios from "axios";

const Card = () => {
  const [data, setData] = useState({ info: [] });

  useEffect(async () => {
    const result = await axios("https://jsonplaceholder.typicode.com/posts");
    setData(result.data);
  });

  return (
    <div className="card">
      {data.info.map((item) => (
        <div className="card__container">
          <div className="card__container-hero"></div>
          <div className="card__container-caption">{item.title}</div>
          <div className="card__container-btns">
            <button id="left"></button>
            <button id="right"></button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Card;
