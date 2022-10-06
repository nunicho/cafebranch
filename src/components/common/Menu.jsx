import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {Link, NavLink} from 'react-router-dom'


const Menu = () => {
    return (
 <>
      <Navbar bg="danger" variant="dark">
        <Container>
          <Navbar.Brand as={Link} to='/'>Café Branch</Navbar.Brand>
          <Nav className="me-auto">
            <NavLink  className="nav-item nav-link" to='/'>Inicio</NavLink>
            <NavLink className="nav-item nav-link" to='/administrador' >Administrar</NavLink>
          </Nav>
        </Container>
      </Navbar>
     
    </>
    );
};

export default Menu;