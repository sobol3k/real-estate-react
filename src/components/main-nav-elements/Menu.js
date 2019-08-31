import React, {useEffect} from 'react';
import {Link} from 'react-router-dom';
import $ from 'jquery';
import '../../layouts/css/Nav.css';

const Menu = (props) => {
  useEffect(() => {
    $(document).ready(() => {
      $('.nav-main > .menu-form-whom').on('mouseover', function(){
        $('.submenu-for-whom').fadeIn(800);
      })
    })
  })
  
  return(
    <ul className="nav-main"> 
      <li onClick={props.handleMenu}>
        <Link to="/" exact>Home</Link>
      </li>
      <li className="menu-form-whom">
        <ul className="submenu-for-whom">
          <li 
            className="submenu-for-whom-item" 
            onClick={props.handleMenu}>
            <Link to="/for-real-estate-agents">Agenci Nieruchomości</Link>
          </li>
          <li 
            className="submenu-for-whom-item" 
            onClick={props.handleMenu}>
            <Link to="/for-investors-and-developers">Inwestorzy i Deweloperzy</Link>
          </li>
          <li 
            className="submenu-for-whom-item" 
            onClick={props.handleMenu}>
            <Link to="/for-organizations-and-colleges">Organizacje i Uczelnie</Link>
          </li>
        </ul>
        <Link to="#">Dla kogo</Link>
        <span className="bottom-arrow bottom-arrow-form-whom"></span>
      </li>
      <li onClick={props.handleMenu}>
        <Link to="/about-page">O stronie</Link>
      </li>
      <li onClick={props.handleMenu}>
        <Link to="/contact">Kontakt</Link>
      </li>
    </ul>
  );
}

export default Menu;