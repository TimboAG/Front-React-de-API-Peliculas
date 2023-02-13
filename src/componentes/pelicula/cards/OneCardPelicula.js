import React, { useEffect, useState } from "react";
import Card from "react-bootstrap/Card";
import { API_IMAGEN } from "../../constants/Api.constanst.imagen";
import Editar from "../../buttonsExtras/Editar";
import AltaBaja from "../../buttonsExtras/AltaBaja";
import Eliminar from "../../buttonsExtras/Eliminar";
import "../../../assets/styles/Styles.css";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import ReactPlayer from "react-player";
import AuthService from "../../service/Usuario.service";

const OneCard = ({ myProps }) => {
  const [imagen2, setImagen2] = useState(1);
  const [boton] = useState("pelicula");
  const [id] = useState(myProps.id);
  const [ab] = useState(myProps.eliminado);
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
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

  const [showAdminBoard, setShowAdminBoard] = useState(false);

  useEffect(() => {
    const user2 = AuthService.getCurrentUser();
    if (user2) {
      setShowAdminBoard(user2.roles.includes("ROLE_ADMIN"));
    }
  }, [setShowAdminBoard]);

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
        <>
          <Card
            style={{ width: "18rem", backgroundColor: "#cb6c78" }}
            className="miOneCard"
          >
            <img src={imagen2} alt="Imagen" />;
            <Button variant="primary" onClick={handleShow}>
              Ver detalle de la pelicula
            </Button>
            <Modal
              show={show}
              onHide={handleClose}
              backdrop="static"
              keyboard={false}
            >
              <Modal.Header closeButton>
                <Modal.Title>{myProps.titulo} </Modal.Title>
              </Modal.Header>
              <ReactPlayer
                url={myProps.youtubeTrailerId}
                className="react-player"
                playing
                width="100%"
                height="100%"
                controls={false}
              />
              <Modal.Body>
                Fecha de lanzamiento: {myProps.fechaCreacion}
              </Modal.Body>
              <Modal.Body>
                Calificacion: {myProps.calificacion} {estrellas()}
              </Modal.Body>
              <Modal.Body>Genero: {myProps.genero}</Modal.Body>
              <Modal.Footer>
                {showAdminBoard ? (
                  <>
                    <Editar boton={boton} id={id}></Editar>
                    <AltaBaja boton={boton} id={id} ab={ab}></AltaBaja>
                    <Eliminar boton={boton} id={id}></Eliminar>
                    <Button variant="secondary" onClick={handleClose}>
                      Close
                    </Button>
                  </>
                ) : (
                  <Button variant="secondary" onClick={handleClose}>
                    Close
                  </Button>
                )}
              </Modal.Footer>
            </Modal>
          </Card>
        </>
        // <Card
        //   style={{ width: "18rem", backgroundColor: "#cb6c78" }}
        //   className="miOneCard"
        // >
        //   <Card.Img variant="top" src={imagen2} className="imgCard" />

        //   {/* <Card.Img variant="top" src={imagen2} src="holder.js/100px180" /> */}
        //   {/* <img src={imagen2} alt="Imagen" style={{ width: "18rem" }} />; */}
        //   <Card.Body>
        //     <Card.Title> {myProps.titulo} </Card.Title>
        //   </Card.Body>
        //   <ListGroup className="list-group-flush">
        //     <ListGroup.Item>
        //       Fecha de lanzamiento: {myProps.fechaCreacion}{" "}
        //     </ListGroup.Item>
        //     <ListGroup.Item>
        //       Calificacion: {myProps.calificacion} {estrellas()}
        //     </ListGroup.Item>
        //   </ListGroup>
        //   <ListGroup.Item> Genero: {myProps.genero} </ListGroup.Item>
        //   <Card.Body>
        //     <Card.Link href={myProps.youtubeTrailerId}>Ver trailer</Card.Link>
        //   </Card.Body>
        //   <Editar boton={boton} id={id}></Editar>
        //   <br></br>
        //   <AltaBaja boton={boton} id={id} ab={ab}></AltaBaja>
        //   <br></br>
        //   <Eliminar boton={boton} id={id}></Eliminar>
        // </Card>
      );
    } else {
      return (
        <Card style={{ width: "18rem" }} className="miOneCard">
          <img src={imagen2} alt="Imagen" />;
          <Button variant="primary" onClick={handleShow}>
            Ver detalle de la pelicula
          </Button>
          <Modal
            show={show}
            onHide={handleClose}
            backdrop="static"
            keyboard={false}
          >
            <Modal.Header closeButton>
              <Modal.Title>{myProps.titulo} </Modal.Title>
            </Modal.Header>
            <ReactPlayer
              url={myProps.youtubeTrailerId}
              className="react-player"
              playing
              width="100%"
              height="100%"
              controls={false}
            />
            <Modal.Body>
              Fecha de lanzamiento: {myProps.fechaCreacion}
            </Modal.Body>
            <Modal.Body>
              Calificacion: {myProps.calificacion} {estrellas()}
            </Modal.Body>
            <Modal.Body>Genero: {myProps.genero}</Modal.Body>
            <Modal.Footer>
              {showAdminBoard ? (
                <>
                  <Editar boton={boton} id={id}></Editar>
                  <AltaBaja boton={boton} id={id} ab={ab}></AltaBaja>
                  <Eliminar boton={boton} id={id}></Eliminar>
                  <Button variant="secondary" onClick={handleClose}>
                    Close
                  </Button>
                </>
              ) : (
                <Button variant="secondary" onClick={handleClose}>
                  Close
                </Button>
              )}
            </Modal.Footer>
          </Modal>
        </Card>
      );
    }
  } else {
    return <div>No hay peliculas cargadas</div>;
  }
};

export default OneCard;
