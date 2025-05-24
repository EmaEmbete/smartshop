import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

function Footers() {
  return (
    <footer className="bg-dark text-light py-4 mt-5">
      <div className="container">
        <div className="row">
          {/* Bloc 1 : Informations générales */}
          <div className="col-md-6 mb-3 text-center">
            <h3>À propos du site</h3>
            <p>
              Pour plus d'informations sur notre site :
              <br />
              Ce site est conçu pour faciliter les échanges d'information entre
              les clients de notre entreprise et nos services.
              <br />
              Nous disposons de plusieurs services dans notre entreprise, détaillés comme suit :
            </p>
          </div>

          {/* Bloc 2 : Nos services */}
          <div className="col-md-6 mb-3">
            <h3>Nos Services</h3>
            <ul className="list-unstyled">
              <li>Achats et ventes des produits</li>
              <li>Finance et comptabilité</li>
              <li>Ressources humaines</li>
              <li>Logistique et magasin</li>
              <li>Service client</li>
              <li>Service après-vente</li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footers;
