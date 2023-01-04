import React, { useEffect, useState } from "react";
import { FETCH_GENERO } from "../constants/fetch/Fetch.genero";

const GeneroTodos = () => {
  const [genero, setGenero] = useState(1);

  useEffect(() => {
    if (genero != null) {
      FETCH_GENERO.FETCH_TODOS({ setGenero });
    }
  }, []);
  console.log("esto es genero todos", genero);
  return <div>ESTO ES PRINCIPAL</div>;
};

export default GeneroTodos;
