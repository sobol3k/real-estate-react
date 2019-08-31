import React from 'react';
import './css/HandleMenu.css';

const HandleMenuButton = (props) => {
  return(
    <div className={props.isVisibleMenu ? 'close-menu' : 'open-menu'} onClick={props.handleMenu}>
      <span></span>
      <span></span>
      <span></span>
    </div>
  );
}

export default HandleMenuButton;