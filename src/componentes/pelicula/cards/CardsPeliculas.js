import React from "react";
import OneCardPelicula from "./OneCardPelicula";
import "../../../assets/styles/Styles.css";

const Cards = ({ pelicula }) => {
  const cardList = pelicula.map((myProps) => (
    <OneCardPelicula myProps={myProps} key={myProps.id} />
  ));
  return <div> {cardList} </div>;
};

export default Cards;
