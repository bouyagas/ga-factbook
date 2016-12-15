import React, { Component } from 'react';
import NorthAmericaContainer from './NorthAmericaContainer/NorthAmericaContainer.jsx';
import { Link } from 'react-router';
import AfricaContainer from './AfricaContainer/AfricaContainer.jsx';
// import AntarcticaContainer from './AntarcticaContainer/AntarcticaContainer.jsx';
import EuropeanContainer from './EuropeanContainer/EuropeanContainer.jsx';
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
      // console.log(data);
      this.setState({
       africa: data,
      });
    })
    .catch(err => console.log('Error', err));
  }

  //   getAllAntarcticaCountries() {
  //     fetch(`/api/antarctica`, {
  //       headers: {
  //        'Content-Type': 'application/json',
  //        },
  //        method: 'GET',
  //       })
  //     .then(r => r.json())
  //     .then((data) => {
  //       // console.log(data);
  //       this.setState = ({
  //         antarctica: data,
  //       });
  //     })
  //     .catch(err => console.log('Error', err));
  //   }

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

  render() {
    return (
      <div id="app">
        <h1>Welcome GA Factbook</h1>
        {this.props.children && React.cloneElement(this.props.children, {
          // STATE
             state: this.state,
        })}
        <Link to="northamerica" className="navbar-button">north america</Link>
         <br/>
        <Link to="africa" className="navbar-button">africa</Link>
         <br/>
          <Link to="europe" className="navbar-button">europe</Link>
        </div>
    );
  }
}



