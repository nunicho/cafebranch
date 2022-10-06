import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';


const Menu = () => {
    return (
 <>
      <Navbar bg="danger" variant="dark">
        <Container>
          <Navbar.Brand href="#home">Cafetería</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Inicio</Nav.Link>
            <Nav.Link href="#features">Administrar</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
     
    </>
    );
};

export default Menu;