import React from 'react';
import AustriliaAndOceaniaTemplate from './AustriliaAndOceaniaTemplate/AustriliaAndOceaniaTemplate.jsx';


const AustriliaAndOceaniaContainer = (props) => {
	const countries = props.state.australiaOceania.map((country, i) => {
       return (
       	 <AustriliaAndOceaniaTemplate
          intro={country.Introduction.Background.text}
          key={i}
       	 />
       	);
	});

	return (
		<div>
		  {countries}
		</div>
	);
};


export default  AustriliaAndOceaniaContainer;
