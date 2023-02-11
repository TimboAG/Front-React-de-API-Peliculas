import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import logo from "../assets/img/logo.png";
import "../assets/styles/Styles.css";
import Image from "react-bootstrap/Image";
import { Component } from "react";
import AuthService from "./../componentes/service/Usuario.service";

class Menu extends Component {
  constructor(props) {
    super(props);
    this.logOut = this.logOut.bind(this);

    this.state = {
      currentUser: undefined,
      showUserBoard: false,
      showAdminBoard: false,
    };
  }

  componentDidMount() {
    const user = AuthService.getCurrentUser();

    if (user) {
      this.setState({
        currentUser: AuthService.getCurrentUser(),
        showUserBoard: user.roles.includes("ROLE_USER"),
        showAdminBoard: user.roles.includes("ROLE_ADMIN"),
      });
    }
  }

  logOut() {
    AuthService.logout();
  }

  render() {
    const { currentUser, showUserBoard, showAdminBoard } = this.state;
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
                {showAdminBoard && (
                  <NavDropdown title="Administrar" id="collasible-nav-dropdown">
                    <NavDropdown.Item href="/crear_peliculas">
                      Agregar pelicula
                    </NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="/">
                      Agregar personaje
                    </NavDropdown.Item>
                  </NavDropdown>
                )}
              </Nav>
              <Nav>
                {currentUser ? (
                  <div className="navbar-nav ml-auto">
                    <li className="nav-item">
                      <Nav.Link href="/profile" className="nav-link">
                        {currentUser.username}
                      </Nav.Link>
                    </li>
                    <li className="nav-item">
                      <a
                        href="/login"
                        className="nav-link"
                        onClick={this.logOut}
                      >
                        Cerrar Sesion
                      </a>
                    </li>
                  </div>
                ) : (
                  <>
                    <Nav.Link href="/login">Iniciar sesión</Nav.Link>
                    <Nav.Link eventKey={2} href="/registro">
                      Registrarse
                    </Nav.Link>
                  </>
                )}
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </>
    );
  }
}

export default Menu;
