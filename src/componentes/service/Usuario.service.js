import axios from "axios";
import { API_USUARIO } from "./../constants/Api.constants.usuario";
class UsuarioService {
  async agregarUsuario(form, setStatus) {
    var form1 = JSON.stringify({
      apellido: form.apellido,
      nombre: form.nombre,
      email: form.email,
      username: form.username,
      password: form.password,
    });
    var formdata = new FormData();
    formdata.append("form1", form1);

    const response = axios
      .post(API_USUARIO.USUARIO_ADD(), formdata)
      .then((response) => {
        setStatus(response.status);
      })
      .catch((error) => {
        setStatus(error.response.status);
      });

    return response;
  }
}
export default new UsuarioService();
