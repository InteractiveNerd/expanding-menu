import React from 'react';
import './Cards.scss';

import Home from '../Home/Home';
import Notifications from '../Notifications/Notifications';
import Videos from '../Videos/Videos';
import Analytics from '../Analytics/Analytics';

import Settings from '../Settings/Settings';
import { Switch, Route } from 'react-router-dom';

const Cards = () => {
  return (
    <Switch>
      <div id="Cards">
        <Route exact path="/" component={Home} />
        <Route path="/notifications" component={Notifications} />
        <Route path="/videos" component={Videos} />
        <Route path="/analytics" component={Analytics} />
        <Route path="/settings" component={Settings} />
      </div>
    </Switch>
  );
};

export default Cards;
