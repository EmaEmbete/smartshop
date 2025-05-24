import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import Button from "react-bootstrap/Button";
import "../App.css";
import "../styles/produits.css";

function Prod() {
  const valeurInitiales = {
    Codeproduit: "",
    Nomproduit: "",
    Caracteristique: "",
    Photo: "",
  };

  const validationSchema = Yup.object().shape({
    Codeproduit: Yup.string().required("Ce champ est obligatoire !"),
    Nomproduit: Yup.string().required("Ce champ est obligatoire !"),
    Caracteristique: Yup.string().required("Ce champ est obligatoire !"),
  });

  const produit = (valeurs) => {
    console.log("Données du produit :", valeurs);
  };

  return (
    <div className="container mt-5">
      <div className="card shadow-lg" style={{ maxWidth: "600px", margin: "auto" }}>
        <div className="card-header text-white bg-primary text-center">
          <h4>Créer un Nouveau Produit</h4>
        </div>

        <div className="card-body">
          <Formik
            initialValues={valeurInitiales}
            onSubmit={produit}
            validationSchema={validationSchema}
          >
            <Form>
              <div className="mb-3">
                <label className="form-label">Code du produit</label>
                <Field
                  name="Codeproduit"
                  placeholder="Code du produit"
                  className="form-control"
                />
                <ErrorMessage
                  name="Codeproduit"
                  component="div"
                  className="text-danger"
                />
              </div>

              <div className="mb-3">
                <label className="form-label">Nom du produit</label>
                <Field
                  name="Nomproduit"
                  placeholder="Nom du nouveau produit"
                  className="form-control"
                />
                <ErrorMessage
                  name="Nomproduit"
                  component="div"
                  className="text-danger"
                />
              </div>

              <div className="mb-3">
                <label className="form-label">Caractéristiques</label>
                <Field
                  name="Caracteristique"
                  placeholder="Caractéristiques du produit"
                  className="form-control"
                
                />
                <ErrorMessage
                  name="Caracteristique"
                  component="div"
                  className="text-danger"
                />
              </div>

              <div className="mb-3">
                <label className="form-label">Image du produit</label>
                <Field
                  name="Photo"
                  placeholder="Image du produit"
                  className="form-control"
                  type="file"
                />
                <ErrorMessage
                  name="Phot"
                  component="div"
                  className="text-danger"
                />
              </div>

              <div className="text-center">
                <Button type="submit" variant="secondary" className="px-4 fw-bold">
                  Enregistrer
                </Button>
              </div>
            </Form>
          </Formik>
        </div>
      </div>
    </div>
  );
}

export default Prod;
