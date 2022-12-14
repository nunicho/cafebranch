import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {Link, NavLink} from 'react-router-dom'


const Menu = () => {
    return (
 
    <Navbar bg="danger" variant="dark" expand="lg">
      <Container>
        <Navbar.Brand as={Link} to="/">
          Cafe Branch
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <NavLink className="nav-item nav-link" to="/">
              Inicio
            </NavLink>
            <NavLink className="nav-item nav-link" to="/administrador">
              Administrar
            </NavLink>
            <NavLink className="nav-item nav-link" to="/login">
              Login
            </NavLink>
            <NavLink className="nav-item nav-link" to="/registrar">
              Registrar
            </NavLink>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
     
    
    );
};

export default Menu;