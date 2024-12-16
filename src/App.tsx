import './App.css'; // Importation du fichier CSS

function App() {
  return (
    <main className="container">
      <header className="header">
        <img src="/src/assets/logo-clear.png" alt="Logo DUBETON" className="logo" />  
        <h1>DUBETON</h1>
        <p>Du béton de qualité, livré en camions</p>
      </header>

      <section className="section">
        <h2>Qui sommes-nous ?</h2>
        <p>
          DUBETON est une entreprise spécialisée dans la vente et la livraison 
          de béton haut de gamme. Nous mettons à ta disposition une flotte de 
          camions afin d’assurer un transport rapide et sécurisé, quel que soit 
          ton projet. Notre objectif est de t’offrir un béton parfaitement adapté 
          à tes besoins, que ce soit pour une petite terrasse de jardin ou un 
          chantier de grande envergure.
        </p>
      </section>

      <section className="section">
        <h2>Nos engagements</h2>
        <ul className="list">
          <li><strong>Qualité :</strong> Notre béton est élaboré à partir de matières premières rigoureusement sélectionnées.</li>
          <li><strong>Fiabilité :</strong> Nos livraisons sont effectuées dans les délais, avec un service client à ton écoute.</li>
          <li><strong>Proximité :</strong> Notre équipe de professionnels est disponible pour te conseiller et t’accompagner dans tes projets.</li>
        </ul>
      </section>

      <section className="section">
        <h2>Nous contacter</h2>
        <p>
          Pour obtenir un devis ou en savoir plus sur nos services, n’hésite pas à 
          nous contacter :
        </p>
        <address className="contact-info">
          <p><strong>Adresse :</strong> 123 Rue du Chantier, 75000 Paris</p>
          <p><strong>Téléphone :</strong> 01 23 45 67 89</p>
          <p><strong>Email :</strong> contact@dubeton.fr</p>
        </address>
      </section>

      <footer className="footer">
        <p>&copy; {new Date().getFullYear()} DUBETON. Tous droits réservés.</p>
      </footer>
    </main>
  );
}

export default App;
