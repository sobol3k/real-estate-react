import React from 'react';
import BuildingsList from '../management/BuildingsList';
import LoginForm from '../login-form/LoginForm';

const Management = (props) => {
  return(
    <>
      {props.isLogged === false ? <LoginForm handleLogin={props.handleLogin} /> : 
      <BuildingsList handleLogin={props.handleLogin} />}     
    </>
  );
}

export default Management;