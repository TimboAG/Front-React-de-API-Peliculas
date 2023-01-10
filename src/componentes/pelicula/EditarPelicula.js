/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import { FETCH_GENERO } from "../constants/fetch/Fetch.genero";
import { FETCH_PELICULA } from "../constants/fetch/Fetch.pelicula";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { API_IMAGEN } from "../constants/Api.constanst.imagen";
import "../../assets/styles/Styles.css";

const EditarPelicula = () => {
  var path = window.location.pathname;
  var numero = path.indexOf("/", 1);
  console.log("desde editar pelicula esto es el path", path);
  const id = path.slice(numero + 1);
  console.log("desde editar pelicula", id);
  const [imagen2, setImagen2] = useState(1);
  const [pelicula, setPelicula] = useState(1);
  const fecha = new Date().toISOString().substr(0, 10);
  const [genero, setGenero] = useState(1);
  const [form, setForm] = useState();
  const [requiredFile] = useState(false);
  const [form2, setForm2] = useState({
    imagenPelicula: "",
  });

  const getPelicula = () => {
    FETCH_PELICULA.FETCH_UNA_PELICULA(id, setPelicula);
  };
  const getGenero = () => {
    FETCH_GENERO.FETCH_TODOS({ setGenero });
  };
  const onClickHandler = async () => {
    var requestOptions = {
      method: "GET",
      redirect: "follow",
    };
    const result = await fetch(API_IMAGEN.IMAGEN(pelicula.id), {
      requestOptions,
    });
    const blob = await result.blob();
    const url = await URL.createObjectURL(blob);
    setImagen2(url);
  };

  useEffect(() => {
    onClickHandler();
    if (pelicula === 1) {
      getPelicula();
    }
    if (genero === 1) {
      getGenero();
    }
  }, [pelicula]);

  console.log(pelicula);

  const handleChangeImage = (evt) => {
    const miValues2 = {
      ...form2,
      imagenPelicula: evt.target.files[0],
    };
    setForm2(miValues2);
  };
  function handleChange(evt) {
    const { target } = evt;
    const { name, value } = target;
    const misValues = {
      ...form,
      [name]: value,
    };
    setForm(misValues);
  }

  function handleSubmit(evt) {
    evt.preventDefault();
    postPeliculaActualizarSinImagen(id, form);
  }

  const postPeliculaActualizarSinImagen = () => {
    FETCH_PELICULA.FETCH_ACTUALIZAR(id, form, imagen2);
  };

  const load = () => {
    if (genero !== 1 && pelicula !== 1 && imagen2 != null) {
      return (
        <div>
          <form
            onSubmit={handleSubmit}
            encType="multipart / form-data"
            className="formAM"
          >
            <a href="/peliculas" className="volver">
              {" "}
              <h3>X</h3>
            </a>
            <h1>Editar pelicula</h1> <br></br>{" "}
            <Form.Control
              size="lg"
              id="id"
              name="id"
              disabled
              placeholder={pelicula.id}
              value={pelicula.id}
            />
            <br></br>
            <Form.Control
              size="lg"
              type="text"
              name="titulo"
              placeholder={pelicula.titulo}
              onChange={(e) => {
                handleChange(e);
              }}
              required
            />
            <br />
            <Form.Control
              size="lg"
              type="date"
              placeholder={pelicula.fechaCreacion}
              max={fecha}
              name="fechaCreacion"
              onChange={handleChange}
              required
            />
            <br />
            <Form.Control
              size="lg"
              type="text"
              placeholder={pelicula.youtubeTrailerId}
              name="youtubeTrailerId"
              onChange={handleChange}
              required
            />
            <br />
            <Form.Select
              aria-label="Calificacion"
              name="calificacion"
              placeholder={pelicula.calificacion}
              onChange={handleChange}
              id="calificacionSelect"
              required
            >
              <option value="">Elija la calificacion</option>
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
              placeholder={pelicula.genero}
              id="generoSelect"
              required
            >
              <option value="">Elija el genero</option>
              {genero.map((myProps) => (
                <option key={myProps.id} value={myProps.id}>
                  {" "}
                  {myProps.genero}{" "}
                </option>
              ))}
            </Form.Select>
            <br />
            {requiredFile ? (
              <Form.Group controlId="formFile" className="mb-3">
                <Form.Label>Portada</Form.Label>
                <Form.Control
                  type="file"
                  name="imagenPelicula"
                  onChange={handleChangeImage}
                  accept="image/*"
                  required
                />
              </Form.Group>
            ) : (
              <Form.Group controlId="formFile" className="mb-3">
                <img src={imagen2} alt="Imagen" />
              </Form.Group>
            )}
            <br></br>
            <br></br>
            <br></br>
            <Button variant="dark " type="submit">
              Enviar
            </Button>
          </form>
        </div>
      );
    } else {
      return <div>hola</div>;
    }
  };

  return <div>{load()}</div>;
};

export default EditarPelicula;
