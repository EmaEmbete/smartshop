import Button from "react-bootstrap/Button";
import "../App.css";
import {Formik, Form, Field, ErrorMessage} from "formik";
import * as Yup from "yup";
import {NavLink} from "react-router-dom";
import "../styles/produits.css";
import CardHeader from "react-bootstrap/esm/CardHeader";
import DatePicker from "react-datepicker"; // outil pour afficher le calendrier
import "react-datepicker/dist/react-datepicker.css";
import Card from "react-bootstrap/Card";
import axios from "axios";
import {useEffect, useState } from "react";

/*import 'bootstrap/dist/css/bootstrap.min.css';*/


function Commande(){
    const [loading, setLoading]=useState(false)
    const [clients, setClients]=useState([]);
    const initialValues = {
        Codecommande:"",
        Datecommande:null,
        clientId:"",
    };

    const validationSchema = Yup.object().shape({
        Codecommande: Yup.string()
        .required("Ce Champ est obligatoire!"),
        clientId: Yup.number()
        .required("Ce Champ est obligatoire!"),
    });

    const commande = async (values, {resetForm}) =>{
        
        try{
            setLoading(true)
                const res = await axios.post("http://localhost:5005/cmds",{
                Codecommande:values.Codecommande,
                Datecommande:new Date(),
                clientId:values.clientId,

                //Nomclient:values.Nomclient
            });
            resetForm(); //initialisation du formulaire après envoie
            alert("Commande créer avec succès !! : "+values.Codecommande)
        } catch (error) {
            console.log("Formuliare soumis",values);
        }finally{
            setLoading(false)
        }
    }

    useEffect(()=>{
        axios.get("http://localhost:5005/clients")
        .then((res) => {
            console.log("Clients récupérés :", res.data);
            setClients(res.data)
        })
        .catch((err) => console.error("Erreur clients", err));
        
    },[]);
    return(
        <div className="container col-md-5">
            <Card className="shadow-lg">
                <Card.Header className="big-danger text-center" style={{backgroundColor:"blue", color:"white"}}>
                    <h4>Passez votre Commande chez Emc_Smart_Shop</h4>
                </Card.Header>
                    <Card.Body>
                        <Formik
                            initialValues={initialValues}
                            validationSchema={validationSchema}
                            onSubmit={commande}
                            >
                                {({values, setFieldValue})=> (
                            <Form>
                                <div>
                                    <label htmlFor="">Code Commande</label>
                                    <Field 
                                    name="Codecommande"
                                    placeholder="Code du produit"
                                    className="form-control p-3"
                                    />
                                </div>
                                <ErrorMessage
                                name = "Codecommande"
                                component="span"
                                className="text-danger"
                                />
                                <div>
                                    <label htmlFor="">Selectionner le Client</label>
                                    <Field 
                                    as="select"
                                    name="clientId"
                                    className="form-select"
                                    >
                                    <option value="">------ Selectionner le Client ------</option>
                                    {clients.map((client) => (
                                    <option key={client.id} value={client.id}>{client.nomclient}</option>
                                    ))}
                                    </Field>
                                </div>
                                <ErrorMessage
                                name = "clientId"
                                component="span"
                                className="text-danger"
                                />
                                <div className="row justify-content-center">
                                
                                    <Button className="me-4 col-md-4 mt-2" disabled={loading} variant="primary">Enregistrer
                                    </Button>
                                    <NavLink className="m-1 btn btn-danger col-md-4 mt-2" to="/affichercmds">
                                    Afficher
                                    </NavLink>
                                
                                </div>  
                            </Form>
                            )}
                        </Formik>
                    </Card.Body>
            </Card>

        </div>

    );


}

export default Commande;