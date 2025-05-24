
import React, { useState, useEffect } from "react";
import "react-datepicker/dist/react-datepicker.css";
import { Card, Button } from "react-bootstrap";
import axios from "axios";

function Afficherclient() {
        const [clients, setClients] = useState([])
        const fetchclient = async () => {
            try {
            const response = await axios.get("http://localhost:5005/clients");
            setClients(response.data);
            } catch (error) {
            console.log(error)
            }
        }
        
        useEffect(() => {
        fetchclient();
        },[]);
        
  return (
    <div className="container mt-5">
      <h2 className="text-center mb-4 text-primary">
        Emc_Smart_Shop Boutique en Ligne
      </h2>
      <Card className="shadow-lg mb-4 max-auto">
            <Card.Header style={{ backgroundColor: "blue", color: "white" }}>
                <h4 className="text-center">
                    Listse de Nos Clients
                </h4>
            </Card.Header>
            <Card.Body>
                <div>
                    <table className=" table table-bordered table-hover text-center">
                        <thead className="thead-dark">
                            <tr className="p-5">
                                <th>Id</th>
                                <th>Nom</th>
                                <th>Pays</th>
                                <th>Ville</th>
                                <th>Téléphone</th>
                                <th>Email</th>
                                <th>Adresse</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                        {clients.map((liste) =>(
                            <tr key={liste.id}>
                                <td>{liste.id}</td>
                                <td>{liste.nom}</td>
                                <td>{liste.pays}</td>
                                <td>{liste.ville}</td>
                                <td>{liste.telephone}</td>
                                <td>{liste.email}</td>
                                <td>{liste.adresse}</td>
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

export default Afficherclient;
