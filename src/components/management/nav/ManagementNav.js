import React from 'react';
import LogOut from './LogOut';
import Time from './Time';
import './css/ManagementNav.css';

const ManagementNav = (props) => {
  return(
    <div className="management-nav">
      <Time />
      <LogOut handleLogin={props.handleLogin} />
    </div>
  );
}

export default ManagementNav;