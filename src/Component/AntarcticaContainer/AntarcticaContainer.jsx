import React, { Component } from 'react';
import AntarcticaTemplate from './AntarcticaTemplate/AntarcticaTemplate.jsx';
import './AntarcticaContainer.css';

export default class AntarcticaContainer extends Component {
	renderAllAntarcticaCountries(){
		return this.props.antarctica.map((country, i) =>
			<AntarcticaTemplate
             intro={country.Introduction.Background.text}
             area={country.Area.total.text}
             key={i}
			/>
		)
	}
	componentWillMount(){
		this.props. getAllAntarcticaCountries();
	}

	render(){
		return (
         <div>
         	{this.renderAllAntarcticaCountries()}
         </div>
		);
	}
}
