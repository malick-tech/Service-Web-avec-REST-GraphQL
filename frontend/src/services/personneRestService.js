import axios from 'axios';

const API_URL = 'http://localhost:8585/api';

export const addPersonne = async (personne) => {
    try {
        const response = await axios.post(`${API_URL}/personne`, personne);
        return response.data;
    } catch (error) {
        console.error('Erreur lors de l\'ajout d\'une personne:', error);
        throw error;
    }
    };

    export const updatePersonne = async (personne) => {
    try {
        const response = await axios.put(`${API_URL}/personne`, personne);
        return response.data;
    } catch (error) {
        console.error('Erreur lors de la modification d\'une personne:', error);
        throw error;
    }
    };

    export const deletePersonne = async (id) => {
    try {
        const response = await axios.delete(`${API_URL}/personne/${id}`);
        return response.data;
    } catch (error) {
        console.error('Erreur lors de la suppression d\'une personne:', error);
        throw error;
    }
};