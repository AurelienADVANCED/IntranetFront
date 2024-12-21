import React, { useEffect, useState } from 'react';

function DeliveriesPage() {
  const [deliveries, setDeliveries] = useState([]);

  // Remplace par l'URL pour récupérer la liste des livraisons
  const API_URL = 'https://x35h5as2mc.execute-api.eu-central-1.amazonaws.com/prod/deliveries';

  useEffect(() => {
    fetch(API_URL)
      .then((res) => {
        if (!res.ok) {
          throw new Error('Erreur lors de la récupération des livraisons');
        }
        return res.json();
      })
      .then((data) => setDeliveries(data))
      .catch((err) => {
        console.error(err);
      });
  }, []);

  return (
    <div>
      <h2>Livraisons en Cours</h2>
      <table className="data-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Date de Commande</th>
            <th>Date de Livraison</th>
            <th>Status</th>
            <th>Quantité</th>
            <th>Camion</th>
          </tr>
        </thead>
        <tbody>
          {deliveries.map((delivery) => (
            <tr key={delivery.id}>
              <td>{delivery.id}</td>
              <td>{delivery.orderDate}</td>
              <td>{delivery.deliveryDate}</td>
              <td>{delivery.status}</td>
              <td>{delivery.quantity}</td>
              <td>{delivery.truckId}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default DeliveriesPage;
