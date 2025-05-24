import Button from 'react-bootstrap/Button';
import { useState } from 'react';
import axios from "axios";
import "../App.css";

function Client (){
    const [nom, setNom] = useState("");
    const [pays, setPays] = useState("");
    const [ville, setVille] = useState("");
    const [telephone, setTelephone] = useState("");
    const [email, setEmail] = useState("");
    const [adresse, setAdresse] = useState("");
    const [motdepasse, setMotdepasse] = useState("");
    

    const SubmitForm = async (e) => {
        e.preventDefault();
        try {
            const res = await axios.post("http://localhost:5005/clients", {
                NomClient: nom,
                Pays: pays,
                Ville: ville,
                Email: email,
                Telephone: telephone,
                Adresse: adresse,
                Motdepasse: motdepasse
            })
            console.log(res.data);
            alert("Donnée envoyé avec succès !");
        } catch (error) {
            console.log(error.response.data)
            alert("Erreur d'envoie !");
        }
    }
    return (
        <div className="contenneur">
            <h2>IDENTIFIER LE CLIENTS</h2>

            <form action="#" className="form">
                <div>
                    <input type="text" value={nom} onChange={(text) => setNom(text.target.value)} className="form-control" placeholder="Nom du Client" />
                </div>

                <div>
                    <input type="text" value={pays} onChange={(text) => setPays(text.target.value)} className="form-control" placeholder="Pays de Résidence" />
                </div>

                <div>
                    <input type="text" value={ville} onChange={(text) => setVille(text.target.value)} className="form-control" placeholder="Ville Actuelle" />
                </div>

                <div>
                    <input type="text" value={telephone} onChange={(text) => setTelephone(text.target.value)} className="form-control" placeholder="Numéro Téléphone" />
                </div>

                <div>
                    <input type="text" value={email} onChange={(text) => setEmail(text.target.value)} className="form-control" placeholder="Adresse Email du Client" />
                </div>

                <div>
                    <input type="text" value={adresse} onChange={(text) => setAdresse(text.target.value)} className="form-control" placeholder="Adresse de Résidence" />
                </div>
                <div>
                    <input type="text" value={motdepasse} onChange={(text) => setMotdepasse(text.target.value)} className="form-control" placeholder="Mot de Passe" />
                </div>
                <div>
                    <input type="text" className="form-control" placeholder="Confirmer le Mot de Passe" />
                </div>
                <div>
                    <button type="submit" onClick={SubmitForm} className=" btn btn-primary texte-center">Enregistrer</button>

                </div>
            </form>
        </div>
    )
} 

export default Client;
