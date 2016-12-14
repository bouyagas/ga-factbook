import React, { Component } from 'react';
import northAmericaTemplate from './NorthAmericaTemplate/NorthAmericaTemplate.jsx';
import './NorthAmericaContainer.css';


export default class NorthAmericaContainer extends Component {
  renderAllCountries() {
      return this.props.northamerica.map((country, i) =>
      <NorthAmericaTemplate
        intro={country.Introduction.Background.text}
        name={country.Government.Capital.name.text}
        key={i}
       />
    )
  }
  componentWillMount(){
    this.props.getAllNorthAmericaCountries();
  }
  render(){
    return(
      <div>
        {this.renderAllCountries()}
      </div>
    );
  }
}
