
import React, { useState, useEffect } from "react";
import "react-datepicker/dist/react-datepicker.css";
import { Card, Button } from "react-bootstrap";
import axios from "axios";

function Afficherproduit() {
        const [produits, setProduits] = useState([])
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
        },[]);
        
  return (
    <div className="container mt-5">
      <h2 className="text-center mb-4 text-primary">
        Emc_Smart_Shop Boutique en Ligne
      </h2>
      <Card className="shadow-lg mb-4 max-auto">
            <Card.Header style={{ backgroundColor: "blue", color: "white" }}>
                <h4 className="text-center">
                    Listse de Nos produits
                </h4>
            </Card.Header>
            <Card.Body>
                <div>
                    <table className=" table table-bordered table-hover text-center">
                        <thead className="thead-dark">
                            <tr className="p-5">
                                <th>Id</th>
                                <th>Code Produit</th>
                                <th>Nom Produit</th>
                                <th>prix Unitaire</th>
                                <th>Caracteristiques</th>
                                <th>Images Produits</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                        {produits.map((liste) =>(
                            <tr key={liste.id}>
                                <td>{liste.id}</td>
                                <td>{liste.codeproduit}</td>
                                <td>{liste.nomproduit}</td>
                                <td>{liste.prix}</td>
                                <td>{liste.caracteristiques}</td>
                                <td><img src={`http://localhost:5005/Images/${liste.photo}`} style={{width: 70, height: 70}} /></td>
                                <td>
                                    <Button variant="primary" className="me-2 col-md-5">
                                        Modifier
                                    </Button>
                                    <Button variant="danger" className="me-2 col-md-5">
                                        Supprimer
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

export default Afficherproduit;
