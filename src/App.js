import React from 'react';
import {BrowserRouter as Router} from 'react-router-dom';
import Header from './layouts/Header';
import Nav from './layouts/Nav';
import Section from './layouts/Section';
import Footer from './layouts/Footer';
import RegistrationForm from './components/registration-account/RegistrationForm';
import DeleteAccountModal from './components/removing-account/DeleteAccountModal';
import './css/App.css';

class App extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      isLogged: false,
      isOpenedForm: false, 
      isVisibleMenu: false, 
      isOpenedDeleteAccountModal: false,  
    }
  }

  handleLoginClick = () => {
    this.setState({
      isLogged: !this.state.isLogged,
    })
  }

  handleFormClick = () => {
    this.setState({
      isOpenedForm: !this.state.isOpenedForm,
    })
  }

  handleMenuClick = () => {
    document.body.classList.toggle('modal-is-open');
    this.setState({
      isVisibleMenu: !this.state.isVisibleMenu,
    })
  }

  handleDeleteAccountModalClick = () => {
    document.body.classList.toggle('modal-is-open');
    this.setState({
      isOpenedDeleteAccountModal: !this.state.isOpenedDeleteAccountModal,
    })
  }
  
  render(){
    const {isLogged, isOpenedForm, isVisibleMenu, isOpenedDeleteAccountModal} = this.state;
    return(
      <>
        <Router>
          <>
            <Header />
            <Nav
              isVisibleMenu={isVisibleMenu}
              isOpenedForm={isOpenedForm}
              isOpenedDeleteAccountModal={isOpenedDeleteAccountModal}
              showForm={this.handleFormClick}
              handleLoginClick={this.handleLoginClick} 
              handleMenu={this.handleMenuClick}
              handleDeleteAccountModal={this.handleDeleteAccountModalClick}
            />
            <Section 
              handleForm={this.handleFormClick} 
              handleLogin={this.handleLoginClick} 
              isLogged={isLogged} 
            />
            <Footer/>
          </>
        </Router>
        {isOpenedForm && <RegistrationForm closeForm={this.handleFormClick} />}
        {isOpenedDeleteAccountModal && <DeleteAccountModal closeModal={this.handleDeleteAccountModalClick} />}
      </>
    );
  }
}

export default App;