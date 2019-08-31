import React from 'react';
import {Link} from 'react-router-dom';
import './css/Footer.css';

const Footer = (props) => {
  return(
    <footer>
      {props.resolution > 1050 ?
        <ul className="social-media">
          <li>
            <Link to="#" className="social-media-item facebook">
              <i className="fab fa-facebook-f"></i>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
            </Link>
          </li>
          <li>
            <Link to="#" className="social-media-item google-plus">
              <i className="fab fa-google-plus-g"></i>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
            </Link>
          </li>
          <li>
            <Link to="#" className="social-media-item instagram">
              <i className="fab fa-instagram"></i>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
            </Link>
          </li>
          <li>
            <Link to="#" className="social-media-item linkedin">
              <i className="fab fa-linkedin-in"></i>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
            </Link>
          </li>
          <li>
            <Link to="#" className="social-media-item youtube">
              <i className="fab fa-youtube"></i>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
            </Link>
          </li>
        </ul> 
          : <div className="footer-for-small-devices">
              <div className="flexible-element">
                <div className="col-1 col">
                  <h3 className="header-for-small-devices">Dla Kogo</h3>
                    <ul className="menu-for-small-devices">
                      <li className="menu-for-small-devices-element">Organizacje i Uczelnie</li>
                      <li className="menu-for-small-devices-element">Najemcy Poszukujący</li>
                      <li className="menu-for-small-devices-element">Właściciele i Zarządcy</li>
                    </ul>
                </div>
                <div className="col-2 col">
                  <h3 className="header-for-small-devices">Nieurchomości</h3>
                    <ul className="menu-for-small-devices">
                      <li className="menu-for-small-devices-element">Klasy A</li>
                      <li className="menu-for-small-devices-element">Klasy B</li>
                      <li className="menu-for-small-devices-element">Klasy C</li>
                    </ul>
                </div>
                <div className="col-3 col">
                  <h3 className="header-for-small-devices">Pomoc</h3>
                    <ul className="menu-for-small-devices">
                      <li className="menu-for-small-devices-element">Faq</li>
                      <li className="menu-for-small-devices-element">Kontakt</li>
                      <li className="menu-for-small-devices-element">O REDD</li>
                    </ul>
                </div>
              </div>
              <div className="connect-with-us">
                <div className="line-1 line"></div>
                <h3 className="header-connect-with-us">Dołącz <span>do</span> NAS</h3>
                <div className="line-2 line"></div>
                <div className="social-media-for-small-devices">
                  <ul className="social-media-for-small-devices-menu">
                    <li><span className="fab fa-linkedin"></span></li>
                    <li><span className="fab fa-facebook-square"></span></li>
                    <li><span className="fab fa-google-plus-square"></span></li>
                    <li><span className="fab fa-twitter-square"></span></li>
                  </ul>
                </div>
                <div className="line-3 line"></div>
              </div>
            </div>}
    </footer>
  );
}

export default Footer;