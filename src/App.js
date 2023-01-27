import "./App.css";
import Menu from "./componentes/Menu";
import { Footer } from "./componentes/Footer";
import { Routes, Route } from "react-router-dom";
import Principal from "./componentes/Principal";
import PeliculaTodos from "./componentes/pelicula/PeliculaTodos";
import CrearPelicula from "./componentes/pelicula/CrearPelicula";
import EditarPelicula from "./componentes/pelicula/EditarPelicula";
import { Registro } from "./componentes/Registro";
import { Login } from "./componentes/Login";

function App() {
  return (
    <div className="App">
      <Menu />
      <Routes>
        <Route path="/genero" element={<Principal />} />
        <Route path="/peliculas" element={<PeliculaTodos />} />
        <Route path="/crear_peliculas" element={<CrearPelicula />} />
        <Route path="/editar_pelicula/:id" element={<EditarPelicula />} />
        <Route path="/registro" element={<Registro />} />
        <Route path="/login" element={<Login />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
