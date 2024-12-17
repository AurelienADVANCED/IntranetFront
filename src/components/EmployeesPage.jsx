import React, { useState, useEffect } from 'react';

function EmployeesPage() {
  const [employees, setEmployees] = useState([]);

  useEffect(() => {
    fetch('https://your-api.execute-api.region.amazonaws.com/prod/employees')
      .then(response => {
        if (!response.ok) {
          throw new Error('Erreur réseau');
        }
        return response.json();
      })
      .then(data => {
        setEmployees(data);
      })
      .catch(error => {
        console.error('Erreur en récupérant les employés:', error);
      });
  }, []);

  return (
    <div>
      <h2>Liste des Employés</h2>
      <table className="data-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Nom</th>
            <th>Poste</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
          {employees.map(emp => (
            <tr key={emp.id}>
              <td>{emp.id}</td>
              <td>{emp.name}</td>
              <td>{emp.position}</td>
              <td>{emp.email}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default EmployeesPage;
