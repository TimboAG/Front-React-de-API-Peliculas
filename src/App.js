import "./App.css";
import Menu from "./componentes/Menu";
import { Footer } from "./componentes/Footer";
import { Routes, Route } from "react-router-dom";
import Principal from "./componentes/Principal";
import PeliculaTodos from "./componentes/pelicula/PeliculaTodos";
import CrearPelicula from "./componentes/pelicula/CrearPelicula";

function App() {
  return (
    <div className="App">
      <Menu />
      <Routes>
        <Route path="/genero" element={<Principal />} />
        <Route path="/peliculas" element={<PeliculaTodos />} />
        <Route path="/creear_peliculas" element={<CrearPelicula />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
