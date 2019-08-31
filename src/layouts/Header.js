import React, {useEffect, useState} from 'react';
import './css/Header.css';

const Header = () => {
  const headerElement = React.createRef();
  const [logo, setHeaderLogo] = useState(0);
  useEffect(() => {
    setTimeout(() => {
      if(logo === 3){
        setHeaderLogo(logo - logo);
      } else{
        setHeaderLogo(logo + 1);
      } 
    }, 10000)
  })
  return(
    <header 
      ref={headerElement} 
      style={{
        backgroundImage: `url("/other-images/logos/${logo}.jpg")`
      }}
    >
     <h1 className="main-header">
       Real Estate Digital Data
     </h1>
     <p className="main-paragraph">
       Źródło danych dla
       <span className="awarded-word">
         &nbsp;
         profesjonalistów
         &nbsp;
       </span>
       z branży nieruchomości komercyjnych
     </p>
    </header>
  );
}

export default Header;