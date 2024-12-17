import React from 'react';

function Sidebar({ onNavChange }) {
  return (
    <aside className="sidebar">
      <h3>Menu</h3>
      <nav className="sidebar-nav">
        <a href="#employees" onClick={() => onNavChange('employees')}>Liste des Employés</a>
        <a href="#trucks" onClick={() => onNavChange('trucks')}>Liste des Camions</a>
        <a href="#deliveries" onClick={() => onNavChange('deliveries')}>Livraisons en Cours</a>
      </nav>
    </aside>
  );
}

export default Sidebar;
