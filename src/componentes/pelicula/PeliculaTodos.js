import React, { useEffect, useState } from "react";
import { FETCH_PELICULA } from "../constants/fetch/Fetch.pelicula";
import CardsPeliculas from "./cards/CardsPeliculas";

const PeliculaTodos = () => {
  const [pelicula, setPelicula] = useState();

  const miPelis = () => {
    FETCH_PELICULA.FETCH_TODOS({ setPelicula });
  };

  useEffect(() => {
    miPelis();
  }, []);

  const load = () => {
    if (pelicula != null) {
      return <CardsPeliculas pelicula={pelicula} />;
    }
  };

  console.log("esto es peli todos", pelicula);
  return <div> {load()}</div>;
};

export default PeliculaTodos;
