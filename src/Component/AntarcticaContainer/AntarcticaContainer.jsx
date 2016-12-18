import React from 'react';
import AntarcticaTemplate from './AntarcticaTemplate/AntarcticaTemplate.jsx';
import './AntarcticaContainer.css';

const AntarcticaContainer = (props) => {
    const countries = props.state.antarctica.map((country, i) => {
      return (
        <AntarcticaTemplate
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

export default AntarcticaContainer;




