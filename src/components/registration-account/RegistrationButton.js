import React from 'react';
import './css/RegistrationButton.css';

const RegistrationButton = (props) => {
  return(
    <button
      disabled={props.isVisibleMenu && true} 
      onClick={props.showForm}
      className="register-button"> 
      Zarejestruj się!
    </button>
  );
}

export default RegistrationButton;