import React from 'react';
import './Navigation.scss';

const Navigation = () => {
  return (
    <div className="nav">
      <div>
        XD Icon and <input />
      </div>
      <div>
        <div>
          <div className="nav-item__icon">Icon</div>
          <div className="nav-item__text">Home</div>
        </div>
      </div>
      <div>
        <div>
          <div className="nav-item__icon">Icon</div>
          <div className="nav-item__text">Notifications</div>
        </div>
      </div>
      <div>
        <div>
          <div className="nav-item__icon">Icon</div>
          <div className="nav-item__text">Videos</div>
        </div>
      </div>
      <div>
        <div>
          <div className="nav-item__icon">Icon</div>
          <div className="nav-item__text">Analytics</div>
        </div>
      </div>
      <div>
        <div>
          <div className="nav-item__icon">Icon</div>
          <div className="nav-item__text">Settings</div>
        </div>
      </div>
    </div>
  );
};

export default Navigation;
