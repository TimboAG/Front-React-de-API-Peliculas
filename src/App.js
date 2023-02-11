import "./App.css";
import { Footer } from "./componentes/Footer";
import { Routes, Route, Link } from "react-router-dom";
import Principal from "./componentes/Principal";
import PeliculaTodos from "./componentes/pelicula/PeliculaTodos";
import CrearPelicula from "./componentes/pelicula/CrearPelicula";
import EditarPelicula from "./componentes/pelicula/EditarPelicula";
import { Login } from "./componentes/Login";
import { RegistroUsuario } from "./componentes/RegistroUsuario";
import Home from "./componentes/Home";
import AuthService from "./componentes/service/Usuario.service";
import { Component } from "react";
import Profile from "./componentes/Profile";
import Menu from "./componentes/Menu";

class App extends Component {
  render() {
    return (
      <div>
        <Menu />
        {/* <nav className="navbar navbar-expand navbar-dark bg-dark">
          <Link to={"/"} className="navbar-brand">
            yiutiut
          </Link>
          <div className="navbar-nav mr-auto">
            <li className="nav-item">
              <Link to={"/home"} className="nav-link">
                Home
              </Link>
            </li>

            {showUserBoard && (
              <li className="nav-item">
                <Link to={"/crear_peliculas"} className="nav-link">
                  Crear Pelicula
                </Link>
                <Link to={"/editar_pelicula/:id"} className="nav-link">
                  Editar Pelicula
                </Link>
              </li>
            )}

            {showAdminBoard && (
              <li className="nav-item">
                <Link to={"/crear_peliculas"} className="nav-link">
                  Crear Pelicula
                </Link>
                <Link to={"/editar_pelicula/:id"} className="nav-link">
                  Editar Pelicula
                </Link>
              </li>
            )}

            {currentUser && (
              <li className="nav-item">
                <Link to={"/peliculas"} className="nav-link">
                  Peliculas
                </Link>
              </li>
            )}
          </div>

          {currentUser ? (
            <div className="navbar-nav ml-auto">
              <li className="nav-item">
                <Link to={"/profile"} className="nav-link">
                  {currentUser.username}
                </Link>
              </li>
              <li className="nav-item">
                <a href="/login" className="nav-link" onClick={this.logOut}>
                  LogOut
                </a>
              </li>
            </div>
          ) : (
            <div className="navbar-nav ml-auto">
              <li className="nav-item">
                <Link to={"/login"} className="nav-link">
                  Iniciar Sesion
                </Link>
              </li>

              <li className="nav-item">
                <Link to={"/registro"} className="nav-link">
                  Registro
                </Link>
              </li>
            </div>
          )}
        </nav> */}
        <div className="container mt-3">
          <Routes>
            <Route path="/genero" element={<Principal />} />
            <Route path="/peliculas" element={<PeliculaTodos />} />
            <Route path="/crear_peliculas" element={<CrearPelicula />} />
            <Route path="/editar_pelicula/:id" element={<EditarPelicula />} />
            <Route path="/registro" element={<RegistroUsuario />} />
            <Route path="/login" element={<Login />} />
            <Route path="/profile" element={<Profile />} />
            <Route exact path="/home" element={<Home />} />
          </Routes>
        </div>
        <Footer />
        {/* <AuthVerify logOut={logOut}/> */}
      </div>
    );
  }
}

export default App;
