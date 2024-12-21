import React, { useEffect, useState } from 'react';

function TrucksPage() {
  const [trucks, setTrucks] = useState([]);

  // Remplace par l'URL de ton endpoint pour récupérer la liste des camions
  const API_URL = 'https://x35h5as2mc.execute-api.eu-central-1.amazonaws.com/prod/trucks';

  useEffect(() => {
    fetch(API_URL)
      .then((res) => {
        if (!res.ok) {
          throw new Error('Erreur lors de la récupération des camions');
        }
        return res.json();
      })
      .then((data) => setTrucks(data))
      .catch((err) => {
        console.error(err);
      });
  }, []);

  return (
    <div>
      <h2>Liste des Camions</h2>
      <table className="data-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Immatriculation</th>
            <th>Type</th>
            <th>Disponibilité</th>
          </tr>
        </thead>
        <tbody>
          {trucks.map((truck) => (
            <tr key={truck.id}>
              <td>{truck.id}</td>
              <td>{truck.plateNumber}</td>
              <td>{truck.type}</td>
              <td>{truck.isAvailable ? 'Oui' : 'Non'}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default TrucksPage;
