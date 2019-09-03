import React from 'react';
import './css/RegistrationForm.css';

class RegisterForm extends React.Component{
  constructor(props){
    super(props)
    this.forename = React.createRef();
    this.surname = React.createRef();
    this.password = React.createRef();
    this.repeatedPassword = React.createRef();
    this.email = React.createRef();
    this.state = {
      isError: false,
      isRegistered: false,
      value: {
        forename: '',
        surname: '',
        password: '',
        repeatedPassword: '',
        email: '',
        country: 'Polska'
      }
    }
  }

  componentDidMount(){
    document.body.classList.add('modal-is-open');
  }

  componentWillUnmount(){
    document.body.classList.remove('modal-is-open');
  }

  handleChangeValue = (event) => {
    const name = event.target.name;
    this.setState({
      value: {...this.state.value, [name]: event.target.value},
    })
  }

  handleFormSubmit = (event) => {
    const {password, repeatedPassword} = this.state.value;
    event.preventDefault();
    if(this.validateForm(this.forename) && 
       this.validateForm(this.surname) &&
       this.validateForm(this.password) && 
       this.validateForm(this.repeatedPassword) &&
       this.validateForm(this.email) &&
       (password === repeatedPassword)){
      if(typeof(Storage) !== 'undefined'){
        localStorage.setItem('account', JSON.stringify(this.state.value));
        this.setState({
          isError: false,
          isRegistered: true,
        })
      } else{
        alert('Twoja przeglądarka nie obsługuje obiektu localStorage!');
      }
    } else {
      this.setState({
        isError: true,
        isRegistered: false,
      })
    }
  }

  validateForm = (data) => {
    const {forename, surname, password, repeatedPassword, email} = this.state.value;
    switch(data.current.name){
      case 'forename':
        const forenameReg = new RegExp("^[a-zA-Z]{3,}$");
        if(forenameReg.test(forename)){
          return true;
        } else{
          return false;
        }
      case 'surname':
        const surnameReg = new RegExp("^[a-zA-Z]{3,}$");
        if(surnameReg.test(surname)){
          return true;
        } else{
          return false;
        }
      case 'password':
        const passwordReg = new RegExp("^(?=[^A-Z]*[A-Z])(?=[^a-z]*[a-z])(?=[^0-9]*[0-9]).{6,}$");
        if(passwordReg.test(password)){
          return true;
        } else{
          return false;
        }
      case 'repeatedPassword':
        const repeatedPasswordReg = new RegExp("^(?=[^A-Z]*[A-Z])(?=[^a-z]*[a-z])(?=[^0-9]*[0-9]).{6,}$");
        if(repeatedPasswordReg.test(repeatedPassword)){
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
      default:
        console.error('wystąpił nieoczekiwany błąd!');
    }
  }

  render(){
    const {forename, surname, password, repeatedPassword, email, country} = this.state.value;
    return(
      <>
        <div className="registration-form">
          <div 
            onClick={this.props.closeForm}
            className="close-registration-form">
          </div>
          <h1 
            className="registration-h1">
            Zarejestruj się już dziś!
          </h1>
          {this.state.isRegistered && <p className="succes-account">twoje konto zostalo utworzene poprawnie!</p> }
          <form onSubmit={this.handleFormSubmit}>
            <div className="row">
              <label>
                <input 
                  type="text"
                  value={forename}
                  ref={this.forename}  
                  onChange={this.handleChangeValue} 
                  placeholder="podaj swoje imię" 
                  name="forename">
                </input>
              </label>
              <label>
                <input 
                  type="text"
                  value={surname} 
                  ref={this.surname}  
                  onChange={this.handleChangeValue} 
                  placeholder="podaj swoje nazwisko" 
                  name="surname">
                </input>
              </label>
            </div>
            <div className="row">
              <label>
                <input 
                  type="password"  
                  value={password}
                  ref={this.password}  
                  onChange={this.handleChangeValue} 
                  placeholder="podaj hasło" 
                  name="password">
                </input>
                <span 
                  className="fas fa-info" 
                  data-info-password="hasło musi zawierać minimum 8 znaków, jedną dużą, jedną mała litere oraz cyfrę.">
                </span>
              </label>
            </div>
            <div className="row">
              <label>
                <input 
                  type="password"
                  value={repeatedPassword}
                  ref={this.repeatedPassword}  
                  onChange={this.handleChangeValue} 
                  placeholder="powtórz hasło" 
                  name="repeatedPassword">
                </input>
              </label>
            </div>
            <div className="row">
              <label>
                <input 
                  type="email"
                  value={email}
                  ref={this.email}  
                  onChange={this.handleChangeValue} 
                  placeholder="podaj swój adres e-mail" 
                  name="email">
                </input>
              </label>
            </div>
            <div className="row">
              <label>
                <select 
                  value={country} 
                  onChange={this.handleChangeValue} 
                  name="country">
                  <option>Polska</option>
                  <option>United States</option>
                  <option>Germany</option>
                  <option>France</option>
                </select>
              </label>
            </div>
            {this.state.isError && <p className="error-messsage">formularz nie został wysłany z powodu błedów!</p>}
            <button 
              className="send-registration-form" 
              type="submit">
              Zarejestruj się
            </button>
          </form>
        </div>
      </>
    )
  }
}

export default RegisterForm;