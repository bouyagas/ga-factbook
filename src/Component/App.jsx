import React, { Component } from 'react';
import { Link } from 'react-router';
import NorthAmericaContainer from './NorthAmericaContainer/NorthAmericaContainer.jsx';
import AfricaContainer from './AfricaContainer/AfricaContainer.jsx';
import EuropeanContainer from './EuropeanContainer/EuropeanContainer.jsx';
import AntarcticaContainer from './AntarcticaContainer/AntarcticaContainer.jsx';
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

  componentDidMount() {
    this.getAllNorthAmericaCountries();
    this.getAllAfricaCountries();
    this.getAllEuropeanCountries();
    this.getAllAntarcticaCountries();
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
        // console.log(data);
        this.setState({
          antarctica: data,
        });
      })
      .catch(err => console.log('Error', err));
    }


  render() {
    return (
      <div id="app">
        <h1>Welcome to Factbook</h1>
        {this.props.children && React.cloneElement(this.props.children, {
          // STATE
             state: this.state,
        })}
          <Link to="northamerica" className="link-northAmerica">North America</Link>
          <Link to="africa" className="link-northAmerica">Africa</Link>
          <Link to="europe" className="link-northAmerica">European</Link>
          <Link to="antarctica" className="link-northAmerica">Antarctica</Link>
        </div>
    );
  }
}



