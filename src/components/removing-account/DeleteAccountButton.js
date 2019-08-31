import React from 'react';
import './css/DeleteAccountButton.css';

const DeleteAccountButton = (props) => {
  return(
    <button
      disabled={props.isVisibleMenu && true}
      onClick = {props.handleDeleteAccountModal}
      className="delete-account-button"> 
      Usuń konto!
    </button>
  );
}

export default DeleteAccountButton;