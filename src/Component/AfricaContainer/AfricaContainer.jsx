import React from 'react';
import AfricaTemplate from './AfricaTemplate/AfricaTemplate.jsx';
import './AfricaContainer.css';


 const AfricaContainer = (props) => {
    const countries = props.state.africa.map((country, i) => {
      return (
        <AfricaTemplate
          intro={country.Geography.Location.text}
          key={i}
         />
      );
     });

    return (
     	<div >
     	  {countries}
     	</div>

   );

 };

export default AfricaContainer;


