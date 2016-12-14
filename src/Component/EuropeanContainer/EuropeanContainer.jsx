import React, { Component } from  'react';
import './EuropeanTemplate/EuropeanTemplate.jsx';
import './EuropeanContainer.css';


export default class EuropeanContainer extends Component {
	renderAllEuropeanCountries() {
     return this.props.europe.map((country, i) =>
        <EuropeanTemplate
           intro={country.Introduction.Background.text}
           name={country.Government.Countryname.conventionalshortform.text}
           key={i}
        />
      );
	}

	componentWillMount(){
		this.props.getAllEuropeanCountries();
	}

	render(){
		return(
			<div>
				{this.renderAllEuropeanCountries()}
			</div>
		)
	}
}
