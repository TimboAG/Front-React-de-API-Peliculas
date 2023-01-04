import React from "react";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";

const OneCard = ({ myProps }) => {
  return (
    <Card style={{ width: "18rem" }}>
      <Card.Img variant="top" src="holder.js/100px180?text=Image cap" />
      <Card.Body>
        <Card.Title> {myProps.titulo} </Card.Title>
      </Card.Body>
      <ListGroup className="list-group-flush">
        <ListGroup.Item>
          Fecha de lanzamiento: {myProps.fechaCreacion}{" "}
        </ListGroup.Item>
        <ListGroup.Item>Calificacion: {myProps.calificacion} </ListGroup.Item>
      </ListGroup>
      <Card.Body>
        <Card.Link href={myProps.youtubeTrailerId}>Ver trailer</Card.Link>
      </Card.Body>
    </Card>
  );
};

export default OneCard;
