import React from 'react';

const LogOut = (props) => {
  return(
    <button
      onClick={props.handleLogin}
      type="button" 
      className="logout-button">
      Wyloguj się
    </button>
  );
}

export default LogOut;