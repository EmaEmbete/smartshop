
import React, { useState, useEffect } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import "react-datepicker/dist/react-datepicker.css";
import { Card, Button } from "react-bootstrap";
import axios from "axios";
import { useParams, NavLink} from "react-router-dom";

function Voirdetailcommande() {
    const [loading, setLoading]=useState(false)
    const [commandes, setCommandes] = useState([])
    const {id} = useParams();
   
        
    const fetchcommandeclient = async () => {
        try {
        const response = await axios.get("http://localhost:5005/detailcmds");
        const allcmd = response.data;
        const selected = allcmd.find(cmd =>cmd.id===parseInt(id));
        if(selected){
            setCommandes([selected]);
        }
        } catch (error) {
                console.log(error)
            }
        }
        useEffect(() => {
        fetchcommandeclient();
        },[id]);

        const totalGeneral = commandes.reduce((total, commande) => {
            return (
              total +
              commande.detailcommandes.reduce((sousTotal, detail) => {
                return sousTotal + (detail.produit?.prix || 0) * detail.Quantite;
              }, 0)
            );
          }, 0);

          const handlePaiement = async () => {
            try {
                setLoading(true)
              const response = await axios.post(`http://localhost:5005/payer/${commandes[0].id}`,{
                totalGeneral: totalGeneral,
              });
              alert(response.data.message);
            } catch (error) {
                console.error("Erreur lors du paiement :", error?.response?.data || error.message);
                alert(error?.response?.data?.message || "Erreur lors du paiement.");
            }finally{
                setLoading(false);
            }
          };

  return (
    <div className="container-fluid mt-2">
      <h2 className="text-center mb-4 text-secondary">
        Ema Multiservices company Smart Phone Shop in Line
      </h2>

      <Card className="shadow-lg mb-4 mx-0 col-md-8 justify-content-center mx-auto">
            <Card.Header style={{ backgroundColor: "blue", color: "white" }}>
                <div>
                    <p>Commande N°      : {commandes[0]?.Codecommande}</p>
                    <p>Nom Client       : {commandes[0]?.client.nomclient}</p>
                    <p>Date Commande    : { new Date(commandes[0]?.Datecommande).toLocaleString()}</p>
                    <p>Stuat Commande   : { commandes[0]?.Statut.toLocaleString()}</p>
                </div>
            </Card.Header>
            <Card.Body>
                <div>
                    <table className=" table table-bordered table-hover text-center ">
                        <thead className="thead-dark">
                            <tr className="p-5">
                                {/* <th>N° Commande</th>
                                <th>Client</th>
                                <th>Date</th> */}
                                <th>Code Produit</th>
                                <th>Produits</th>
                                <th>Quantite</th>
                                <th>Prix</th>
                                <th>Total</th>
                            </tr>
                        </thead>
                        <tbody>
                            {commandes.map((listes) =>
                            listes.detailcommandes.map((detail,index)=>(
                                <tr key={`${listes.id}-${index}`}>
                                    {/* <td>{listes.Codecommande}</td>
                                    <td>{listes.client?.nomclient}</td>
                                    <td>{listes.Datecommande}</td> */}
                                    <td>{detail.produit?.codeproduit}</td>
                                    <td>{detail.produit?.nomproduit}</td>
                                    <td>{detail.Quantite}</td>
                                    <td>{detail.produit.prix}</td>
                                    <td>{(detail.produit.prix||0)*detail.Quantite}</td>
                                </tr>
                            )))}
                        </tbody>
                        <tfoot>
                            <tr>
                                <td colSpan="4" className="text-end fw-bold">Total Général</td>
                                <td className="fw-bold">{totalGeneral}</td>
                                <td></td>
                            </tr>
                        </tfoot>
                    </table>
                    <div className="col-md-6 mx-auto">
                    <NavLink to="/validation" className="btn btn-primary me-3 col-md-5">
                            Liste Commande
                        </NavLink>
                        <Button variant="danger" disabled={loading || commandes[0]?.Statut === "validee"} className="me-1 col-md-5" onClick={handlePaiement}>
                            Payer
                        </Button>
                    </div>
                    
                </div>
            </Card.Body>
        </Card>
    </div>
  )
}
export default Voirdetailcommande;
