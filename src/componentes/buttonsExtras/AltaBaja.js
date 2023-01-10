import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { FETCH_PELICULA } from "./../constants/fetch/Fetch.pelicula";

const AltaBaja = ({ boton, id, ab }) => {
  const navigate = useNavigate();

  const [pelicula, setPelicula] = useState(ab);

  const miPeliAlta = () => {
    FETCH_PELICULA.FETCH_ALTA({ setPelicula, id });
  };
  const miPeliBaja = () => {
    FETCH_PELICULA.FETCH_BAJA({ setPelicula, id });
  };

  // useEffect(() => {
  //   altaBaja();
  // }, []);

  const altaBaja = () => {
    switch (boton) {
      case "pelicula":
        if (pelicula === true) {
          miPeliAlta();
          window.location.reload(true);
        } else {
          miPeliBaja();
          window.location.reload(true);
        }
        break;

      // return navigate(`/editar_pelicula/${id}`);
      case "personaje":
        return navigate("/editar_personaje");
      default:
        console.log("default");
        break;
    }
  };

  return (
    <div>
      <Button
        variant="dark "
        type="submit"
        id="botonTexto"
        onClick={() => {
          altaBaja();
        }}
      >
        {pelicula ? "Alta" : "Baja"}
      </Button>
    </div>
  );
};

export default AltaBaja;
