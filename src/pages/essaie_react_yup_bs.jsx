import { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import FormGroup from "react-bootstrap/FormGroup";
import FormLabel from "react-bootstrap/FormLabel";
import "../styles/produits.css";

function ProduitForm() {
  const [previewImage, setPreviewImage] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const initialValues = {
    Codeproduit: "",
    Nomproduit: "",
    Caracteristique: "",
    Photo: null,
  };

  const validationSchema = Yup.object({
    Codeproduit: Yup.string().required("Le code produit est requis."),
    Nomproduit: Yup.string().required("Le nom du produit est requis."),
    Caracteristique: Yup.string().required("La caractéristique est requise."),
  });

  const handleSubmit = async (values, { resetForm }) => {
    setIsSubmitting(true);

    const formData = new FormData();
    formData.append("Codeproduit", values.Codeproduit);
    formData.append("Nomproduit", values.Nomproduit);
    formData.append("Caracteristique", values.Caracteristique);
    formData.append("Photo", values.Photo);

    try {
      const response = await fetch("http://localhost:5000/api/produits", {
        method: "POST",
        body: formData,
      });

      if (!response.ok) throw new Error("Erreur lors de l’envoi");

      const result = await response.json();
      alert("Produit enregistré avec succès !");
      resetForm();
      setPreviewImage(null);
    } catch (error) {
      console.error("Erreur d'envoi :", error);
      alert("Échec de l'enregistrement.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="container mt-5">
      <Card className="shadow-lg">
        <Card.Header className="bg-primary text-white text-center">
          <h4>Créer un Nouveau Produit</h4>
        </Card.Header>
        <Card.Body>
          <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}
          >
            {({ setFieldValue }) => (
              <Form>
                <FormGroup className="mb-3">
                  <FormLabel>Code du produit</FormLabel>
                  <Field name="Codeproduit" className="form-control" />
                  <ErrorMessage name="Codeproduit" component="div" className="text-danger" />
                </FormGroup>

                <FormGroup className="mb-3">
                  <FormLabel>Nom du produit</FormLabel>
                  <Field name="Nomproduit" className="form-control" />
                  <ErrorMessage name="Nomproduit" component="div" className="text-danger" />
                </FormGroup>

                <FormGroup className="mb-3">
                  <FormLabel>Caractéristiques</FormLabel>
                  <Field name="Caracteristique" className="form-control" />
                  <ErrorMessage name="Caracteristique" component="div" className="text-danger" />
                </FormGroup>

                <FormGroup className="mb-3">
                  <FormLabel>Image du produit</FormLabel>
                  <input
                    type="file"
                    accept="image/*"
                    className="form-control"
                    onChange={(event) => {
                      const file = event.currentTarget.files[0];
                      setFieldValue("Photo", file);

                      if (file) {
                        const reader = new FileReader();
                        reader.onloadend = () => setPreviewImage(reader.result);
                        reader.readAsDataURL(file);
                      } else {
                        setPreviewImage(null);
                      }
                    }}
                  />
                </FormGroup>

                {previewImage && (
                  <div className="mb-3 text-center">
                    <p className="fw-bold">Aperçu de l’image :</p>
                    <img
                      src={previewImage}
                      alt="Aperçu"
                      className="img-thumbnail"
                      style={{ maxHeight: "200px" }}
                    />
                  </div>
                )}

                <div className="text-center">
                  <Button type="submit" variant="success" disabled={isSubmitting}>
                    {isSubmitting ? "Enregistrement..." : "Enregistrer le produit"}
                  </Button>
                </div>
              </Form>
            )}
          </Formik>
        </Card.Body>
      </Card>
    </div>
  );
}
export default ProduitForm;
