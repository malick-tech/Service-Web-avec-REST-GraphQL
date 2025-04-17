# Service Web avec REST & GraphQL

## 📌 Description
Ce projet est une application web complète permettant la gestion d'une table **Personne** à travers des services web **REST** et **GraphQL**.  
Il a été réalisé dans le cadre d'un examen du Master 2 Réseaux et Systèmes à l'Université Assane Seck de Ziguinchor.

## 🧱 Architecture
- **Frontend** : React.js
- **Backend** : Spring Boot
- **Base de données** : MySQL
- **API Web Services** :
  - **REST** : pour les opérations d'ajout, de modification et de suppression
  - **GraphQL** : pour la recherche et la consultation (listing)

## ⚙️ Fonctionnalités
- ✅ Ajouter une personne (REST)
- ✅ Modifier une personne (REST)
- ✅ Supprimer une personne (REST)
- ✅ Lister toutes les personnes (GraphQL)
- ✅ Rechercher une personne par critères (GraphQL)

## 💻 Prérequis
- Java 17 ou supérieur
- Node.js 16.x ou supérieur
- MySQL 8.0
- Maven ou Gradle (selon la configuration du projet)

## 🚀 Installation

### 1. Base de données
```bash
# Créer la base de données
mysql -u root -p
CREATE DATABASE personnes_db;
```

### 2. Backend (Spring Boot)
```bash
# Cloner le dépôt
git clone https://github.com/username/service-web-rest-graphql.git
cd service-web-rest-graphql/backend

# Configurer la base de données dans src/main/resources/application.properties
# spring.datasource.url=jdbc:mysql://localhost:3306/personnes_db
# spring.datasource.username=root
# spring.datasource.password=votre_mot_de_passe

# Lancer l'application
./mvnw spring-boot:run
```

### 3. Frontend (React)
```bash
cd ../frontend
npm install
npm start
```

## 🔍 Utilisation

### Endpoints REST
- **POST** `/api/personne` - Ajouter une nouvelle personne
- **PUT** `/api/personne/{id}` - Mettre à jour une personne
- **DELETE** `/api/personnes/{id}` - Supprimer une personne

### GraphQL
L'endpoint GraphQL est accessible à l'URL : `http://localhost:8080/graphql`

#### Exemples de requêtes GraphQL

**Lister toutes les personnes :**
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

**Rechercher par critères :**
```graphql
query {
  rechercherPersonnes(id: 1) {
    id
    nom
    prenom
    dateNaissance
    adresse
    telephone
  }
}
```

## 🧪 Tests
```bash
# Tests Backend
cd backend
./mvnw test

# Tests Frontend
cd frontend
npm test
```

## 📚 Documentation
- Documentation de l'API REST : `http://localhost:8585/swagger-ui.html`
- Interface GraphQL : `http://localhost:8585/graphiql`

## 👨‍💻 Auteurs
- El Hadji Malick Seck, Abdoulaye Seck et Sirifou Balde – Master 2 Réseaux & Systèmes – Université Assane Seck de Ziguinchor

## 📝 Licence
Ce projet est développé dans un cadre pédagogique. Libre d'utilisation à des fins éducatives.
