import React from 'react';
import {Link} from 'react-router-dom';
import './css/ManageButton.css';

const ManageButton = () => {
  return(
    <Link to="/management" className="manage-button">Zarządzaj</Link>
  );
}

export default ManageButton;