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

/*import 'bootstrap/dist/css/bootstrap.min.css';*/


function Detailcommande(){

    const initialValues = {
        Nomproduit:"",
        Quantitecom:"",
    };

    const validationSchema = Yup.object().shape({
        Nomproduit: Yup.string()
        .required("Ce Champ est obligatoire!"),
        Quantitecom: Yup.number()
        .required("Ce Champ est obligatoire!"),
    });

    const detailcommande = (values) =>{
        console.log("produit ajouté à la commande !!",values);
    };

    return(
        <div className="container col-md-5">
            <Card className="shadow-lg">
                <Card.Header className="big-danger text-center" style={{backgroundColor:"blue", color:"white"}}>
                    <h4>Créez votre panier </h4>
                </Card.Header>
                    <Card.Body>
                        <Formik
                            initialValues={initialValues}
                            validationSchema={validationSchema}
                            onSubmit={detailcommande}
                            >
                            <Form>
                            <div>
                                    <label htmlFor="">Nom du Client</label>
                                    <Field 
                                    as="select"
                                    name="Nomclient"
                                    className="form-select"
                                    >
                                    <option value="index">------ Selectionner le produit------</option>
                                    <option value="nom1">Bright</option>
                                    <option value="nom2">Riz Tanzanie</option>
                                    <option value="nom3">Farine Maïs</option>
                                    <option value="nom4">Haricot</option>
                                    <option value="nom5">Sucre</option>
                                    <option value="nom6">Pain rond</option>
                                    <option value="nom7">Pain coupé</option>
                                    </Field>
                                </div>
                                <ErrorMessage
                                name = "Nomproduit"
                                component="span"
                                className="text-danger"
                                />

<div>
                                    <label htmlFor="">Code Commande</label>
                                    <Field 
                                    name="Quantitecomman"
                                    placeholder="Code du produit"
                                    className="form-control p-3"
                                    />
                                </div>
                                <ErrorMessage
                                name = "Quantitecomman"
                                component="span"
                                className="text-danger"
                                />

                                <div className="row justify-content-center">
                                <div className="col-auto">
                                    <Button variant="primary" style={{
                                        width :150,
                                        fontWeight : 1000,
                                        fontFamily:"arrial",
                                        fontSize :20, marginTop : 5,
                                    }} type="submit">Enregistrer
                                    </Button>
                                    </div>

                                    <div className="col-auto">
                                    <Button variant="danger" style={{
                                        width :150,
                                        fontWeight : 1000,
                                        fontFamily:"arrial",
                                        fontSize :20, marginTop : 5,
                                    }} type="submit">Voir Cmd
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

export default Detailcommande;