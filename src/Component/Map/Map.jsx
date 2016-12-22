import React, { Component } from 'react';
var WorldMap = require('react-world-map');
import './Map.css';

export default class Map extends Component {
	render() {
	return(
	  <div className="map">
        <WorldMap />
	 </div>
     );
  }
}


