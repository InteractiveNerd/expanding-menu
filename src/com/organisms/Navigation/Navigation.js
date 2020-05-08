import React from "react";
import "./Navigation.scss";

const Navigation = () => {
  return (
    <div className="nav">
      <div>
        <img id="xd-logo" src="./icons/XD Logo.svg" /> <input />
      </div>
      <div>
        <div>
          <div className="nav-item__icon">
            <img src="./icons/home-water.svg" />
          </div>
          <div className="nav-item__text">Home</div>
        </div>
      </div>
      <div>
        <div>
          <div className="nav-item__icon">
            <img src="./icons/Bell.svg" />
          </div>
          <div className="nav-item__text">Notifications</div>
        </div>
      </div>
      <div>
        <div>
          <div className="nav-item__icon">
            <img src="./icons/camera-movie.svg" />
          </div>
          <div className="nav-item__text">Videos</div>
        </div>
      </div>
      <div>
        <div>
          <div className="nav-item__icon">
            <img src="./icons/chart-pie.svg" />
          </div>
          <div className="nav-item__text">Analytics</div>
        </div>
      </div>
      <div>
        <div>
          <div className="nav-item__icon">
            <img src="./icons/settings.svg" />
          </div>
          <div className="nav-item__text">Settings</div>
        </div>
      </div>
    </div>
  );
};

export default Navigation;
