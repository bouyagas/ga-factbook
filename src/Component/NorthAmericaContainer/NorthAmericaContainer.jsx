import React from 'react';
import NorthAmericaTemplate from './NorthAmericaTemplate/NorthAmericaTemplate.jsx';
import './NorthAmericaContainer.css';


const NorthAmericaContainer = (props) => {
  const countries = props.state.northamerica.map((country, i) => {
    return (
      <NorthAmericaTemplate
        intro={country.Introduction.Background.text}
        location={country.A}
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

export default NorthAmericaContainer;

