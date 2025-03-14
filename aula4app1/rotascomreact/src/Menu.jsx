import { NavLink, Outlet } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

const Menu = () => {
  return (
    <>
      <Navbar expand="lg" className="bg-body-tertiary">
        <Container>
          <NavLink to="/" className="navbar-brand">React-Router-Dom</NavLink>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              {/* Correct NavLinks */}
              <Nav.Link as={NavLink} to="/">Home</Nav.Link>
              <Nav.Link as={NavLink} to="/sobre">Sobre</Nav.Link>
              <NavDropdown title="Ações" id="basic-nav-dropdown">
                <NavDropdown.Item as={NavLink} to="/rotas">Rotas</NavDropdown.Item>
                <NavDropdown.Item as={NavLink} to="/rotas/2025">Rotas 2025</NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      {/* This is where child components get rendered */}
      <Outlet />  
    </>
  );
};

export default Menu;
