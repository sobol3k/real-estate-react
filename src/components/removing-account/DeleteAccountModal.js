import React from 'react';
import './css/DeleteAccountModal.css';

const DeleteAccountModal = (props) => {
  const deleteYourAccount = () => {
    const account = JSON.parse(localStorage.getItem('account'));
    if(window.confirm(`Czy aby na pewno chcesz usunąć konto ${account.forename} ${account.surname}?`)){
      localStorage.removeItem('account');
      return props.closeModal();
    }
  }
  
  return(
    <div className="delete-account-modal">
      <h2 className="delete-account-modal-header">
        Czy jesteś pewien że chcesz usunąć konto?
      </h2>
      <hr />
      <p className="warning-message">
        Czy jesteś pewień że chciałbyś usunąć swoje konto?
        Po naciśnieciu przycisku <strong>usuń konto</strong>, zmiany te będą nieodwracalne oraz
        będziesz zmuszony zarejestrować swoje konto na nowo.
      </p>
      <div className="row-with-buttons">
        <button
          disabled={localStorage.getItem('account') === null ? true : false } 
          type="button" 
          className="delete-account-btn"
          onClick={deleteYourAccount}>
          Usuń konto
        </button>
        <button 
          type="button" 
          className="save-account-btn" 
          onClick={props.closeModal}>
          Zachowaj
        </button>
      </div>
    </div>
  );
}

export default DeleteAccountModal;