import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Form, Button, Card, Alert, Row, Col } from 'react-bootstrap';
import { addPersonne, updatePersonne } from '../services/personneRestService';
import { getPersonneById } from '../services/personneGraphQLService';

const PersonneForm = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const isEditMode = !!id;
  const [loading, setLoading] = useState(isEditMode);
  const [error, setError] = useState('');
  
  const [formData, setFormData] = useState({
    id: '',
    nom: '',
    prenom: '',
    dateNaissance: '',
    adresse: '',
    telephone: ''
  });

  useEffect(() => {
    const fetchPersonne = async () => {
      if (isEditMode) {
        try {
          setLoading(true);
          const data = await getPersonneById(id);
          setFormData(data);
        } catch (err) {
          setError('Erreur lors de la récupération des données de la personne');
          console.error(err);
        } finally {
          setLoading(false);
        }
      }
    };

    fetchPersonne();
  }, [id, isEditMode]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (isEditMode) {
        await updatePersonne(formData);
      } else {
        await addPersonne(formData);
      }
      navigate('/');
    } catch (err) {
      setError(`Erreur lors du ${isEditMode ? 'la modification' : 'l\'ajout'} de la personne`);
      console.error(err);
    }
  };

  if (loading) {
    return <div className="text-center my-5">Chargement...</div>;
  }

  return (
    <Card>
      <Card.Header>
        <h3>{isEditMode ? 'Modifier une personne' : 'Ajouter une personne'}</h3>
      </Card.Header>
      <Card.Body>
        {error && <Alert variant="danger">{error}</Alert>}
        
        <Form onSubmit={handleSubmit}>
          <Row>
            <Col md={6}>
              <Form.Group className="mb-3">
                <Form.Label>Nom</Form.Label>
                <Form.Control
                  type="text"
                  name="nom"
                  value={formData.nom}
                  onChange={handleChange}
                  required
                  placeholder="Entrez le nom"
                />
              </Form.Group>
            </Col>
            
            <Col md={6}>
              <Form.Group className="mb-3">
                <Form.Label>Prénom</Form.Label>
                <Form.Control
                  type="text"
                  name="prenom"
                  value={formData.prenom}
                  onChange={handleChange}
                  required
                  placeholder="Entrez le prénom"
                />
              </Form.Group>
            </Col>
          </Row>
          
          <Row>
            <Col md={6}>
              <Form.Group className="mb-3">
                <Form.Label>Date de naissance</Form.Label>
                <Form.Control
                  type="date"
                  name="dateNaissance"
                  value={formData.dateNaissance}
                  onChange={handleChange}
                  required
                />
              </Form.Group>
            </Col>
            
            <Col md={6}>
              <Form.Group className="mb-3">
                <Form.Label>Téléphone</Form.Label>
                <Form.Control
                  type="tel"
                  name="telephone"
                  value={formData.telephone}
                  onChange={handleChange}
                  required
                  placeholder="Entrez le numéro de téléphone"
                />
              </Form.Group>
            </Col>
          </Row>
          
          <Form.Group className="mb-3">
            <Form.Label>Adresse</Form.Label>
            <Form.Control
              as="textarea"
              name="adresse"
              value={formData.adresse}
              onChange={handleChange}
              required
              placeholder="Entrez l'adresse"
              rows={3}
            />
          </Form.Group>
          
          <div className="d-flex justify-content-between">
            <Button variant="secondary" onClick={() => navigate('/')}>
              Annuler
            </Button>
            <Button variant="primary" type="submit">
              {isEditMode ? 'Modifier' : 'Ajouter'}
            </Button>
          </div>
        </Form>
      </Card.Body>
    </Card>
  );
};

export default PersonneForm;