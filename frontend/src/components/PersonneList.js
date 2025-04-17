import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Table, Button, Card, Alert, Spinner } from 'react-bootstrap';
import { getPersonnes } from '../services/personneGraphQLService';
import { deletePersonne } from '../services/personneRestService';

const PersonneList = () => {
    const [personnes, setPersonnes] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [successMessage, setSuccessMessage] = useState('');

    const fetchPersonnes = async () => {
        try {
        setLoading(true);
        const data = await getPersonnes();
        setPersonnes(data);
        setError(null);
        } catch (err) {
        setError('Erreur lors du chargement des données');
        console.error(err);
        } finally {
        setLoading(false);
        }
    };

    useEffect(() => {
        fetchPersonnes();
    }, []);

    const handleDelete = async (id) => {
        if (window.confirm('Êtes-vous sûr de vouloir supprimer cette personne ?')) {
        try {
            await deletePersonne(id);
            setSuccessMessage('Personne supprimée avec succès');
            fetchPersonnes(); // Rafraîchir la liste
            
            // Effacer le message après 3 secondes
            setTimeout(() => {
            setSuccessMessage('');
            }, 3000);
        } catch (err) {
            setError('Erreur lors de la suppression');
        }
        }
    };

    if (loading) {
        return (
        <div className="text-center my-5">
            <Spinner animation="border" role="status" variant="primary">
            <span className="visually-hidden">Chargement...</span>
            </Spinner>
        </div>
        );
    }

    return (
        <Card>
        <Card.Header className="d-flex justify-content-between align-items-center">
            <h3>Liste des Personnes</h3>
            <Link to="/add">
            <Button variant="success">
                <i className="fas fa-plus"></i> Ajouter
            </Button>
            </Link>
        </Card.Header>
        <Card.Body>
            {error && <Alert variant="danger">{error}</Alert>}
            {successMessage && <Alert variant="success">{successMessage}</Alert>}
            
            {personnes.length === 0 ? (
            <Alert variant="info">Aucune personne n'est enregistrée.</Alert>
            ) : (
            <Table striped bordered hover responsive>
                <thead>
                <tr>
                    <th>ID</th>
                    <th>Nom</th>
                    <th>Prénom</th>
                    <th>Date de naissance</th>
                    <th>Adresse</th>
                    <th>Téléphone</th>
                    <th>Actions</th>
                </tr>
                </thead>
                <tbody>
                {personnes.map((personne) => (
                    <tr key={personne.id}>
                    <td>{personne.id}</td>
                    <td>{personne.nom}</td>
                    <td>{personne.prenom}</td>
                    <td>{personne.dateNaissance}</td>
                    <td>{personne.adresse}</td>
                    <td>{personne.telephone}</td>
                    <td>
                        <Link to={`/edit/${personne.id}`} className="btn btn-warning btn-sm me-2">
                        <i className="fas fa-edit"></i> Modifier
                        </Link>
                        <Button 
                        variant="danger" 
                        size="sm" 
                        onClick={() => handleDelete(personne.id)}
                        >
                        <i className="fas fa-trash"></i> Supprimer
                        </Button>
                    </td>
                    </tr>
                ))}
                </tbody>
            </Table>
            )}
        </Card.Body>
        </Card>
    );
};

export default PersonneList;