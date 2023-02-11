import React from "react";
import Menu from "./componentes/Menu";
import { Footer } from "./componentes/Footer";
import { Routes, Route } from "react-router-dom";
import Principal from "./componentes/Principal";
import PeliculaTodos from "./componentes/pelicula/PeliculaTodos";
import CrearPelicula from "./componentes/pelicula/CrearPelicula";
import EditarPelicula from "./componentes/pelicula/EditarPelicula";
import { Login } from "./componentes/Login";
import { RegistroUsuario } from "./componentes/RegistroUsuario";
import Home from "./componentes/Home";

const MisRoutes = () => {
  return (
    <div>
      <Menu />
      <Routes>
        <Route path="/genero" element={<Principal />} />
        <Route path="/peliculas" element={<PeliculaTodos />} />
        <Route path="/crear_peliculas" element={<CrearPelicula />} />
        <Route path="/editar_pelicula/:id" element={<EditarPelicula />} />
        <Route path="/registro" element={<RegistroUsuario />} />
        <Route path="/login" element={<Login />} />
        <Route exact path="/home" element={<Home />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default MisRoutes;
