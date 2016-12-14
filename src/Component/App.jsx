import React, { Component } from 'react';
import NorthAmericaContainer from "./NorthAmericaContainer/NorthAmericaContainer.jsx";
import AfricaContainer from './AfricaContainer/AfricaContainer.jsx';
import AntarcticaContainer from './AntarcticaContainer/AntarcticaContainer.jsx';
import EuropeanContainer from './EuropeanContainer/EuropeanContainer.jsx'
import Map from './Map/Map.jsx';
import './App.css';

export default class App extends Component {

  constructor() {
    super();
    this.state = {
      northamerica: [],
      africa: [],
      antarctica: [],
      europe: [],
    };
  }

  getAllNorthAmericaCountries() {
    fetch(`/api/northAmerica`, {
      headers: {
        'Content-Type': 'application/json',
      },
      method: 'GET',
    })
     .then(r => r.json())
     .then((data) => {
      console.log(data);
       this.setState = ({
         northamerican: data,
       });
     })
    .catch(err => console.log('Error', err));
  }

  getAllAfricaCountries() {
    fetch(`/api/africa`, {
       headers: {
        'Content-Type': 'application/json',
       },
       method: 'GET',
      })
    .then(r => r.json())
    .then((data)=> {
      console.log(data);
      this.setState = ({
       african: data
      });
    })
    .catch(err => console.log('Error', err));
  }
    getAllAntarcticaCountries() {
      fetch(`/api/antarctica`, {
        headers: {
         'Content-Type': 'application/json',
         },
         method: 'GET',
        })
      .then(r => r.json())
      .then((data) => {
        console.log(data);
        this.setState = ({
          antarctica: data,
          });
        })
      .catch(err => console.log('Error', err));
    }

    getAllEuropeanCountries() {
      fetch(`/api/europe`, {
        Headers: {
          'Content-Type': 'application/json',
        },
        method: 'GET',
      })
      .then(r => r.json())
      .then((data) => {
        console.log(data);
        this.setState = ({
          europe: data,
        });
      })
      .catch(err => console.log('Error', err));
    }
  render() {
    return (
      <div id="app">
        <h1>Welcome GA Factbook</h1>
        <Map />
        <NorthAmericaContainer
         getAllNorthAmericaCountries={this.getAllNorthAmericaCountries.bind(this)}
         northamerica={this.state.northamerica}
         />
        <AfricaContainer
         getAllAfricaCountries={this.getAllAfricaCountries.bind(this)}
         africa={this.state.africa}
        />
        <AntarcticaContainer
        getAllAntarcticaCountries={this.getAllAntarcticaCountries.bind(this)}
        antarctica={this.state.antarctica}
        />
        <EuropeanContainer
         getAllEuropeanCountries={this.getAllEuropeanCountries.bind(this)}
         europe={this.state.europe}
         />
      </div>
    );
  }
}


