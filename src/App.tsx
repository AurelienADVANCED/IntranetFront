import React, { useState } from 'react';
import './App.css';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import EmployeesPage from './components/EmployeesPage';
import TrucksPage from './components/TrucksPage';
import DeliveriesPage from './components/DeliveriesPage';

function App() {
  // Navigation simple gérée via un state
  const [currentPage, setCurrentPage] = useState('employees');

  const renderContent = () => {
    switch (currentPage) {
      case 'employees':
        return <EmployeesPage />;
      case 'trucks':
        return <TrucksPage />;
      case 'deliveries':
        return <DeliveriesPage />;
      default:
        return <EmployeesPage />;
    }
  };

  return (
    <div className="intranet-container">
      {/* Header avec le logo et un titre */}
      <Header />

      {/* Layout principal : sidebar + contenu */}
      <div className="main-layout">
        <Sidebar onPageChange={setCurrentPage} currentPage={currentPage} />
        <main className="main-content">
          {renderContent()}
        </main>
      </div>
    </div>
  );
}

export default App;
