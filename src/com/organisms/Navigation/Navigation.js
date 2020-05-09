import React { useStae } from 'react';
import './Navigation.scss';

const Navigation = () => {
  const [count ,setCount] = useState(1);
  return (
    <div className="nav open">
      <div className="nav-header">
        <div className="nav-item__icon-header">
          <img alt="icon" id="xd-logo" src="./icons/XD-Logo.svg" />
        </div>
        <div className="nav-search">
          <form>
            <input type="text" name="search" id="search" value={count}/>
          </form>
        </div>
      </div>
      <div className="nav-list">
        <div className="nav-item">
          <div className="nav-item__icon">
            <img alt="icon" src="./icons/home-water.svg" />
          </div>
          <div className="nav-item__text">Home</div>
        </div>
        <div className="nav-item">
          <div className="nav-item__icon">
            <img alt="icon" src="./icons/Bell.svg" />
          </div>
          <div className="nav-item__text">Notifications</div>
        </div>
        <div className="nav-item">
          <div className="nav-item__icon">
            <img alt="icon" src="./icons/camera-movie.svg" />
          </div>
          <div className="nav-item__text">Videos</div>
        </div>
        <div className="nav-item">
          <div className="nav-item__icon">
            <img alt="icon" src="./icons/chart-pie.svg" />
          </div>
          <div className="nav-item__text">Analytics</div>
        </div>
        <div className="nav-item">
          <div className="nav-item__icon">
            <img alt="icon" src="./icons/settings.svg" />
          </div>
          <div className="nav-item__text">Settings</div>
        </div>
      </div>
    </div>
  );
};

export default Navigation;
