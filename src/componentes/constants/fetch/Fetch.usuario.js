import UsuarioService from "../../service/Usuario.service";

export const FETCH_USUARIO = {
  FETCH_ADD: function (form) {
    const myOneOne = UsuarioService.agregarUsuario(form).catch(console.log);
    return myOneOne;
  },
};
