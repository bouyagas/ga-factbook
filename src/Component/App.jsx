import React, { Component } from 'react';
import NorthAmericaContainer from "./NorthAmericaContainer/NorthAmericaContainer.jsx";
import AfricaContainer from './AfricaContainer/AfricaContainer.jsx';
import AntarctinaContainer from './AntarctincaContainer/AntarcticaContainer.jsx';
import Map from './Map/Map.jsx';

export default class App extends Component {

  constructor() {
  super();
    this.state = {
      northamerica: [],
      africa: [],
      antarctica: [],
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
         northamerican: data
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
        console.log(data)
        this.setState = ({
          antarctica: data
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
        <AntarctinaContainer
        getAllAntarcticaCountries={this.getAllAntarcticaCountries.bind(this)}
        antarctica={this.state.antarctica}
        />
      </div>
    );
  }
}


