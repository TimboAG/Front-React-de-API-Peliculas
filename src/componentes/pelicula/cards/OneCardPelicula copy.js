import React, { useEffect, useState } from "react";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import { API_IMAGEN } from "../../constants/Api.constanst.imagen";
import Editar from "../../buttonsExtras/Editar";
import AltaBaja from "../../buttonsExtras/AltaBaja";
import Eliminar from "../../buttonsExtras/Eliminar";
import "../../../assets/styles/Styles.css";

const OneCard = ({ myProps }) => {
  const [imagen2, setImagen2] = useState(1);
  const [boton] = useState("pelicula");
  const [id] = useState(myProps.id);
  const [ab] = useState(myProps.eliminado);

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
  };
  useEffect(() => {
    onClickHandler();
  }, []);

  const estrellas = () => {
    switch (myProps.calificacion) {
      case 1:
        return " ★";
      case 2:
        return " ★★";
      case 3:
        return " ★★★";
      case 4:
        return " ★★★★";
      case 5:
        return " ★★★★★";
      default:
        return "";
    }
  };

  if (imagen2 !== 1) {
    if (myProps.eliminado === true) {
      return (
        <Card
          style={{ width: "18rem", backgroundColor: "#cb6c78" }}
          className="miOneCard"
        >
          <Card.Img variant="top" src={imagen2} className="imgCard" />

          {/* <Card.Img variant="top" src={imagen2} src="holder.js/100px180" /> */}
          {/* <img src={imagen2} alt="Imagen" style={{ width: "18rem" }} />; */}
          <Card.Body>
            <Card.Title> {myProps.titulo} </Card.Title>
          </Card.Body>
          <ListGroup className="list-group-flush">
            <ListGroup.Item>
              Fecha de lanzamiento: {myProps.fechaCreacion}{" "}
            </ListGroup.Item>
            <ListGroup.Item>
              Calificacion: {myProps.calificacion} {estrellas()}
            </ListGroup.Item>
          </ListGroup>
          <ListGroup.Item> Genero: {myProps.genero} </ListGroup.Item>
          <Card.Body>
            <Card.Link href={myProps.youtubeTrailerId}>Ver trailer</Card.Link>
          </Card.Body>
          <Editar boton={boton} id={id}></Editar>
          <br></br>
          <AltaBaja boton={boton} id={id} ab={ab}></AltaBaja>
          <br></br>
          <Eliminar boton={boton} id={id}></Eliminar>
        </Card>
      );
    } else {
      return (
        <Card style={{ width: "18rem" }} className="miOneCard">
          <img src={imagen2} alt="Imagen" />;
          <Card.Body>
            <Card.Title> {myProps.titulo} </Card.Title>
          </Card.Body>
          <ListGroup className="list-group-flush">
            <ListGroup.Item>
              Fecha de lanzamiento: {myProps.fechaCreacion}{" "}
            </ListGroup.Item>
            <ListGroup.Item>
              Calificacion: {myProps.calificacion} {estrellas()}
            </ListGroup.Item>
          </ListGroup>
          <ListGroup.Item> Genero: {myProps.genero} </ListGroup.Item>
          <Card.Body>
            <Card.Link href={myProps.youtubeTrailerId}>Ver trailer</Card.Link>
          </Card.Body>
          <Editar boton={boton} id={id}></Editar>
          <br></br>
          <AltaBaja boton={boton} id={id} ab={ab}></AltaBaja>
          <br></br>
          <Eliminar boton={boton} id={id}></Eliminar>
        </Card>
      );
    }
  } else {
    return <div>No hay peliculas cargadas</div>;
  }
};

export default OneCard;
