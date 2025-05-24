
import React, { useState, useEffect } from "react";
import "react-datepicker/dist/react-datepicker.css";
import { Card, Button } from "react-bootstrap";
import axios from "axios";

function Afficherpaie() {
        const [produits, setProduits] = useState([])/*
        const fetchproduits = async () => {
            try {
            const response = await axios.get("http://localhost:5005/produits");
            setProduits(response.data);
            } catch (error) {
            console.log(error)
            }
        }
        
        useEffect(() => {
        fetchproduits();
        },[]);*/
        
  return (
    <div className="container mt-5">
      <h2 className="text-center mb-4 text-primary">
        Ema Multiservices Company Shop on Line
      </h2>
      <Card className="shadow-lg mb-4 max-auto">
            <Card.Header style={{ backgroundColor: "blue", color: "white" }}>
                <h4 className="text-center">
                    Liste des Commandes déjà Reglées
                </h4>
            </Card.Header>
            <Card.Body>
                <div>
                    <table className=" table table-bordered table-hover text-center">
                        <thead className="thead-dark">
                            <tr className="p-5">
                                <th>Id</th>
                                <th>Code Commandes</th>
                                <th>Nom Client</th>
                                <th>Montant</th>
                            </tr>
                        </thead>
                        <tbody>
                        {produits.map((liste) =>(
                            <tr key={liste.id}>
                                <td>{liste.id}</td>
                                <td>{liste.codeproduit}</td>
                                <td>{liste.nomproduit}</td>
                                <td>{liste.caracteristiques}</td>
                                <td>
                                    <Button variant="primary" className="me-2 col-md-5">
                                        Voir
                                    </Button>
                                    <Button variant="danger" className="me-2 col-md-5">
                                        Valider
                                    </Button>
                                </td>
                            </tr>
                        ))}

                        </tbody>
                    </table>
                </div>
            </Card.Body>
        </Card>
    </div>
  )
}
export default Afficherpaie;
