import React from 'react';
import SouthAmericaTemplate from './SouthAmericaTemplate/southAmericaTemplate.jsx';
import './SouthAmericaContainer.css';


const SouthAmericaContainer = (props) => {
  const countries = props.state.southAmerica.map((country, i) => {
    return (
      <SouthAmericaTemplate
        intro={country.Introduction.Background.text}
        key={i}
      />
    );
  });

  return (
    <div id="countries-container">
      <h2>Introduction</h2>
      {countries}
    </div>
  );
};

export default SouthAmericaContainer;
