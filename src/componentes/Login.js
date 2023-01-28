import React, { useEffect, useState } from "react";
import { FETCH_USUARIO } from "./constants/fetch/Fetch.usuario";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { useNavigate } from "react-router-dom";

export const Login = () => {
  const [form, setForm] = useState();
  const [status, setStatus] = useState();
  const [mensajeErrorStatus, setMensajeErrorStatus] = useState();
  const [accessToken, setAccessToken] = useState();

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
    postUsuario(form, setStatus, setMensajeErrorStatus, setAccessToken);
  }

  const postUsuario = () => {
    FETCH_USUARIO.FETCH_INICIAR_SESSION(
      form,
      setStatus,
      setMensajeErrorStatus,
      setAccessToken
    );
  };

  useEffect(() => {
    const errorM = document.getElementById("mensajeError");
    const exitoM = document.getElementById("mensajeExito");
    if (status !== undefined) {
      if (status === 200) {
        errorM.classList.remove("mostrar");
        exitoM.classList.add("mostrar");
      } else {
        errorM.classList.add("mostrar");
        document.getElementById("mensajeError").innerHTML = mensajeErrorStatus;
        exitoM.classList.remove("mostrar");
        setAccessToken("");
      }
    }
  }, [status, mensajeErrorStatus]);
  console.log(accessToken);
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
          name="usernameOrEmail"
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
        <div
          id="mensajeError"
          className="alert alert-danger ocultar"
          role="alert"
        >
          El mail ingresado ya se encuentra en uso. Prueba con otro
        </div>
        <div
          id="mensajeExito"
          className="alert alert-success ocultar"
          role="alert"
        >
          El usuario fue registrado con exito!
        </div>
        <br />
        <Button variant="dark " type="submit">
          Enviar
        </Button>
      </form>
    </div>
  );
};
