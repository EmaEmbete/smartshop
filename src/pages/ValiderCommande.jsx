
import React, { useState, useEffect } from "react";
import "react-datepicker/dist/react-datepicker.css";
import { Card, Button } from "react-bootstrap";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Validercommande() {
        const [commandes, setCommandes] = useState([])
        const navigate = useNavigate(); // permer de naviguer entre les pages --->
        const fetchcommandeclient = async () => {
            try {
            const response = await axios.get("http://localhost:5005/detailcmds");
            setCommandes(response.data);
            } catch (error) {
            console.log(error)
            }
        }
        
        useEffect(() => {
        fetchcommandeclient();
        },[]);

  return (
    <div className="container-fluid mt-2">
      <h2 className="text-center mb-4 text-secondary">
        Ema Multiservices company Smart Phone Shop in Line
      </h2>

      <Card className="shadow-lg mb-4 mx-0">
            <Card.Header style={{ backgroundColor: "blue", color: "white" }}>
                <h4 className="text-center">
                    Etat des Commandes
                </h4>
            </Card.Header>
            <Card.Body>
                <div>
                    <table className=" table table-bordered table-hover text-center w-100">
                        <thead className="thead-dark">
                            <tr className="p-5">
                                <th>N°</th>
                                <th>Date</th>
                                <th>Commande</th>
                                <th>Client</th>
                                <th>Pays Client</th>
                                <th>Ville Client</th>
                                <th>Téléphone</th>
                                <th>Statut</th>
                                <th>Montant</th>
                                <th>Action </th>
                            </tr>
                        </thead>
                        <tbody>
                            {commandes.map((listes) =>
                            listes.detailcommandes.map((detail,index)=>(
                                <tr key={`${listes.id}-${index}`}>
                                    <td>{listes.id}</td>
                                    <td>{listes.Datecommande}</td>
                                    <td>{listes.Codecommande}</td>
                                    <td>{listes.client?.nomclient}</td>
                                    <td>{listes.client?.pays}</td>
                                    <td>{listes.client?.ville}</td>
                                    <td>{listes.client?.telephone}</td>
                                    <td>{listes.Statut}</td>
                                    <td>{listes.Montant}</td>
                                    <td>
                                        <Button variant="primary" className="me-7 col-md-5"
                                        onClick={()=>navigate(`/details/${listes.id}`)}
                                        >Voir</Button>

                                        <Button variant="danger" className="me-7 col-md-6"
                                        style={{marginLeft:2, paddingRight:3}}
                                        
                                        >
                                            Valider
                                            </Button>
                                    </td>
                                </tr>
                            )))}

                        </tbody>
                    </table>
                </div>
            </Card.Body>
        </Card>
    </div>
  )
}

export default Validercommande;