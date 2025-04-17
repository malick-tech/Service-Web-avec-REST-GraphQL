import React, { useState } from 'react';
import { Form, Button, Card, Alert, Row, Col } from 'react-bootstrap';
import { getPersonneById } from '../services/personneGraphQLService';
import { Link } from 'react-router-dom';

const PersonneSearch = () => {
    const [searchId, setSearchId] = useState('');
    const [personne, setPersonne] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');
    const [searched, setSearched] = useState(false);

    const handleSearch = async (e) => {
        e.preventDefault();
        
        if (!searchId || isNaN(searchId)) {
        setError('Veuillez entrer un ID valide');
        return;
        }
        
        try {
        setLoading(true);
        setError('');
        setSearched(true);
        
        const data = await getPersonneById(searchId);
        setPersonne(data);
        } catch (err) {
        setError('Personne non trouvée ou erreur de recherche');
        setPersonne(null);
        console.error(err);
        } finally {
        setLoading(false);
        }
    };

    return (
        <Card>
        <Card.Header>
            <h3>Rechercher une personne</h3>
        </Card.Header>
        <Card.Body>
            <Form onSubmit={handleSearch}>
            <Row>
                <Col md={8}>
                <Form.Group className="mb-3">
                    <Form.Label>ID de la personne</Form.Label>
                    <Form.Control
                    type="number"
                    value={searchId}
                    onChange={(e) => setSearchId(e.target.value)}
                    required
                    placeholder="Entrez l'ID de la personne"
                    />
                </Form.Group>
                </Col>
                <Col md={4} className="d-flex align-items-end">
                <Button variant="primary" type="submit" className="w-100 mb-3">
                    Rechercher
                </Button>
                </Col>
            </Row>
            </Form>

            {loading && <div className="text-center my-3">Recherche en cours...</div>}
            {error && <Alert variant="danger">{error}</Alert>}
            
            {personne && (
            <Card className="mt-4">
                <Card.Header className="bg-light">
                <h4>Résultat de la recherche</h4>
                </Card.Header>
                <Card.Body>
                <Row>
                    <Col md={6}>
                    <p><strong>ID:</strong> {personne.id}</p>
                    <p><strong>Nom:</strong> {personne.nom}</p>
                    <p><strong>Prénom:</strong> {personne.prenom}</p>
                    </Col>
                    <Col md={6}>
                    <p><strong>Date de naissance:</strong> {personne.dateNaissance}</p>
                    <p><strong>Téléphone:</strong> {personne.telephone}</p>
                    <p><strong>Adresse:</strong> {personne.adresse}</p>
                    </Col>
                </Row>
                <div className="mt-3">
                    <Link to={`/edit/${personne.id}`} className="btn btn-warning me-2">
                    <i className="fas fa-edit"></i> Modifier
                    </Link>
                    <Link to="/" className="btn btn-primary">
                    <i className="fas fa-list"></i> Retour à la liste
                    </Link>
                </div>
                </Card.Body>
            </Card>
            )}
            
            {searched && !personne && !error && (
            <Alert variant="info">Aucune personne trouvée avec cet ID.</Alert>
            )}
        </Card.Body>
        </Card>
    );
};

export default PersonneSearch;