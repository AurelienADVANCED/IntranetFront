import React, { useEffect, useState } from 'react';

function EmployeesPage() {
  const [employees, setEmployees] = useState([]);

  // Remplace cette URL par celle de ton API Gateway (ex : https://x35h5as2mc.execute-api.eu-central-1.amazonaws.com/prod/employes)
  const API_URL = 'https://x35h5as2mc.execute-api.eu-central-1.amazonaws.com/prod/employes';

  useEffect(() => {
    fetch(API_URL)
      .then((res) => {
        if (!res.ok) {
          throw new Error('Erreur lors de la récupération des employés');
        }
        return res.json();
      })
      .then((data) => setEmployees(data))
      .catch((err) => {
        console.error(err);
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
          {employees.map((emp) => (
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
