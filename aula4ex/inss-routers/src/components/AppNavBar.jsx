// src/components/AppNavbar.jsx
import React from 'react';
import { Navbar, Nav, Container, Button } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

const AppNavbar = ({ user, onLogout }) => {
  return (
    <Navbar bg="primary" variant="dark" expand="lg">
      <Container>
        <Navbar.Brand href="/">Calculadora</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <LinkContainer to="/">
              <Nav.Link>Início</Nav.Link>
            </LinkContainer>
            {user ? (
              <>
                <LinkContainer to="/dados-pessoais">
                  <Nav.Link>Dados Pessoais</Nav.Link>
                </LinkContainer>
                <LinkContainer to="/dados-trabalho">
                  <Nav.Link>Dados de Trabalho</Nav.Link>
                </LinkContainer>
                <LinkContainer to="/resultado">
                  <Nav.Link>Resultado</Nav.Link>
                </LinkContainer>
              </>
            ) : (
              <LinkContainer to="/login">
                <Nav.Link>Login</Nav.Link>
              </LinkContainer>
            )}
          </Nav>
          {user && (
            <Button variant="outline-light" onClick={onLogout}>
              Sair
            </Button>
          )}
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default AppNavbar;
