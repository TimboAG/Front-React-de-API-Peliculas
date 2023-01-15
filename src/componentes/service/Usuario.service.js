import { API_USUARIO } from "./../constants/Api.constants.usuario";
class UsuarioService {
  async agregarUsuario(form) {
    var myHeaders = new Headers();
    myHeaders.append("Access-Control-Allow-Origin", "* ");

    var form1 = JSON.stringify({
      apellido: form.apellido,
      nombre: form.nombre,
      email: form.email,
      username: form.username,
      password: form.password,
    });
    var formdata = new FormData();
    formdata.append("form1", form1);
    var requestOptions = {
      method: "POST",
      body: formdata,
      headers: myHeaders,
      redirect: "follow",
      mode: "no-cors",
    };

    const response = await fetch(API_USUARIO.USUARIO_ADD(), requestOptions)
      .then((response) => {
        if (response.ok) {
          console.log(response);
          return response.text();
        } else {
          console.log(response);
          throw new Error(response.status);
        }
      })
      .catch((error) => {
        const status = error.response.status;
        const message = error.response.message;
        console.log("es status ", status);
        console.log("es message ", message);
      });

    return response;
  }
  //   const response = await fetch(API_USUARIO.USUARIO_ADD(), requestOptions)
  //     .then((response) => response.text())
  //     .then((result) => console.log(result))
  //     .catch((error) => console.log("error", error));
  //   return response;
  // }
}
export default new UsuarioService();
