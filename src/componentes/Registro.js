import React, { useState } from "react";
import { FETCH_USUARIO } from "./constants/fetch/Fetch.usuario";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

export const Registro = () => {
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

  function handleSubmit(evt) {
    evt.preventDefault();
    const pass1 = document.getElementById("pass1");
    const pass2 = document.getElementById("pass2");

    // Verificamos si las constraseñas no coinciden
    if (pass1.value != pass2.value) {
      document.getElementById("error").classList.add("mostrar");
      return false;
    } else {
      document.getElementById("error").classList.remove("mostrar");
      postUsuario(form);
    }
  }

  const postUsuario = () => {
    FETCH_USUARIO.FETCH_ADD(form);
    //     var myHeaders = new Headers();
    // myHeaders.append("Access-Control-Allow-Origin", "* ");

    // var form1 = JSON.stringify({
    //   apellido: form.apellido,
    //   nombre: form.nombre,
    //   email: form.email,
    //   username: form.username,
    //   password: form.password,
    // });
    // var formdata = new FormData();
    // formdata.append("form1", form1);
    // var requestOptions = {
    //   method: "POST",
    //   body: formdata,
    //   headers: myHeaders,
    //   redirect: "follow",
    //   mode: "no-cors",
    // };
    // const URL = "http://localhost:8081/registro";
    // const response = await fetch(URL, requestOptions).then((response) => {
    //   if (response.ok === true) {
    //     console.log("es true ");
    //   } else {
    //     console.log("ees false ", response);
    //     console.log("ees status ", response.status);
    //   }
    // });
    // return response;
  };

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
          placeholder="apellido"
          name="apellido"
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
        <br />
        <Button variant="dark " type="submit">
          Enviar
        </Button>
      </form>
    </div>
  );
};
