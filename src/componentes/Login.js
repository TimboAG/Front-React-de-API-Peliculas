import React, { useState } from "react";
import { FETCH_USUARIO } from "./constants/fetch/Fetch.usuario";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { useNavigate } from "react-router-dom";

export const Login = () => {
  const [form, setForm] = useState();

  function handleChange(evt) {
    const { target } = evt;
    const { name, value } = target;
    const misValues = {
      ...form,
      [name]: value,
    };
    setForm(misValues);
  }
  const navigate = useNavigate();

  function handleSubmit(evt) {
    evt.preventDefault();
    postUsuario(form);
  }

  const postUsuario = () => {
    FETCH_USUARIO.FETCH_ADD(form);
    return navigate("/login");
  };

  return (
    <div>
      <form
        onSubmit={handleSubmit}
        className="formAM"
        encType="multipart / form-data"
      >
        <h1>Inicio de Sesión </h1> <br></br>
        <br />
        <Form.Control
          size="lg"
          type="email"
          placeholder="email"
          name="email"
          onChange={handleChange}
          required
        />
        <br />
        <Form.Control
          size="lg"
          type="password"
          placeholder="password"
          id="pass1"
          name="password"
          onChange={handleChange}
          required
        />
        <br />
        <br />
        <Button variant="dark " type="submit">
          Enviar
        </Button>
      </form>
    </div>
  );
};
