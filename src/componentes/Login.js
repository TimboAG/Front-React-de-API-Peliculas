import React, { useEffect, useState } from "react";
import { FETCH_USUARIO } from "./constants/fetch/Fetch.usuario";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "./auth/AuthContext";

export const Login = () => {
  const { setUSer: setUsername, setIsAuth } = useContext(AuthContext);

  const [user, setUSer] = useState({
    email: "",
    pass: "",
  });
  const [pass, setPass] = useState("");

  const [form, setForm] = useState();
  const [status, setStatus] = useState();
  const [mensajeErrorStatus, setMensajeErrorStatus] = useState();
  const [accessToken, setAccessToken] = useState();
  const navigate = useNavigate();

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
        localStorage.setItem("token", accessToken);
        console.log("holis", localStorage.getItem("token"));
        if (localStorage.getItem("token") !== null) {
          const { email } = user;

          const userLogged = {
            id: Date.now(),
            token: accessToken,
            username: email,
          };

          setUsername(userLogged);
          setIsAuth(true);
          navigate("/");
        }
      } else {
        errorM.classList.add("mostrar");
        document.getElementById("mensajeError").innerHTML = mensajeErrorStatus;
        exitoM.classList.remove("mostrar");
        setAccessToken("");
      }
    }
  }, [status, mensajeErrorStatus, accessToken]);
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
