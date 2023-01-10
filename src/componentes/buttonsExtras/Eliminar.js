import React, { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { FETCH_PELICULA } from "../constants/fetch/Fetch.pelicula";

const Eliminar = ({ boton, id }) => {
  const navigate = useNavigate();
  const [pelicula, setPelicula] = useState();

  useEffect(() => {});

  const editar = () => {
    const miPeliEliminar = () => {
      FETCH_PELICULA.FETCH_ELIMINAR({ id, setPelicula });
      window.location.reload(true);
    };
    switch (boton) {
      case "pelicula":
        miPeliEliminar();
        break;
      case "personaje":
        return navigate("/editar_personaje");
      default:
        console.log("default");
        break;
    }
  };
  return (
    <div>
      <Button variant="dark " type="submit" onClick={editar}>
        Eliminar
      </Button>
    </div>
  );
};

export default Eliminar;
