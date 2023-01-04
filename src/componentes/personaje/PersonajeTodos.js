import React, { useEffect, useState } from "react";
import { FETCH_PERSONAJE } from "../constants/fetch/Fetch.personaje";

const PersonajeTodos = () => {
  const [personaje, setPersonaje] = useState(1);

  useEffect(() => {
    if (personaje != null) {
      FETCH_PERSONAJE.FETCH_TODOS({ setPersonaje });
    }
  }, []);
  console.log("esto es peli todos", personaje);
  return <div>ESTO ES PRINCIPAL</div>;
};

export default PersonajeTodos;
