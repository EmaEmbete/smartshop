
import React, { useState, useEffect } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { Card, Button } from "react-bootstrap";
import axios from "axios";
import { NavLink } from "react-router-dom";

function Affichercommandeclient() {
        const [commandes, setCommandes] = useState([])
        const [detailcommande, setDetailcommande] = useState([])

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
                                <th>Date</th>
                                <th>N° Commande</th>
                                <th>Code Produit</th>
                                <th>Produits</th>
                                <th>Quantite</th>
                                <th>Prix</th>
                                <th>Total</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {commandes.map((listes) =>
                            listes.detailcommandes.map((detail,index)=>(
                                <tr key={`${listes.id}-${index}`}>
                                    <td>{listes.id}</td>
                                    <td>{listes.client?.nomclient}</td>
                                    <td>{listes.Datecommande}</td>
                                    <td>{listes.Codecommande}</td>
                                    <td>{detail.produit?.codeproduit}</td>
                                    <td>{detail.produit?.nomproduit}</td>
                                    <td>{detail.Quantite}</td>
                                    <td>{detail.produit.prix}</td>
                                    <td>{(detail.produit.prix||0)*detail.Quantite}</td>
                                    <td>
                                        <Button variant="primary" className="me-2 col-md-5">
                                        <NavLink to="/validation">Valider</NavLink>
                                        </Button>
                                        <Button variant="danger" className="me-2 col-md-5">
                                            Annuler
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

export default Affichercommandeclient;
