import React, { Component } from 'react';
import Map from './Map/Map';
import './App.css';

export default class App extends Component {
  construtor() {
    super();
    this.state = {
      africa: [],
      antarctica: [],
      australiaOceania: [],
      centralAmericaAndCaribbean: [],
      centralAsia: [],
      eastAndSoutheastAsia: [],
      europe: [],
      meta: [],
      middleEast: [],
      northAmerica: [],
      oceans: [],
      southAmerica: [],
      southAsia: [],
      world: [],
    };
  }

   getAfricanCountries(){
    fetch('/api/africa', {
      header: {
        Content: 'application/json',
      },
      method: 'GET',
    })
     .then(r => r.json());
     .then((africa) => {
      console.log(africa);
      this.setState = ({
        africa: afican
      });
     })
    .catch(err => console.log('Error', err));
   }
  render() {
    return(
      <div id="app">
        <h1>Welcome GA factbook</h1>
        <Map />
      </div>
    );
  }
}


