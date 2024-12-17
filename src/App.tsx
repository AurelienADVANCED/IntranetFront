import { useState } from 'react';
import './App.css';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import EmployeesPage from './components/EmployeesPage';
import TrucksPage from './components/TrucksPage';
import DeliveriesPage from './components/DeliveriesPage';

function App() {
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
      <Header onNavChange={setCurrentPage} />
      <div className="content-layout">
        <Sidebar onNavChange={setCurrentPage} />
        <main className="main-content">
          {renderContent()}
        </main>
      </div>
    </div>
  );
}

export default App;
