import UsuarioService from "../../service/Usuario.service";

export const FETCH_USUARIO = {
  FETCH_ADD: function (form, setStatus) {
    const myOneOne = UsuarioService.agregarUsuario(form, setStatus).catch(
      console.log
    );
    return myOneOne;
  },
};
