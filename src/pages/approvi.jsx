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
import { useState } from "react";
import axios from "axios";

/*import 'bootstrap/dist/css/bootstrap.min.css';*/


function Aprovisionnement(){
   const [loading, setLoading] = useState(false)
    const initialValues = {
        Numerolot:"",
        Dateapprov:new Date(),
        Nomfournisseur:"",
    };

    const validationSchema = Yup.object().shape({
        Numerolot: Yup.string()
        .required("Ce Champ est obligatoire!"),
        Dateapprov: Yup.date()
        .typeError("Date invalide")
        .required("Ce Champ est obligatoire!"),
        Nomfournisseur: Yup.string()
        .required("Ce Champ est obligatoire!"),
    });
    
    const aprovisionnement = async (values) =>{
        try {
            setLoading(true)
            const res = await axios.post("http://localhost:5005/approvis",{
                Numerolot:values.Numerolot,
                Dateappro:values.Dateapprov,
                Nomfournisseur:values.Nomfournisseur
            })
        } catch (error) {
            alert({error:"Erreur lors d'envoie des données!!"})
        } finally{
            setLoading(false)
        }
    };

    return(
        <div className="container col-md-5">
            <Card className="shadow-lg">
                <Card.Header className="big-danger text-center" style={{backgroundColor:"blue", color:"white"}}>
                    <h4> Enregistrer le lot de marchanides achetés</h4>
                </Card.Header>
                    <Card.Body>
                        <Formik
                            initialValues={initialValues}
                            validationSchema={validationSchema}
                            onSubmit={aprovisionnement}
                            >
                                {({values, setFieldValue})=> (
                            <Form>
                                <div>
                                    <label htmlFor="">Lot Numéro</label>
                                    <Field 
                                    name="Numerolot"
                                    placeholder="Code du produit"
                                    className="form-control"
                                    />
                                </div>
                                <ErrorMessage
                                name = "Numerolot"
                                component="span"
                                className="text-danger"
                                />

                                <div>
                                <label>Date Approvisionnemenr</label>
                                <DatePicker 
                                    selected={values.Dateapprov}
                                    onChange={(date) => setFieldValue("Dateapprov", date)}
                                    showTimeSelect
                                    timeFormat="HH:mm"
                                    timeIntervals={15}
                                    dateFormat="dd/MM/yyyy HH:mm"
                                    className="form-control p-3"
                                    placeholderText="Sélectionnez la date"
                                />
                                <ErrorMessage name="Dateapprov" component="div" className="text-danger" />
                                </div>

                                <div>
                                    <label htmlFor="">Nom du Fournisseur</label>
                                    <Field 
                                    as="select"
                                    name="Nomfournisseur"
                                    className="form-select"
                                    >
                                    <option value="index">------ Selectionner le client ------</option>
                                    <option value="Ema">Ema</option>
                                    <option value="Gilbert">Gilbert</option>
                                    <option value="Grâce">Grâce</option>
                                    <option value="Daniel">Daniel</option>
                                    <option value="Donnat">Donnat</option>
                                    </Field>
                                </div>
                                <ErrorMessage
                                name = "Nomfournisseur"
                                component="span"
                                className="text-danger"
                                />
                                <div className="row justify-content-center">
                                <div className="col-auto">
                                    <Button variant="primary" disabled={loading} style={{
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
                                    }} type="submit">Afficher
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

export default Aprovisionnement;