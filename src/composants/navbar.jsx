import { NavLink } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "./Navbar.css"

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-secondary mb-3">
      <div className="container">
        <NavLink className="navbar-brand" to="pagecmds">
          Accueil
        </NavLink>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
          <li className="nav-item dropdown">
              <NavLink
                className="nav-link dropdown-toggle"
                to="/produits"
                role="button"
                data-bs-toggle="dropdown"
              >
                Produits
              </NavLink>
              <ul className="dropdown-menu">
                <li>
                  <NavLink className="dropdown-item" to="/afficherprods">
                    Liste des Produits
                  </NavLink>
                </li>
                <li>
                  <NavLink className="dropdown-item" to="/produits">
                    Ajouter Produit
                  </NavLink>
                </li><li>
                  <NavLink className="dropdown-item" to="/pagecmds">
                    Catalogue
                  </NavLink>
                </li>
              </ul>
            </li>
            <li className="nav-item dropdown">
              <NavLink
                className="nav-link dropdown-toggle"
                to="/produits"
                role="button"
                data-bs-toggle="dropdown"
              >
                Clients
              </NavLink>
              <ul className="dropdown-menu">
                <li>
                  <NavLink className="dropdown-item" to="/clients">
                    Changer le Compte
                  </NavLink>
                </li>
                <li>
                  <NavLink className="dropdown-item" to="/affichercls">
                    Liste Clients
                  </NavLink>
                </li><li>
                  <NavLink className="dropdown-item" to="/clients">
                    Créer un Comptes
                  </NavLink>
                </li>
              </ul>
            </li>
            <li className="nav-item dropdown">
              <NavLink
                className="nav-link dropdown-toggle"
                to="/Affichercmds"
                role="button"
                data-bs-toggle="dropdown"
              >
                Commandes
              </NavLink>
              <ul className="dropdown-menu">
                <li>
                  <NavLink className="dropdown-item" to="/affichercmds">
                    Commande en Cours
                  </NavLink>
                </li>
                <li>
                  <NavLink className="dropdown-item" to="/pagecmds">
                    Passer une commande
                  </NavLink>
                </li><li>
                  <NavLink className="dropdown-item" to="/pagecmds">
                    Catalogue
                  </NavLink>
                </li>
                <li>
                  <NavLink className="dropdown-item" to="/validation">
                    Valider une Commande
                  </NavLink>
                </li>
              </ul>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="payements">
                Paiements
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="approvis">
                Achats
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="fss">
                Partenaires
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
