import React, { Component } from 'react';
import WorldMap from'react-world-map';
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


