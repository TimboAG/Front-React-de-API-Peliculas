import axios from "axios";
import { API_USUARIO } from "./../constants/Api.constants.usuario";
class UsuarioService {
  async registrarUsuario(form, setStatus, setMensajeErrorStatus) {
    const response = axios
      .post(API_USUARIO.USUARIO_REGISTRO(), form)
      .then((response) => {
        setStatus(response.status);
      })
      .catch((error) => {
        setMensajeErrorStatus(error.response.data.message);
        setStatus(error.response.status);
      });

    return response;
  }

  async iniciarSession(form, setStatus, setMensajeErrorStatus, setAccessToken) {
    const response = axios
      .post(API_USUARIO.USUARIO_INICIAR_SESSION(), form)
      .then((response) => {
        if (response.data.accessToken) {
          setStatus(response.status);
          setAccessToken(response.data.accessToken);
          localStorage.setItem("user", JSON.stringify(response.data));
        }
        return response.data;
      })
      .catch((error) => {
        setMensajeErrorStatus(error.response.data.message);
        setStatus(error.response.status);
      });

    return response;
  }

  logout() {
    localStorage.removeItem("user");
    return axios.post(API_USUARIO.USUARIO_CERRAR_SESSION()).then((response) => {
      return response.data;
    });
  }

  getCurrentUser() {
    return JSON.parse(localStorage.getItem("user"));
  }
}
export default new UsuarioService();
