import React from 'react';

function Header({ onNavChange }) {
  return (
    <header className="header">
      <div className="header-left">
        <img src="/src/assets/logo-clear.png" alt="Logo" className="header-logo" />
        <h1 className="header-title">Intranet DUBETON</h1>
      </div>
      <nav className="header-nav">
        <a href="#employees" onClick={() => onNavChange('employees')}>Employés</a>
        <a href="#trucks" onClick={() => onNavChange('trucks')}>Camions</a>
        <a href="#deliveries" onClick={() => onNavChange('deliveries')}>Livraisons</a>
      </nav>
    </header>
  );
}

export default Header;
