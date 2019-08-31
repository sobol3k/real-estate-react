import React from 'react';
import './css/RealEstateAgents.css';

const RealEstateAgents = (props) => {
  return(
    <div className="container-real-estate-agents">
      <div className="real-estate-agents-picture">
        <img 
          src="/other-images/real-estate-brokers.png" 
          alt="agenci nieruchomości">
        </img>
      </div>
      <div className="real-estate-agents-information">
        <h2 className="real-estate-agents-header">
          Agenci Nieruchomośći
        </h2>
        <p className="real-estate-agents-describe">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
          Nunc lectus felis, convallis quis vehicula vel, rhoncus vitae enim. 
          Donec lobortis vitae nunc in fermentum. 
          Fusce tempus felis eu risus aliquet sodales. 
          Cras sapien turpis, congue vitae lacus vitae, accumsan lobortis risus. 
          Integer nunc ante, congue quis ante et, iaculis tempor tellus. 
          Praesent commodo tempor convallis. 
          Curabitur tristique leo vehicula suscipit ullamcorper. 
          Proin ac urna id tellus rhoncus finibus sed sit amet quam.
        </p>
        <ul className="real-estate-agents-menu">
          <li>Proin nec leo et metus facilisis sollicitudin at sit amet enim.</li>
          <li>Pellentesque scelerisque tortor et dolor aliquam lobortis</li>
          <li>Ut ut lectus faucibus, tristique magna eget, suscipit nisl.</li>
          <li>Nam commodo lectus at dictum suscipit.</li>
          <li>Morbi eget turpis mollis, egestas nisl sit amet, molestie sapien.</li>
        </ul>
        <button
          onClick={props.handleForm} 
          type="button" 
          className="btn-create-new-account">
          Załóż konto!
        </button>
      </div>
    </div>
  );
}

export default RealEstateAgents;