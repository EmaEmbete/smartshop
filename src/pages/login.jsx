import Button from "react-bootstrap/Button";
import {Formik, Form, Field, ErrorMessage} from "formik";
import * as Yup from "yup";
import {NavLink} from "react-router-dom";
import CardHeader from "react-bootstrap/esm/CardHeader";
import Card from "react-bootstrap/Card";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Login() {
    const [loading, setLoading] = useState(false)
    const navigate = useNavigate();
    const initialValues = {
        Emailutilisateur:"",
        Motdepasse:"",
    };

    const validationSchema = Yup.object().shape({
        Emailutilisateur:Yup.string().required("Ce champ est Obligatoire"),
        Motdepasse:Yup.string().required("Ce champs est obligatoire"),
    });

    const login = async (values)=>{
        try {
            setLoading(true)
            const res = await axios.post("http://localhost:5005/clients/login", {
                email: values.Emailutilisateur,
                motdepasse: values.Motdepasse
            })

            localStorage.setItem("userData", JSON.stringify(res.data.client))
            localStorage.setItem("token", res.data.token)
            navigate("/pagecmds")
            // const user = JSON.parse(localStorage.getItem("userData"))
            // clientId: user.id
        } catch (error) {
            console.log(error)
            alert("Mot de passe ou email incorrect!!")
        } finally {
            setLoading(false)
        }
    };

    return(
        <div className="container col-md-4 mt-4">
            <Card className="shadow-lg">
                <Card.Header className="big-danger text-center" style={{backgroundColor:"blue", color:"white"}}>
                    <h4>Connexion</h4>
                </Card.Header>
                    <Card.Body>
                        <Formik
                            initialValues={initialValues}
                            validationSchema={validationSchema}
                            onSubmit={login}
                            >
                            <Form>
                                <div>
                                    <label htmlFor="">Votre Email ou Nom</label>
                                    <Field 
                                    name="Emailutilisateur"
                                    placeholder="Votre Adresse mail"
                                    className="form-control p-3"
                                    />
                                </div>
                                <ErrorMessage
                                name = "Emailutilisateur"
                                component="span"
                                className="text-danger"
                                />
                                <div>
                                    <label htmlFor="">Mot de passe</label>
                                    <Field 
                                    type="password"
                                    name="Motdepasse"
                                    placeholder="Mot de passe"
                                    className="form-control p-3"
                                    />
                                </div>
                                <ErrorMessage
                                name = "Motdepasse"
                                component="span"
                                className="text-danger"
                                />
                                    <div className="row justify-content-center">
                                        <p>Vous n'avez pas de Compte?
                                        <NavLink to="/clients" style={{textDecoration:"none",}}> Créer un Compte</NavLink>
                                        </p>
                                    </div>
                                    <div className="row justify-content-center">
                                        <div className="col-md-5">
                                            <Button variant="primary" disabled={loading} style={{
                                                //width :150,
                                                fontWeight : 1000,
                                                fontFamily:"arrial",
                                                fontSize :20, marginTop : 5,
                                            }} type="submit">Se Connecter
                                            </Button>
                                        </div>
                                </div>
                            </Form>
                        </Formik>
                    </Card.Body>
            </Card>
        </div>
    );
}
export default Login