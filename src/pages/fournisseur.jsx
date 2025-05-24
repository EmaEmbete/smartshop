import Button from "react-bootstrap/Button";
import "../App.css";
import {Formik, Form, Field, ErrorMessage} from "formik";
import * as Yup from "yup";
import {NavLink} from "react-router-dom";
import "../styles/produits.css";
import CardHeader from "react-bootstrap/esm/CardHeader";
import Card from "react-bootstrap/Card";
//import 'bootstrap/dist/css/bootstrap.min.css';

function Fournisseur (){
    const initialValues = {
        Nomfss:"",
        Adressefss:"",
        Telephonefss:"",
        Emailfss:"",
    };

    const validationSchema = Yup.object().shape({
        Nomfss: Yup.string()
        .required("Ce Champ est obligatoire!"),

        Adressefss: Yup.string()
        .required("Ce Champ est obligatoire!"),

        Telephonefss: Yup.string()
        .required("Ce Champ est obligatoire!"),

        Emailfss:Yup.string().required("Champs obligatoire")

        
    });

    const fournisseur = (values) =>{
        console.log("Soumis avec succès!!",values);

    };

    return(
        <div className="container col-md-5">
            <Card className="shadow-lg">
                <Card.Header className="big-danger text-center" style={{backgroundColor:"blue", color:"white"}}>
                    <h4>Identifier le Fournisseur de Emc_Smart_Shop</h4>
                </Card.Header>
                    <Card.Body>
                        <Formik
                            initialValues={initialValues}
                            validationSchema={validationSchema}
                            onSubmit={fournisseur}
                            >
                               
                            <Form>
                                <div>
                                    <label htmlFor="">Dénomination de l'Entité</label>
                                    <Field
                                    name="Nomfss"
                                    placeholder="Nom du fournisseur"
                                    className="form-control p-3"
                                    />
                                </div>
                                <ErrorMessage
                                    name = "Nomfss"
                                    component="span"
                                    className="text-danger"
                                />
                                <div>
                                    <label htmlFor="">Adresse</label>
                                    <Field
                                    name="Adressefss"
                                    placeholder="Adresse du fournisseur"
                                    className="form-control p-3"
                                    />
                                </div>
                                <ErrorMessage
                                    name = "Adressefss"
                                    component="span"
                                    className="text-danger"
                                />
                                <div>
                                    <label htmlFor="">Téléphone</label>
                                    <Field
                                    name="Telephonefss"
                                    placeholder="Numéro de Telephone du Fournisseur"
                                    className="form-control p-3"
                                    />
                                </div>
                                <ErrorMessage
                                    name = "Telephonefss"
                                    component="span"
                                    className="text-danger"
                                />
                                <div>
                                    <label htmlFor="">Email du Fss</label>
                                    <Field
                                    name="Emailfss"
                                    placeholder="Nom du fournisseur"
                                    className="form-control p-3"
                                    />
                                </div>
                                <ErrorMessage
                                    name = "Emailfss"
                                    component="span"
                                    className="text-danger"
                                />

                                
                                <div className="row justify-content-center clo-md-6 text-center">
                                <div className="col-6">
                                    <Button variant="primary" style={{
                                       // width :150,
                                        fontWeight : 1000,
                                        fontFamily:"arrial",
                                        fontSize :20,
                                    }} type="submit">Enregistrer
                                    </Button>
                                    </div>

                                    <div className="col-6">
                                    <Button variant="danger" style={{
                                        //width :150,
                                        fontWeight : 1000,
                                        fontFamily:"arrial",
                                        fontSize :20, marginTop : 5,
                                    }} type="submit">Afficher
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

export default Fournisseur;