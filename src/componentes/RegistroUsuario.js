import React, { useState } from "react";
import { FETCH_USUARIO } from "./constants/fetch/Fetch.usuario";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { useEffect } from "react";

export const RegistroUsuario = () => {
  const [form, setForm] = useState();
  const [status, setStatus] = useState();
  const [mensajeErrorStatus, setMensajeErrorStatus] = useState();

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
    const pass1 = document.getElementById("pass1");
    const pass2 = document.getElementById("pass2");
    if (pass1.value !== pass2.value) {
      document.getElementById("error").classList.add("mostrar");
      return false;
    } else {
      document.getElementById("error").classList.remove("mostrar");
      postUsuario(form, setStatus, setMensajeErrorStatus);
    }
  }

  const postUsuario = async (form, setStatus, setMensajeErrorStatus) => {
    await FETCH_USUARIO.FETCH_REGISTRO(form, setStatus, setMensajeErrorStatus);
  };

  useEffect(() => {
    const errorM = document.getElementById("mensajeError");
    const exitoM = document.getElementById("mensajeExito");
    if (status !== undefined) {
      if (status === 201) {
        errorM.classList.remove("mostrar");
        exitoM.classList.add("mostrar");
      } else {
        errorM.classList.add("mostrar");
        document.getElementById("mensajeError").innerHTML = mensajeErrorStatus;

        exitoM.classList.remove("mostrar");
      }
    }
  }, [status, mensajeErrorStatus]);

  return (
    <div>
      <form
        onSubmit={handleSubmit}
        className="formAM"
        encType="multipart / form-data"
      >
        <h1>Registro usuario</h1> <br></br>
        <Form.Control
          size="lg"
          type="text"
          placeholder="nombre"
          name="name"
          onChange={handleChange}
          required
        />
        <br />
        <Form.Control
          size="lg"
          type="text"
          placeholder="username"
          name="username"
          onChange={handleChange}
          required
        />
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
        <Form.Control
          size="lg"
          type="password"
          placeholder="repetir password"
          name="password2"
          id="pass2"
          onChange={handleChange}
          required
        />
        <br />
        <div id="error" className="alert alert-danger ocultar" role="alert">
          Las Contraseñas no coinciden, vuelve a intentar !
        </div>
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
