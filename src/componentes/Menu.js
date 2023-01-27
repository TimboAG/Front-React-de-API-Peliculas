import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import logo from "../assets/img/logo.png";
import "../assets/styles/Styles.css";
import Image from "react-bootstrap/Image";

const Menu = () => {
  return (
    <>
      <Navbar
        collapseOnSelect
        expand="lg"
        bg="dark"
        variant="dark"
        className="menu"
      >
        <Container>
          <Navbar.Brand href="/">
            <Image src={logo} alt="logo" className="logoNav"></Image>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="/peliculas">Peliculas</Nav.Link>
              <NavDropdown title="Administrar" id="collasible-nav-dropdown">
                <NavDropdown.Item href="/crear_peliculas">
                  Agregar pelicula
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="/">Agregar personaje</NavDropdown.Item>
              </NavDropdown>
            </Nav>
            <Nav>
              <Nav.Link href="/login">Iniciar sesión</Nav.Link>
              <Nav.Link eventKey={2} href="/registro">
                Registrarse
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default Menu;
