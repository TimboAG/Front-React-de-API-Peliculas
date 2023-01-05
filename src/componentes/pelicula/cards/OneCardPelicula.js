import React, { useEffect, useState } from "react";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
// import { FETCH_IMAGEN } from "../../constants/fetch/Fetch.imagen";
import { API_IMAGEN } from "../../constants/Api.constanst.imagen";

const OneCard = ({ myProps }) => {
  const [imagen2, setImagen2] = useState(1);
  const onClickHandler = async () => {
    var requestOptions = {
      method: "GET",
      redirect: "follow",
    };
    const result = await fetch(API_IMAGEN.IMAGEN(myProps.id), {
      requestOptions,
    });
    const blob = await result.blob();
    const url = await URL.createObjectURL(blob);
    setImagen2(url);
    console.log("esto es url", url);
    console.log("esto es blob", blob);
  };
  useEffect(() => {
    onClickHandler();
  }, []);
  console.log("ESTO ES IMAGEN ", imagen2);

  if (imagen2 !== 1) {
    // const cardList = imagen2.map((p) => (
    //   <div>
    //     <img src={p} alt="Imagen" />;
    //   </div>
    // ));
    return (
      <Card style={{ width: "18rem" }}>
        {/* {cardList} */}
        <img src={imagen2} alt="Imagen" />;
        <Card.Body>
          <Card.Title> {myProps.titulo} </Card.Title>
        </Card.Body>
        <ListGroup className="list-group-flush">
          <ListGroup.Item>
            Fecha de lanzamiento: {myProps.fechaCreacion}{" "}
          </ListGroup.Item>
          <ListGroup.Item>Calificacion: {myProps.calificacion} </ListGroup.Item>
        </ListGroup>
        <ListGroup.Item> Genero: {myProps.genero} </ListGroup.Item>
        <Card.Body>
          <Card.Link href={myProps.youtubeTrailerId}>Ver trailer</Card.Link>
        </Card.Body>
      </Card>
    );
  } else {
    return <div>No hay imagenes cargadas</div>;
  }
};

export default OneCard;
