import Button from "react-bootstrap/Button";
import "../App.css";
import {Formik, Form, Field, ErrorMessage} from "formik";
import * as Yup from "yup";
import {NavLink} from "react-router-dom";
import "../styles/produits.css";
import Card from "react-bootstrap/Card";
import axios from "axios";
import { useState } from "react";
/*import 'bootstrap/dist/css/bootstrap.min.css';*/


function Produit (){
    const [loading, setLoading]=useState(false)
    const initialValues = {
        codeproduit:"",
        nomproduit:"",
        caracteristiques:"",
        photo:"",
        quantitestock:"",
        prix:""
    };

    const validationSchema = Yup.object().shape({
        codeproduit: Yup.string()
        .required("Ce Champ est obligatoire!"),
        nomproduit: Yup.string()
        .required("Ce Champ est obligatoire!"),
        caracteristiques: Yup.string()
        .required("Ce Champ est obligatoire!"),
        quantitestock:Yup.number().required("Ce Champs est Obligatoire!"),
        prix:Yup.number().required("Ce Champs est Obligatoire!"),
        photo: Yup.string(),
    });
    const produit = async (values) =>{
        try{
            const formData = new FormData();
            formData.append("Codeproduit", values.codeproduit)
            formData.append("Nomproduit", values.nomproduit)
            formData.append("Caracteristique", values.caracteristiques)
            formData.append("quantitestock", values.quantitestock)
            formData.append("prix", values.prix)
            formData.append("photo", values.photo)
            setLoading(true)
            const res= await axios.post("http://localhost:5005/produits", formData, {
                headers: {
                    "Content-Type": "multipart/form-data"
                }
            })
            console.log(res)
        } catch (error) {
            alert({error:"Erreur lors d'envoie des données !!"})
        } finally{
            setLoading(false)
        }
    };
    return(
        <div className="container col-md-6">
            <Card className="shadow-ls">
                <Card.Header className="big-primary text-center" style={{color:"green"}}>
                    <h3>Ajouter un produit dans le Magasin</h3>
                </Card.Header> 

                 <Card.Body>
                    <Formik
                    initialValues={initialValues}
                    validationSchema={validationSchema}
                    onSubmit={produit}
                    >
                        {({values, setFieldValue})=>(
                            <Form>
                                <div>
                                    <label htmlFor="">Code du produit</label>
                                    <Field
                                    name="codeproduit"
                                    placerholder="Code de produits"
                                    className="form-control"
                                    style={{height:"40px"}}
                                    />
                                </div>
                                <ErrorMessage
                                name="codeproduit"
                                component="div"
                                className="text-danger"
                                />
                                
                                <div>
                                    <label htmlFor="">Designation</label>
                                    <Field
                                    name="nomproduit"
                                    placerholder="Nom du produit"
                                    className="form-control"
                                    style={{height:"40px"}}
                                    />
                                </div>
                                <ErrorMessage
                                name="nomproduit"
                                component="div"
                                className="text-danger"
                                />
                                <div>
                                    <label htmlFor="">caracteristiques</label>
                                    <Field
                                    name="caracteristiques"
                                    placerholder="Caractéristiques du  Produit!!"
                                    className="form-control"
                                    style={{height:"40px"}}
                                    />
                                </div>
                                <ErrorMessage
                                name="caracteristiqueses"
                                component="div"
                                className="text-danger"
                                />
                                <div>
                                    <label htmlFor="">Quantité Initiale</label>
                                    <Field
                                    name="quantitestock"
                                    placerholder="Entrée la Quantité Initiale"
                                    className="form-control"
                                    style={{height:"40px"}}
                                    />
                                </div>
                                <ErrorMessage
                                name="quantitestock"
                                component="div"
                                className="text-danger"
                                />
                                <div><label htmlFor="quantitestock">Prix Unitaire de Vente</label>
                                    <Field
                                    name="prix"
                                    placerholder="Prix vente de produit"
                                    className="form-control"
                                    style={{height:"40px"}}
                                    />
                                </div>
                                <ErrorMessage
                                name="prix"
                                component="div"
                                className="text-danger"
                                />
                                <div>
                                    <label htmlFor="">Selectionner l'image du produit</label>
                                    <input
                                    name="photo"
                                    type="file"
                                    className="form-control"
                                    onChange={(event)=>{
                                        setFieldValue("photo", event.target.files[0]);
                                    }}
                                    style={{height:"40px"}}
                                    />
                                </div>
                                <ErrorMessage
                                name="photo"
                                component="div"
                                className="text-danger"
                                />
                                <div className="row justify-content-center">
                                    <div className="col-md-4">
                                        <Button disabled={loading} variant="primary" type="submit">
                                            Enregistrer
                                        </Button>
                                    </div>
                                    <div className="col-md-4">
                                        <NavLink className="btn btn-danger" to="/afficherprods">Afficher
                                        </NavLink> 
                                    </div>
                                </div>
                            </Form>
                        )}

                    </Formik>
                 </Card.Body>
            </Card>

        </div>

    );


}

export default Produit;