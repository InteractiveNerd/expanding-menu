import React, { useState, useEffect, useRef } from 'react';
import { TweenMax, Power3 } from 'gsap';
import './Navigation.scss';

const Navigation = () => {
  const [navSwitch, setNavSwitch] = useState(false);
  let navMenu = useRef(null);
  const handleClick = (e) => {
    e.preventDefault();
    return navSwitch ? setNavSwitch(false) : setNavSwitch(true);
  };
  useEffect(() => {
    console.log(navSwitch);
    if (navSwitch) {
      TweenMax.to(navMenu, 2, { width: 430 });
    } else {
      TweenMax.to(navMenu, 2, { width: 108 });
    }
  });
  return (
    <div
      className="nav"
      ref={(el) => {
        navMenu = el;
      }}
    >
      <div className="nav-header">
        <div className="nav-item__icon-header">
          <img alt="icon" id="xd-logo" src="./icons/XD-Logo.svg" />
        </div>
        <div className="nav-search">
          <form>
            <input type="text" name="search" id="search" value={navSwitch} />
          </form>
        </div>
      </div>
      <ul className="nav-list">
        <li className="nav-item">
          <a href="/" onClick={handleClick}>
            <div className="nav-item__icon">
              <img alt="icon" src="./icons/home-water.svg" />
            </div>
            <div className="nav-item__text">Home</div>
          </a>
        </li>
        <li className="nav-item">
          <div className="nav-item__icon">
            <img alt="icon" src="./icons/Bell.svg" />
          </div>
          <div className="nav-item__text">Notifications</div>
        </li>
        <li className="nav-item">
          <div className="nav-item__icon">
            <img alt="icon" src="./icons/camera-movie.svg" />
          </div>
          <div className="nav-item__text">Videos</div>
        </li>
        <li className="nav-item">
          <div className="nav-item__icon">
            <img alt="icon" src="./icons/chart-pie.svg" />
          </div>
          <div className="nav-item__text">Analytics</div>
        </li>
        <li className="nav-item">
          <div className="nav-item__icon">
            <img alt="icon" src="./icons/settings.svg" />
          </div>
          <div className="nav-item__text">Settings</div>
        </li>
      </ul>
    </div>
  );
};

export default Navigation;
