import React, { Component } from 'react';
import './css/Contact.css';

class Contact extends Component{
  state = {
    isSended: false,
    isError: false,
    value: {
      name: '',
      email: '',
      phoneNumber: '',
      message: '',
    }
  }

  /* references to elements of contact form*/
  nameInput = React.createRef();
  emailInput = React.createRef();
  phoneNumberInput = React.createRef();
  messageTextArea = React.createRef();

  handleInputChange = (event) => {
    const name = event.target.name;
    this.setState({
      value: {...this.state.value, [name]: event.target.value}
    })
  }

  handleFormSubmit = (e) => {
    e.preventDefault();
    if(this.validateForm(this.nameInput) && 
       this.validateForm(this.emailInput) &&
       this.validateForm(this.phoneNumberInput) && 
       this.validateForm(this.messageTextArea)){
      this.setState({
        isError: false,
        isSended: true,
      })
    } else{
      this.setState({
        isError: true,
        isSended: false,
      })
    }
  }

  validateForm = (fieldForm) => {
    const {name, email, phoneNumber, message} = this.state.value;
    switch(fieldForm.current.name){
      case 'name':
        const nameReg = new RegExp("^[a-zA-Z]{3,}$");
        if(nameReg.test(name)){
          return true;
        } else{
          return false;
        }
      case 'email':
        const emailReg = new RegExp("^[0-9a-zA-Z_.-]+@[0-9a-zA-Z.-{2,}]+\.[a-zA-Z]{2,3}$");
        if(emailReg.test(email)){
          return true;
        } else{
          return false;
        }
      case 'phoneNumber':
        const phoneNumberReg = new RegExp("[0-9]{9}");
        if(phoneNumberReg.test(phoneNumber)){
          return true;
        } else{
          return false;
        }
      case 'message':
        if(message.length >= 10){
          return true;
        } else{
          return false;
        }
      default:
        console.error('wystąpił nieoczekiwany błąd!');
    }
  }

  render(){
    const {name, email, phoneNumber, message} = this.state.value;
    const {isError, isSended} = this.state;
    return(
      <div className="contact-container">
        <h2 className="contact-header">Kontakt</h2>
        <p className="contact-paragraph">skontaktuj się z nami już dziś</p>
        <form onSubmit={this.handleFormSubmit} className="contact-form">
          {isSended && <p className="contact-display-succes">formularz zostal poprawnie wysłany</p>}
          <div className="contact-row">
            <input 
              ref={this.nameInput}
              type="text"
              onChange={this.handleInputChange}
              value={name} 
              name="name" 
              placeholder="Imię">
            </input>
          </div>
          <div className="contact-row-email">
            <input
              ref={this.emailInput} 
              type="email"
              onChange={this.handleInputChange} 
              value={email}
              name="email" 
              placeholder="Adres e-mail">
            </input>
          </div>
          <div className="contact-row-phone-number">
            <input 
              ref={this.phoneNumberInput}
              type="text"
              onChange={this.handleInputChange} 
              value={phoneNumber}
              name="phoneNumber" 
              placeholder="Numer kontaktowy">
            </input>
          </div>
          <div className="contact-row">
            <textarea
              ref={this.messageTextArea}
              onChange={this.handleInputChange} 
              value={message} 
              name="message"
              placeholder="Wiadomość">
            </textarea>
          </div>
          <button 
            type="submit" 
            className="contact-send-button">
            Wyślij wiadomość
          </button>
          {isError && <p className="contact-display-error">formularz nie został wysłany z powodu błędów!</p>}
        </form>
      </div>
    );
  }
}

export default Contact;