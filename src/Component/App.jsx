import React, { Component } from 'react';
import { Link } from 'react-router';
import NorthAmericaContainer from './NorthAmericaContainer/NorthAmericaContainer.jsx';
import AfricaContainer from './AfricaContainer/AfricaContainer.jsx';
import EuropeanContainer from './EuropeanContainer/EuropeanContainer.jsx';
import AntarcticaContainer from './AntarcticaContainer/AntarcticaContainer.jsx';
import MiddleEastContainer from './MiddleEastContainer/MiddleEastContainer.jsx';

import AustriliaAndOceaniaContainer from './AustriliaAndOceaniaContainer/AustriliaAndOceaniaContainer.jsx';
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
      middleEast: [],
      southAmerica: [],
      australiaOceania: [],
    };
  }

  componentDidMount() {
    this.getAllNorthAmericaCountries();
    this.getAllAfricaCountries();
    this.getAllEuropeanCountries();
    this.getAllAntarcticaCountries();
    this.getAllMiddleEastCountries();
    this.getAllSouthAmericanCountries();
    this.getAllAustriliaAndOceaniaCountries();
  }

  getAllNorthAmericaCountries() {
    fetch('/api/northAmerica', {
      headers: {
        'content-type': 'application/json',
      },
      method: 'GET',
    })
    .then(r => r.json())
    .then((data) => {
      this.setState({
        northamerica: data,
      });
    })
    .catch(err => console.log(err));
  }


  getAllAfricaCountries() {
    fetch(`/api/africa`, {
      headers: {
        'Content-Type': 'application/json',
      },
      method: 'GET',
    })
    .then(r => r.json())
    .then((data) => {
      console.log(data);
      this.setState({
        africa: data,
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
        this.setState({
          europe: data,
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
        this.setState({
          antarctica: data,
        });
      })
      .catch(err => console.log('Error', err));
  }

  getAllMiddleEastCountries() {
      fetch(`/api/middleEast`, {
        headers: {
          'Content-Type': 'application/json',
        },
        method: 'GET',
      })
      .then(r => r.json())
      .then((data) => {
        console.log(data);
        this.setState({
          middleEast: data,
        });
      })
      .catch(err => console.log('Error', err));
  }

  getAllSouthAmericanCountries() {
    fetch(`/api/southAmerica`, {
      headers: {
        'Content-Type': 'application/json',
      },
      method: 'GET',
    })
      .then(r => r.json())
      .then((data) => {
        console.log(data);
        this.setState({
          southAmerica: data,
        });
      })
      .catch(err => console.log('Error', err));
  }

  getAllAustriliaAndOceaniaCountries() {
    fetch(`/api/australiaOceania`, {
     headers: {
      'Content-Type': 'application/json',
     },
     method: 'GET',
   })
     .then(r => r.json())
      .then((data) => {
      console.log(data);
      this.setState({
       australiaOceania: data,
     });
    })
    .catch(err => console.log('Error', err));
  }

  render() {
    return (
      <div id="app">
        <h1>Welcome to GA-Factbook</h1>
        {this.props.children && React.cloneElement(this.props.children, {
          // STATE
          state: this.state,

        })}
        <Link to="northamerica" className="link-northAmerica">North America</Link>
        <Link to="africa" className="link-africa">Africa</Link>
        <Link to="europe" className="link-europe">European</Link>
        <Link to="middleEast" className="link-middleEast">Middle East</Link>
        <Link to="antarctica" className="link-antarctica">Antarctica</Link>

        <Link to="austriliaOceania" className="link-austriliaOceania"> Australia and Oceania </Link>
      </div>
    );
  }
}



