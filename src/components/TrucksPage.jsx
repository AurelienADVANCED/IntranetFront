import React, { useState, useEffect } from 'react';

function TrucksPage() {
  const [trucks, setTrucks] = useState([]);

  useEffect(() => {
    fetch('https://your-api.execute-api.region.amazonaws.com/prod/trucks')
      .then(response => {
        if (!response.ok) {
          throw new Error('Erreur réseau');
        }
        return response.json();
      })
      .then(data => {
        setTrucks(data);
      })
      .catch(error => {
        console.error('Erreur en récupérant les camions:', error);
      });
  }, []);

  return (
    <div>
      <h2>Liste des Camions</h2>
      <table className="data-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Modèle</th>
            <th>Immatriculation</th>
            <th>Disponibilité</th>
          </tr>
        </thead>
        <tbody>
          {trucks.map(truck => (
            <tr key={truck.id}>
              <td>{truck.id}</td>
              <td>{truck.model}</td>
              <td>{truck.licensePlate}</td>
              <td>{truck.available ? 'Oui' : 'Non'}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default TrucksPage;
