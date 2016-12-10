import React, { Component } from 'react';
var WorldMap = require('react-world-map');
import './App.css';

export default class App extends Component {
	render() {
	return(
	  <div>
		 <h1>Welcome GA factbook</h1>
         <p>this is a test</p>
         <WorldMap />
	 </div>
     );
  }
}


