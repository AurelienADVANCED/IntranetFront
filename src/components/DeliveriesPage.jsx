import React, { useState, useEffect } from 'react';

function DeliveriesPage() {
  const [deliveries, setDeliveries] = useState([]);

  useEffect(() => {
    fetch('https://your-api.execute-api.region.amazonaws.com/prod/deliveries')
      .then(response => {
        if (!response.ok) {
          throw new Error('Erreur réseau');
        }
        return response.json();
      })
      .then(data => {
        setDeliveries(data);
      })
      .catch(error => {
        console.error('Erreur en récupérant les livraisons:', error);
      });
  }, []);

  return (
    <div>
      <h2>Livraisons en Cours</h2>
      <table className="data-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Client</th>
            <th>Adresse</th>
            <th>Date de Livraison</th>
            <th>Statut</th>
          </tr>
        </thead>
        <tbody>
          {deliveries.map(del => (
            <tr key={del.id}>
              <td>{del.id}</td>
              <td>{del.customerName}</td>
              <td>{del.address}</td>
              <td>{del.deliveryDate}</td>
              <td>{del.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default DeliveriesPage;
