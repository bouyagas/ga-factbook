import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, hashHistory, IndexRoute } from 'react-router';
import App from './Component/App.jsx';
import Map from './Component/Map/Map.jsx';
import NorthAmericaContainer from './Component/NorthAmericaContainer/NorthAmericaContainer.jsx';
import AfricaContainer from './Component/AfricaContainer/AfricaContainer.jsx';
import EuropeanContainer from './Component/EuropeanContainer/EuropeanContainer.jsx';
import AntarcticaContainer from './Component/AntarcticaContainer/AntarcticaContainer.jsx';
import MiddleEastContainer from './Component/MiddleEastContainer/MiddleEastContainer.jsx';
import SouthAmericaContainer from './Component/SouthAmericaContainer/SouthAmericaContainer.jsx';




ReactDOM.render((
  <Router history={hashHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={Map} />
      <Route path="/northamerica" component={NorthAmericaContainer} />
      <Route path="/africa" component={AfricaContainer} />
      <Route path="/europe" component={EuropeanContainer} />
      <Route path="/antarctica" component={AntarcticaContainer} />
      <Route path="/middleEast" component={MiddleEastContainer} />
      <Route path="/southAmerica" component={SouthAmericaContainer} />
    </Route>
  </Router>
  ), document.querySelector('#root-container'));
