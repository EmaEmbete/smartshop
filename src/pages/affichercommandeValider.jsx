
import React, { useState, useEffect } from "react";
import "react-datepicker/dist/react-datepicker.css";
import { Card, Button } from "react-bootstrap";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function AfficherCommandeValide() {
        const [commandes, setCommandes] = useState([]);
        const navigate = useNavigate();

        const fetchcommandeclient = async () => {
  try {
    const response = await axios.get("http://localhost:5005/detailcmds");
    console.log(response.data);
    // Filtrer les commandes validées
    const commandesValidees = response.data.filter(
      (cmd) => cmd.Statut === "validee");
      console.log(commandesValidees.data);
        setCommandes(commandesValidees);
        } catch (error) {
            console.log(error);
        }
        };

        useEffect(() => {
        fetchcommandeclient();
        }, []);

        const versvalidation = () =>{
            navigate("/validation")
        }

  return (
    <div className="container-fluid mt-2">
      <h2 className="text-center mb-4 text-secondary">
        Ema Multiservices company Smart Phone Shop in Line
      </h2>

      <Card className="shadow-lg mb-4 mx-0">
            <Card.Header style={{ backgroundColor: "blue", color: "white" }}>
                <h4 className="text-center">
                    Listse de Commande en Cours de Traitements
                </h4>
            </Card.Header>
            <Card.Body>
                <div>
                    <table className=" table table-bordered table-hover text-center w-100">
                        <thead className="thead-dark">
                            <tr className="p-5">
                                <th>Id</th>
                                <th>Client</th>
                                <th>N° Commande</th>
                                <th>Total</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {commandes.map((listes) =>
                                <tr key={listes.id}>
                                    <td>{listes.id}</td>
                                    <td>{listes.client?.nomclient|| "Aucun Client"}</td>
                                    <td>{listes.Codecommande}</td>
                                    <td>{listes.Montant}</td>
                                    <td>
                                        <Button variant="primary" className="me-2 col-md-5" navigate="#">
                                        Facture 
                                        </Button>
                                        <Button variant="danger" className="me-2 col-md-5" onClick={versvalidation}>
                                            Detail
                                        </Button>
                                    </td>
                                </tr>
                            )}

                        </tbody>
                    </table>
                </div>
            </Card.Body>
        </Card>
    </div>
  )
}

export default AfficherCommandeValide;
