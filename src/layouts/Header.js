import React, {useEffect, useState} from 'react';
import './css/Header.css';

const Header = () => {
  const headerElement = React.createRef();
  const [logo, setHeaderLogo] = useState(0);
  const changeHeaderLogo = () => {
    if(logo === 3){
      setHeaderLogo(logo - logo);
    } else{
      setHeaderLogo(logo + 1);
    }
  }
  useEffect(() => {
    setTimeout(changeHeaderLogo, 4000);
  })
  return(
    <header ref={headerElement}
      style={{
        backgroundImage: `url("/other-images/logos/${logo}.jpg")`
      }}
    >
     <h1 className="main-header">
       Commercial Real Estate Database
     </h1>
     <p className="main-header-paragraph">
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