import React, { useState, useEffect, useRef } from "react";
import { TweenMax, Power3 } from "gsap";
import "./Navigation.scss";

import { Link } from "react-router-dom";

const Navigation = () => {
  const [navSwitch, setNavSwitch] = useState(false);
  let navMenu = useRef(null);
  let navSearch = useRef(null);
  let navTxt1 = useRef(null);
  let navTxt2 = useRef(null);
  let navTxt3 = useRef(null);
  let navTxt4 = useRef(null);
  let navTxt5 = useRef(null);
  const handleClick = (e) => {
    e.preventDefault();
    return navSwitch ? setNavSwitch(false) : setNavSwitch(true);
  };
  useEffect(() => {
    console.log(navSwitch);
    if (navSwitch) {
      TweenMax.to(navMenu, 2, { width: 430, ease: Power3 });
      TweenMax.to(navSearch, 0.5, { left: 0, opacity: 1, ease: Power3 });
      TweenMax.to(navTxt1, 0.8, { left: 0, opacity: 1, ease: Power3 });
      TweenMax.to(navTxt2, 0.8, {
        left: 0,
        opacity: 1,
        ease: Power3,
        delay: 0.2,
      });
      TweenMax.to(navTxt3, 0.8, {
        left: 0,
        opacity: 1,
        ease: Power3,
        delay: 0.4,
      });
      TweenMax.to(navTxt4, 0.8, {
        left: 0,
        opacity: 1,
        ease: Power3,
        delay: 0.6,
      });
      TweenMax.to(navTxt5, 0.8, {
        left: 0,
        opacity: 1,
        ease: Power3,
        delay: 0.8,
      });
    } else {
      TweenMax.to(navMenu, 2, { width: 108, ease: Power3 });
      TweenMax.to(navSearch, 0.5, { left: 400, opacity: 0, ease: Power3 });
      TweenMax.to(navTxt1, 0.8, { left: 400, opacity: 0, ease: Power3 });
      TweenMax.to(navTxt2, 0.8, {
        left: 400,
        opacity: 0,
        ease: Power3,
        delay: 0.2,
      });
      TweenMax.to(navTxt3, 0.8, {
        left: 400,
        opacity: 0,
        ease: Power3,
        delay: 0.4,
      });
      TweenMax.to(navTxt4, 0.8, {
        left: 400,
        opacity: 0,
        ease: Power3,
        delay: 0.6,
      });
      TweenMax.to(navTxt5, 0.8, {
        left: 400,
        opacity: 0,
        ease: Power3,
        delay: 0.8,
      });
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
        <div
          className="nav-search"
          ref={(el) => {
            navSearch = el;
          }}
        >
          <form>
            <input type="text" name="search" id="search" value={navSwitch} />
          </form>
        </div>
      </div>
      <ul className="nav-list">
        <li className="nav-item">
          <a href="/" onClick={handleClick}>
            <div className="nav-item__btn">
              <div className="nav-item__icon">
                <img alt="icon" src="./icons/home-water.svg" />
              </div>
              <div
                className="nav-item__text"
                ref={(el) => {
                  navTxt1 = el;
                }}
              >
                <Link to="/" className="nav-item__text--link">
                  Home
                </Link>
              </div>
            </div>
          </a>
        </li>
        <li className="nav-item">
          <div className="nav-item__icon">
            <img alt="icon" src="./icons/Bell.svg" />
          </div>
          <div
            className="nav-item__text"
            ref={(el) => {
              navTxt2 = el;
            }}
          >
            <Link to="/notifications" className="nav-item__text--link">
              Notifications
            </Link>
          </div>
        </li>
        <li className="nav-item">
          <div className="nav-item__icon">
            <img alt="icon" src="./icons/camera-movie.svg" />
          </div>
          <div
            className="nav-item__text"
            ref={(el) => {
              navTxt3 = el;
            }}
          >
            <Link to="/videos" className="nav-item__text--link">
              {" "}
              Videos{" "}
            </Link>
          </div>
        </li>
        <li className="nav-item">
          <div className="nav-item__icon">
            <img alt="icon" src="./icons/chart-pie.svg" />
          </div>
          <div
            className="nav-item__text"
            ref={(el) => {
              navTxt4 = el;
            }}
          >
            <Link to="/analytics" className="nav-item__text--link">
              {" "}
              Analytics{" "}
            </Link>
          </div>
        </li>
        <li className="nav-item">
          <div className="nav-item__icon">
            <img alt="icon" src="./icons/settings.svg" />
          </div>
          <div
            className="nav-item__text"
            ref={(el) => {
              navTxt5 = el;
            }}
          >
            <Link to="/settings" className="nav-item__text--link">
              {" "}
              Settings{" "}
            </Link>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default Navigation;
