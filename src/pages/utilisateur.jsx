import Button from "react-bootstrap/Button";
import "../App.css";
import {Formik, Form, Field, ErrorMessage} from "formik";
import * as Yup from "yup";
import {NavLink, useNavigate} from "react-router-dom";
import Card from "react-bootstrap/Card";
import axios from "axios";
import { useState } from "react";
import { Navigate } from "react-router-dom";


function Utilisateur (){
    const [serverError, setServerError] = useState("");
    const [loading, setLoading]=useState(false);
    const navigate = useNavigate();
    const initialValues = {
        nomclient:"",
        pays:"",
        ville:"",
        telephone:"",
        email:"",
        adresse:"",
        motdepasse:"",
    };

    const validationSchema = Yup.object().shape({
        nomclient: Yup.string()
        .required("Ce Champ est obligatoire!"),
        pays: Yup.string()
        .required("Ce Champ est obligatoire!"),
        ville: Yup.string()
        .required("Ce Champ est obligatoire!"),
        telephone:Yup.number().required("Ce Champs est Obligatoire!"),
        email:Yup.string().required("Ce Champs est Obligatoire!"),
        adresse: Yup.string().required("Ce Champs est Obligatoire!"),
        motdepasse: Yup.string().required("Le mot de passe est requis")
        .min(6, "Le mot de passe doit contenir au moins 6 caractères")
        .matches(/[A-Z]/, "Le mot de passe doit contenir au moins une majuscule")
        .matches(/[a-z]/, "Le mot de passe doit contenir au moins une minuscule")
        .matches(/[0-9]/, "Le mot de passe doit contenir au moins un chiffre"),
    });
    const utilisateurs = async (values) =>{
        try{
            setLoading(true)
            setServerError("") // renitialisation de l'erreur
                const res = await axios.post("http://localhost:5005/clients",{
                nomclient:values.nomclient,
                pays:values.pays,
                ville:values.ville,
                telephone:values.telephone,
                email:values.email,
                adresse:values.adresse,
                motdepasse:values.motdepasse,
            })
            console.log(res);
            navigate("/logs");
        } catch (error) {
            if (error.response && error.response.status === 400) {
                setServerError(error.response.data.message)
                alert("Email existe déjà !!");
             } else{
                    setServerError("Une erreur est survenue lors de la création du compte.");
                }
        }finally{
            setLoading(false);
        }
    };
    return(
        <div className="container col-md-5">
            <Card className="shadow-ls">
                <Card.Header style={{backgroundColor:"blue", color:"white"}}>
                    <h3 className="text-center">Créer un Compte pour le Client</h3>
                </Card.Header> 

                 <Card.Body>
                    <Formik
                    initialValues={initialValues}
                    validationSchema={validationSchema}
                    onSubmit={utilisateurs}
                    >
                        {({values, setFieldValue})=>(
                            <Form>
                                <div>
                                    <label htmlFor="">Nom Utilisateur</label>
                                    <Field
                                    name="nomclient"
                                    placeholder="Nom d'utilisateur"
                                    className="form-control"
                                    style={{height:"40px"}}
                                    />
                                </div>
                                <ErrorMessage
                                name="nomclient"
                                component="div"
                                className="text-danger"
                                />
                                
                                <div>
                                    <label htmlFor="">pays</label>
                                    <Field
                                    name="pays"
                                    placeholder="Pays de residence "
                                    className="form-control"
                                    style={{height:"40px"}}
                                    />
                                </div>
                                <ErrorMessage
                                name="pays"
                                component="div"
                                className="text-danger"
                                />
                                <div>
                                    <label htmlFor="">Ville</label>
                                    <Field
                                    name="ville"
                                    placeholder="Ville Actuelle"
                                    className="form-control"
                                    style={{height:"40px"}}
                                    />
                                </div>
                                <ErrorMessage
                                name="ville"
                                component="div"
                                className="text-danger"
                                />
                                <div>
                                    <label htmlFor="">Numéro de Téléphone</label>
                                    <Field
                                    name="telephone"
                                    placeholder="Votre numéro de Téléphone"
                                    className="form-control"
                                    style={{height:"40px"}}
                                    />
                                </div>
                                <ErrorMessage
                                name="telephone"
                                component="div"
                                className="text-danger"
                                />
                                <div>
                                    <label htmlFor="email">E-mail</label>
                                    <Field
                                    name="email"
                                    placeholder="Adresse mail"
                                    className="form-control"
                                    style={{height:"40px"}}
                                    />
                                </div>
                                <ErrorMessage
                                name="email"
                                component="div"
                                className="text-danger"
                                />
                                <div>
                                <label htmlFor="adresse">Adresse de Residence</label>
                                    <Field
                                    name="adresse"
                                    placeholder="Adresse de Résidence Actuelle "
                                    className="form-control"
                                    style={{height:"40px"}}
                                    />
                                </div>
                                <ErrorMessage
                                name="adresse"
                                component="div"
                                className="text-danger"
                                />
                                <div>
                                <label htmlFor="adresse">Mot ed Passe</label>
                                    <Field
                                    type="password"
                                    name="motdepasse"
                                    placeholder="Définir le mot de passe"
                                    className="form-control"
                                    style={{height:"40px"}}
                                    />
                                </div>
                                <ErrorMessage
                                name="motdepasse"
                                component="div"
                                className="text-danger"
                                type="password"
                                />
                                <div className="row justify-content-center">
                                <div className="col-md-7">
                                        <p> Avez-vous un Compte ? <NavLink to="/"> Se Connecter
                                        </NavLink> </p>
                                    </div>
                                    <div className="col-md-4">
                                        <Button disabled={loading} variant="primary" type="submit">
                                            Créer un Compte<NavLink to="/Pagecmds"></NavLink>
                                        </Button>
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

export default Utilisateur;