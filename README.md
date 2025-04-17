# Service Web avec REST & GraphQL

## 📌 Description

Ce projet est une application web complète permettant la gestion d'une table **Personne** à travers des services web **REST** et **GraphQL**.  
Il a été réalisé dans le cadre d’un examen du Master 2 Réseaux et Systèmes.

---

## 🧱 Architecture

- **Frontend** : React.js
- **Backend** : Spring Boot
- **Base de données** : MySQL
- **API Web Services** :
  - **REST** : pour les opérations d'ajout, de modification et de suppression
  - **GraphQL** : pour la recherche et la consultation (listing)

---

## ⚙️ Fonctionnalités

- ✅ Ajouter une personne (REST)
- ✅ Modifier une personne (REST)
- ✅ Supprimer une personne (REST)
- ✅ Lister toutes les personnes (GraphQL)
- ✅ Rechercher une personne par critères (GraphQL)

---

## 🚀 Installation

### 1. Backend (Spring Boot)

```bash
cd backend
./mvnw spring-boot:run
```

> Assurez-vous que MySQL est lancé et que la base de données est bien configurée dans `application.properties`.

### 2. Frontend (React)

```bash
cd frontend
npm install
npm start
```

> L’application React consomme les APIs REST et GraphQL exposées par le backend.

---

## 🧪 Exemple de requête GraphQL

```graphql
query {
  personnes {
    id
    nom
    prenom
    dateNaissance
    adresse
    telephone
  }
}
```

---

## 👨‍💻 Auteurs

- El Hadji Malick Seck, Abdoulaye Seck et Sirifou Balde, – Master 2 Réseaux & Systèmes – Université Assane Seck de Ziguinchor

---

## 📝 Licence

Ce projet est développé dans un cadre pédagogique. Libre à des fins éducatives.
