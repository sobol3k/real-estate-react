import React from 'react';
import './css/LoginForm.css';

class LoginForm extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      login: '',
      password: '',
    }
  }

  handleValueChange = (event) => {
    const name = event.target.name;
    this.setState({
      [name]: event.target.value,
    })
  }

  handleFormSubmit = (event) => {
    event.preventDefault();
    const {login, password} = this.state;
    const account = JSON.parse(localStorage.getItem('account'));
    if(localStorage.getItem('account') !== null){
      const email = account.email;
      const pass = account.password;
      if(login === email && password === pass){
        return this.props.handleLogin();
      } else{
        alert('Niepoprawne dane logowanie, spróbuj ponownie!');
      }
    } else{
      alert('Nie posiadasz założonego konta w systemie, aby utworzyć nowe konto kliknij w przycisk zarejestruj się!');
    } 
  }

  render(){
    const {login, password} = this.state;
    return(
      <div className="login-form">
        <h2 className="login-form-header">Zaloguj się</h2>
        <p className="login-form-paragraph">aby przejść do zarządzania budynkami</p>
        <form onSubmit={this.handleFormSubmit}>
          <div className="login-form-row">
            <span className="login-form-icon">
              <span className="fas fa-user-shield"></span>
            </span>
            <input 
              type="text" 
              onChange={this.handleValueChange} 
              value={login} 
              name="login" 
              className="login-input"
              placeholder="podaj adres e-mail">
            </input>
          </div>
          <div className="login-form-row">
            <span className="login-form-icon">
              <span className="fas fa-key"></span>
            </span>
            <input 
              type="password" 
              onChange={this.handleValueChange} 
              value={password} 
              name="password" 
              className="password-input"
              placeholder="podaj swoje hasło">
            </input>
          </div>
          <div className="login-form-row">
            <button 
              type="submit" 
              className="login-form-button">
              Zaloguj
            </button>
          </div>
        </form>
      </div>
    );
  }
}

export default LoginForm;