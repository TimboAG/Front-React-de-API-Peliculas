import React, { useEffect } from "react";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const Editar = ({ id, boton }) => {
  const navigate = useNavigate();

  useEffect(() => {});

  const editar = () => {
    console.log("esto es myProps", id);

    //var data = { id: id };
    // data = JSON.stringify(id);

    switch (boton) {
      case "pelicula":
        return navigate(`/editar_pelicula/${id}`);
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
        Editar
      </Button>
    </div>
  );
};

export default Editar;
