import React from 'react';
import './css/Error.css';

const Error = () => {
  return(
    <div className="error">
      <h1 className="header-error">
        Error # 404
      </h1>
      <p className="paragraph-error">
        Upsss, chyba nie tędy droga! Podana strona nie istnieje.
      </p>
    </div>
  );
}

export default Error;