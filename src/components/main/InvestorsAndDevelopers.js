import React from 'react';
import './css/InvestorsAndDevelopers.css';

const InvestorsAndDevelopers = () => {
  return(
    <div className="container-investors-developers">
      <div className="top-element"></div>
      <div className="main-part">
        <div className="picture">
          <img 
            src="other-images/investors-and-developers.png" 
            alt="inwestycja biurowa">
          </img>
        </div>
        <div className="describe-for-investors-developers">
          <h2 className="header-investors-developers">
            Inwestorzy i Deweloperzy
          </h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
            Sed consequat lorem in sapien tristique, eget malesuada mauris imperdiet. 
            Nunc semper sollicitudin turpis, quis porttitor purus feugiat vel. 
            Pellentesque tincidunt condimentum risus eu suscipit. 
            Quisque in arcu ut ante dapibus gravida a ut arcu. 
            Curabitur ipsum massa, feugiat vehicula est et, cursus vulputate sapien. 
            Cras venenatis, tellus eget tempus consectetur, diam est pretium ipsum, vitae malesuada diam elit et odio. 
            Nam pulvinar nisl arcu, hendrerit lacinia justo dictum at. Sed facilisis pretium dui, eget ultricies turpis molestie non. 
            Integer felis augue, blandit ornare dui ac, fringilla blandit erat. Aliquam gravida augue id velit dignissim, eget tempor leo pellentesque.
          </p>
          <ul>
            <li>Investors</li>
            <li>Developers</li>
            <li>Organizations</li>
          </ul>
        </div>
      </div>
      <div className="bottom-element"></div>
    </div>
  );
}

export default InvestorsAndDevelopers;