import React, { useEffect, useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

import { FETCH_GENERO } from "../constants/fetch/Fetch.genero";
import { FETCH_PELICULA } from "../constants/fetch/Fetch.pelicula";
import { API_PELICULA } from "../constants/Api.constanst.pelicula";

const CrearPelicula = () => {
  var data = new FormData();

  const fecha = new Date().toISOString().substr(0, 10);
  const [genero, setGenero] = useState(1);
  const [form, setForm] = useState({
    titulo: "",
    fechaCreacion: "",
    youtubeTrailerId: "",
    calificacion: "",
    genero: "",
    imagenPelicula: "",
  });
  const [form2, setForm2] = useState({
    imagenPelicula: "",
  });
  // console.log("esto es form", form);
  function handleChange(evt) {
    const { target } = evt;

    const { name, value } = target;
    var imagedata = document.querySelector('input[type="file"]').files[0];
    data.append("imagenPelicula", imagedata);
    const misValues = {
      ...form,
      [name]: value,
    };
    setForm(misValues);
    const miValues2 = {
      ...form2,
      imagenPelicula: evt.target.files[0],
      // imagedata,
    };
    setForm2(miValues2);
  }
  function handleSubmit(evt) {
    evt.preventDefault();
    postPelicula(form, form2);
  }
  const getGenero = () => {
    FETCH_GENERO.FETCH_TODOS({ setGenero });
  };

  const postPelicula = () => {
    FETCH_PELICULA.FETCH_ADD(form, form2);
  };

  useEffect(() => {
    if (genero === 1) {
      getGenero();
    }
  }, [genero]);

  const URL = API_PELICULA.PELICULA_ADD();
  console.log(URL);
  const load = () => {
    if (genero !== 1) {
      return (
        <div>
          {/* <form action={URL} method="post" enctype="multipart / form-data"> */}
          <form onSubmit={handleSubmit} encType="multipart / form-data">
            {" "}
            <Form.Control
              size="lg"
              type="text"
              placeholder="Titulo"
              name="titulo"
              onChange={handleChange}
            />
            <br />
            <Form.Control
              size="lg"
              type="date"
              placeholder="Fecha"
              max={fecha}
              name="fechaCreacion"
              onChange={handleChange}
            />
            <br />
            <Form.Control
              size="lg"
              type="text"
              placeholder="Link de trailer youtube"
              name="youtubeTrailerId"
              onChange={handleChange}
            />
            <br />
            <Form.Select
              aria-label="Calificacion"
              name="calificacion"
              onChange={handleChange}
            >
              <option value="1">1 ★</option>
              <option value="2">2 ★★</option>
              <option value="3">3 ★★★</option>
              <option value="4">4 ★★★★</option>
              <option value="5">5 ★★★★★</option>
            </Form.Select>
            <br />
            <Form.Select
              aria-label="Genero"
              name="genero"
              onChange={handleChange}
            >
              {genero.map((myProps) => (
                <option key={myProps.id} value={myProps.id}>
                  {" "}
                  {myProps.genero}{" "}
                </option>
              ))}
            </Form.Select>
            <br />
            <Form.Group controlId="formFile" className="mb-3">
              <Form.Label>Portada</Form.Label>
              <Form.Control
                type="file"
                name="imagenPelicula"
                onChange={handleChange}
                accept="image/*"
              />
            </Form.Group>
            <Button variant="dark " type="submit">
              Dark
            </Button>
          </form>
        </div>
      );
    }
  };

  return <div>{load()}</div>;
};

export default CrearPelicula;
