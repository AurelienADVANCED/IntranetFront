import React from 'react';

function Sidebar({ onPageChange, currentPage }) {
  return (
    <aside className="sidebar">
      <h3>Menu</h3>
      <nav>
        <a
          href="#employees"
          onClick={() => onPageChange('employees')}
          className={currentPage === 'employees' ? 'active' : ''}
        >
          Employés
        </a>
        <a
          href="#trucks"
          onClick={() => onPageChange('trucks')}
          className={currentPage === 'trucks' ? 'active' : ''}
        >
          Camions
        </a>
        <a
          href="#deliveries"
          onClick={() => onPageChange('deliveries')}
          className={currentPage === 'deliveries' ? 'active' : ''}
        >
          Livraisons
        </a>
      </nav>
    </aside>
  );
}

export default Sidebar;
