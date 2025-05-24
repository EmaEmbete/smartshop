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


function Detailappro(){

    const initialValues = {
        Codecommande:"",
        Nomproduit:"",
        Quantiteappro:"",
    };

    const validationSchema = Yup.object().shape({
        Codecommande: Yup.number().required("Ce Champs est Obligatoire"),
        Nomproduit: Yup.string()
        .required("Ce Champ est obligatoire!"),
        Quantiteappro: Yup.number()
        .required("Ce Champ est obligatoire!"),
    });

    const detailappro = (values) =>{
        console.log("produit a été ajouté au lot",values);
    };
    return(
        <div className="container col-md-5">
            <Card className="shadow-lg">
                <Card.Header className="big-danger text-center" style={{backgroundColor:"blue", color:"white"}}>
                    <h4>Ajouter au Lot{} </h4>
                </Card.Header>
                    <Card.Body>
                        <Formik
                            initialValues={initialValues}
                            validationSchema={validationSchema}
                            onSubmit={detailappro}
                            >
                            <Form>
                                <div>
                                    <label htmlFor="">Commande N°</label>
                                    <Field 
                                        as="select"
                                        className="form-select"
                                        name="Codecommande">
                                        <option value="index">------Selectionner le code de la Commande------</option>
                                        <option value="code1">Bright</option>
                                        <option value="code2">Riz Tanzanie</option>
                                        <option value="code3">Farine Maïs</option>
                                        <option value="code4">Haricot</option>
                                        <option value="code5">Sucre</option>
                                        <option value="code6">Pain rond</option>
                                        <option value="code16">Pain coupé</option>
                                    </Field>             
                                </div>
                                    <ErrorMessage
                                    name = "Codecommande"
                                    component="span"
                                    className="text-danger"
                                    />
                                <div>
                                    <label htmlFor="">Nom du Fournisseur</label>
                                    <Field 
                                        as="select"
                                        name="Nomproduit"
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
                                    <label htmlFor="">Quantité</label>
                                    <Field 
                                    name="Quantiteappro"
                                    placeholder="Quantité Approvisionnéne"
                                    className="form-control p-1"
                                    />
                                </div>
                                <ErrorMessage
                                name = "Quantiteappro"
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
                                    }} type="submit">Voir appro
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

export default Detailappro;