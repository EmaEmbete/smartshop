
import React, { useState, useEffect } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import "react-datepicker/dist/react-datepicker.css";
import { Card, Button } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import axios from "axios";
import { useNavigate } from "react-router-dom";


function PageCommande() {
  const [panier, setPanier] = useState([]);
  const [loading, setLoading] = useState(false);
  const [produits, setProduits] = useState([]);
  const [codeCommande, setCodeCommande]=useState("");

  const storedUser = JSON.parse(localStorage.getItem("userData"));
  const [clientConnecter, setClientConnecter]=useState(storedUser);
  const navigate = useNavigate();

  useEffect(()=>{
    axios.get("http://localhost:5005/produits")
    .then((res) => {
        console.log("Produits récupérés :", res.data);
        setProduits(res.data)
    })
    .catch((err) => console.error("Erreur clients", err));
    
  },[]);


  // récuperation des information du client dans localstorage 
  // useEffect(() => {
  //   const storedUser = localStorage.getItem("userData"); // Attention au nom de ta clé !
  //   if (storedUser) {
  //     try {
  //       const parsedUser = JSON.parse(storedUser);
  //       if (parsedUser && parsedUser.id) {
  //         setClientConnecter(parsedUser);
  //       } else {
  //         // Si pas d'id, on redirige vers login
  //         navigate("/logs");
  //       }
  //     } catch (error) {
  //       console.error("Erreur de parsing JSON :", error);
  //       navigate("/logs");
  //     }
  //   } else {
  //     // Pas d'utilisateur dans localStorage, redirection login
  //     navigate("/logs");
  //   }
  // }, []);

  // if (!clientConnecter) {
  //   navigate("/pagecmds");
  //   // Tu peux afficher un loader ici si tu veux
  //   return null;
  // }


// if(!clientConnecter){
//   return(
//     <div>Veuillez d'abord vous connectez <NavLink to="/logs">Se Connecter </NavLink> </div>
//   )
// }


  const ajouterAuPanier = (produits) => {
    const exist = panier.find((item) => item.id === produits.id);
    if (exist) {
      setPanier(
        panier.map((item) =>
          item.id === produits.id ? { ...item, quantite: item.quantite + 1 } : item
        )
      );
    } else {
      setPanier([...panier, { ...produits, quantite: 1 }]);
    }
  };

  const initialValues = {
    Codecommande: codeCommande,
    clientId: clientConnecter?.id || "", // permet de recuper l'id du client à partir de localstorage
  };

  const validationSchema = Yup.object().shape({
    Codecommande: Yup.string().required("Ce Champ est obligatoire!"),
    //clientId: Yup.string().required("Ce Champ est obligatoire!"),
  });

  const commande = (values) => {
    console.log("Formulaire soumis", values);
    console.log("Panier:", panier);
    alert("Commande enregistrée avec succès !");
  };
  const Montant = panier.reduce((acc, item) => acc + item.prix * item.quantite, 0);

  // useEffect(()=>{
  //   axios.get("http://localhost:5005/clients").then((res) => {
  //       console.log("Clients récupérés :", res.data);
  //       setClients(res.data)
  //   }).catch((err) => console.error("Erreur clients", err));
  // },[]);

  useEffect(() => {
    const fetchLastCommande = async () =>{
    try {
      const res = await axios.get("http://localhost:5005/cmds/last");
      const lastcode = res.data?.Codecommande || "P00";
      //const lastId = res.data?.id || 0;
      const number = parseInt(lastcode.replace("P", ""))+1;
      const newCode = `P${String(number).padStart(3,"0")}`;
      setCodeCommande(newCode);
    } catch (err) {
        console.error("Erreur en récupérant codecommande !!",err);
      }
    };
      fetchLastCommande();
    
  },[]);

  // fonction pour ajouter  ou diminue la quanter dans le panier

  const augmenterQuantite = (produitId) => {
    setPanier(
      panier.map((item) =>
        item.id === produitId
          ? { ...item, quantite: item.quantite + 1 }
          : item
      )
    );
  };
  
  const diminuerQuantite = (produitId) => {
    setPanier(
      panier
        .map((item) =>
          item.id === produitId && item.quantite > 1
            ? { ...item, quantite: item.quantite - 1 }
            : item
        )
        .filter((item) => item.quantite > 0) // Optionnel : Retire si quantité = 0
    );
  };
  

  // // attendre que codeCommande soit prêt avant d’afficher le formulaire !!!
   if (!codeCommande) return <p>Chargement du code commande...</p>;


//Enregistrer la commande, et detail commande en un clic

const detailcommande = async(values) =>{
  try{
    setLoading(true)
    const data = {
      Codecommande: values.Codecommande,
      clientId:values.clientId,
      Montant:Montant,
      details:panier.map((item) =>({
        produitId:item.id,
        quantite:item.quantite
      }))
    };

    const res = await axios.post("http://localhost:5005/cmds",data);
    alert("Commande Enregistrer avec succès !!");
    setPanier([]);
    navigate("/")
    } catch (error) {
        console.error("Erreur pendant la création de la commande!", error);
        alert("Erreur pendant la création de la commande!", error);
      } finally {
        setLoading(false)
      }
  };

  return (
    <div className="container mt-5">
      <h2 className="text-center mb-4 text-primary">
        Commande en Ligne - Emc SmartShop
      </h2>
      <Card className="shadow-lg mb-4">
        <Card.Header style={{ backgroundColor: "blue", color: "white" }}>
          <h4 className="text-center">
            Vous êtes Connecté en tant que : {clientConnecter?.nomclient || ""}
          </h4>
        </Card.Header>
        <Card.Body>
          <Formik
            initialValues={initialValues}
            enableReinitialize={true}
            validationSchema={validationSchema}
            onSubmit={detailcommande}
          >
            {({ values, setFieldValue }) => (
              <Form>
                <div className="mb-3">
                  <label>Code Commande</label>
                  <Field
                    name="Codecommande"
                    disabled={true}
                    className="form-control"
                  />
                   <ErrorMessage
                    name="Codecommande"
                    component="div"
                    className="text-danger"
                  />
                </div>
                {/* <div className="mb-3">
                  <label>Nom du Client</label>
                  <Field as="select" name="clientId" className="form-select">
                    <option value="">-- Sélectionner le client --</option>
                    {clients.map((client) => (
                      <option key={client.id} value={client.id}>{client.nomclient}</option>
                    ))}
                    
                  </Field>
                  <ErrorMessage
                    name="clientId"
                    component="div"
                    className="text-danger"
                  />
                </div> */}
                <h5>Produits disponibles</h5>
                <div className="row">
                  {produits.map((p) => (
                    <div className="col-md-4 mb-3 text-center" key={p.id}>
                      <Card>
                        <Card.Img className="mx-auto mt-2"
                          variant="top"
                          src={`http://localhost:5005/Images/${p.photo}`}
                          alt={p.nomproduit}
                          style={{ height: '400px', width: '300px', objectFit: 'cover' }}
                        />
                        <Card.Body>
                          <Card.Title>{p.nomproduit}</Card.Title>
                          <Card.Text>propriétés : {p.caracteristiques} </Card.Text>
                          <Card.Text>prix : {p.prix} </Card.Text>
                          <Button onClick={() => ajouterAuPanier(p)}>
                            Ajouter au panier
                          </Button>
                        </Card.Body>
                      </Card>
                    </div>
                  ))}
                </div>

                <h5>Votre panier</h5>
                {panier.length === 0 ? (
                  <p>Panier vide</p>
                ) : (
                <table className="table table-bordered">
                  <thead className="table-primary">
                    <tr>
                      <th>Nom produit</th>
                      <th>Prix unitaire (Fbu)</th>
                      <th>Quantité</th>
                      <th>Montant (Fbu)</th>
                    </tr>
                  </thead>
                  <tbody>
                    {panier.map((item) => (
                      <tr key={item.id}>
                        <td>{item.nomproduit}</td>
                        <td>{item.prix}</td>
                        <td>
                          <Button
                            variant="outline-dark"
                            size="sm"
                            onClick={() => diminuerQuantite(item.id)}
                            className="mx-1 col-md-4 justify-content-center"
                          >
                            -
                          </Button>
                          {item.quantite}
                          <Button
                            variant="outline-dark"
                            size="sm"
                            onClick={() => augmenterQuantite(item.id)}
                            className="mx-1 col-md-4 justify-content-center"
                          >
                            +
                          </Button>
                        </td>
                        <td>{item.prix * item.quantite}</td>
                      </tr>
                    ))}
                  </tbody>
                  <tfoot>
                    <tr>
                      <td colSpan="3" className="text-end"><strong>Total général (Fbu)</strong></td>
                      <td><strong>{panier.reduce((acc, item) => acc + item.prix * item.quantite, 0)}</strong></td>
                    </tr>
                  </tfoot>
                </table>
                )}

                <div className="text-center mt-4">
                  <Button disabled={loading} variant="primary" type="submit" size="lg">
                    Envoye la commande
                  </Button>
                </div>
              </Form>
            )}
          </Formik>
        </Card.Body>
      </Card>
    </div>
  )
}
export default PageCommande;
