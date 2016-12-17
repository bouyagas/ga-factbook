import React, { Component } from 'react';
import AntarcticaTemplate from './AntarcticaTemplate/AntarcticaTemplate.jsx';
import './AntarcticaContainer.css';

const  AntarcticaContainer = (props) => {
  const countries = props.state.antarctica.map((country, i) => {
  return (
	 <AntarcticaTemplate
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

export default AntarcticaContainer;
