import React, { Component } from 'react';
import AfricaTemplate from './AfricaTemplate/AfricaTemplate.jsx';
import './AfricaContainer.css';

export default class AfricaContainer extends Component {
  renderAllAfricanCountries() {
    return this.props.africa.map((country, i) =>
    <AfricaTemplate
      intro={country.Introduction.Background.text}
      name={country.GovernmentType.Capital.text}
      key={i}
      />
    );
   }

  componentWillMount() {
      this.props.getAllAfricaCountries();
  }

    render(){
     return (
     	<div>
     	 {this.renderAllAfricanCountries()}
     	</div>
     );
    }
 }

