import React from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Nav, Container } from 'react-bootstrap';

const Layout = ({ children }) => {
  return (
    <>
      <Navbar bg="primary" variant="dark" expand="lg" className="mb-4">
        <Container>
          <Navbar.Brand as={Link} to="/">Gestion des Personnes</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link as={Link} to="/">Liste</Nav.Link>
              <Nav.Link as={Link} to="/add">Ajouter</Nav.Link>
              <Nav.Link as={Link} to="/search">Rechercher</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      
      <Container className="mb-5">
        {children}
      </Container>
      
      <footer className="bg-light py-3 mt-5">
        <Container className="text-center">
          <p className="mb-0">Application de Gestion des Personnes &copy; {new Date().getFullYear()}</p>
        </Container>
      </footer>
    </>
  );
};

export default Layout;