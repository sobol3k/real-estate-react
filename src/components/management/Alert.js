import React from 'react';
import './css/Alert.css';

const Alert = () => {
  return(
    <div className="container">
      <div className="picture">
        <img 
          src="other-images/return-icon.png"
          alt="Powrót">
        </img>
      </div>
      <h1 className="information">
        Twoje okno przeglądrki jest zbyt zbyt małe by przebywać na tej podstronie!
      </h1>
    </div>
  );
}

export default Alert;
