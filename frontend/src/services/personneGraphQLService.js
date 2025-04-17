import { ApolloClient, InMemoryCache, gql } from '@apollo/client';

const client = new ApolloClient({
    uri: 'http://localhost:8585/graphql',
    cache: new InMemoryCache()
    });

    export const LIST_PERSONNES = gql`
    query {
        listerPersonne {
        id
        nom
        prenom
        dateNaissance
        adresse
        telephone
        }
    }
    `;

    export const GET_PERSONNE = gql`
    query GetPersonne($id: ID!) {
        rechercherPersonne(id: $id) {
        id
        nom
        prenom
        dateNaissance
        adresse
        telephone
        }
    }
    `;

    export const getPersonnes = async () => {
    try {
        const { data } = await client.query({
            query: LIST_PERSONNES,
            fetchPolicy: 'network-only'
        });
        return data.listerPersonne;
    } catch (error) {
        console.error('Erreur lors de la récupération des personnes:', error);
        throw error;
    }
    };

    export const getPersonneById = async (id) => {
    try {
        const { data } = await client.query({
        query: GET_PERSONNE,
        variables: { id },
        fetchPolicy: 'network-only'
        });
        return data.rechercherPersonne;
    } catch (error) {
        console.error(`Erreur lors de la récupération de la personne avec l'ID ${id}:`, error);
        throw error;
    }
};