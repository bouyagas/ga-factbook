import React from 'react';
import MiddleEastTemplate from './MiddleEastTemplate/MiddleEastTemplate.jsx';
import './MiddleEastContainer.css';

const MiddleEastContainer = (props) => {
    const countries = props.state.middleEast.map((country, i) => {
      return (
        <MiddleEastTemplate
          intro={country.Introduction.Background.text}
          location={country.Geography.Location.text}
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

export default MiddleEastContainer;
