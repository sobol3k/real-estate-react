import React, {useEffect, useState} from 'react';
import $ from 'jquery';
import DeleteAccountButton from '../components/removing-account/DeleteAccountButton';
import RegistrationButton from '../components/registration-account/RegistrationButton';
import HandleMenuButton from '../components/main-nav-elements/HandleMenuButton';
import Menu from '../components/main-nav-elements/Menu';
import ManageButton from '../components/main-nav-elements/ManageButton';
import './css/Nav.css';

const Nav = (props) => {
  const [positionScrollY, setPositionScrollY] = useState(0);
  useEffect(() => {
    $(document).ready(() => {
      $(window).scroll(() => {
        setPositionScrollY(window.scrollY);
      })
    })
  })
  return(
      <nav style={{ background: positionScrollY >= 100 ? '#444444' : 'transparent' }}>
        {localStorage.getItem('account') === null ?
          <RegistrationButton 
            showForm={props.showForm} 
            isVisibleMenu={props.isVisibleMenu}
          /> :
          <DeleteAccountButton 
            isVisibleMenu={props.isVisibleMenu}
            handleDeleteAccountModal={props.handleDeleteAccountModal}
          />}
        {(!props.isVisibleMenu && !props.isOpenedForm && !props.isOpenedDeleteAccountModal) && <ManageButton />}
        {props.isVisibleMenu && <Menu handleMenu={props.handleMenu} />}
        {(!props.isOpened && !props.isOpenedDeleteAccountModal) &&
          <HandleMenuButton 
            handleMenu={props.handleMenu} 
            isVisibleMenu={props.isVisibleMenu}
          />}
      </nav>
  );
}

export default Nav;