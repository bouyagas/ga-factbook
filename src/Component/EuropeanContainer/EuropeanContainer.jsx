import React from 'react';
import EuropeanTemplate from './EuropeanTemplate/EuropeanTemplate.jsx';
import './EuropeanContainer.css';


const EuropeanContainer = (props) => {
    const countries = props.state.africa.map((country, i) => {
      return (
        <EuropeanTemplate
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

export default EuropeanContainer;
