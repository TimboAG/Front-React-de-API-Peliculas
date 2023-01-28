import UsuarioService from "../../service/Usuario.service";

export const FETCH_USUARIO = {
  FETCH_REGISTRO: function (form, setStatus, setMensajeErrorStatus) {
    const myOneOne = UsuarioService.registrarUsuario(
      form,
      setStatus,
      setMensajeErrorStatus
    ).catch(console.log);
    return myOneOne;
  },

  FETCH_INICIAR_SESSION: function (
    form,
    setStatus,
    setMensajeErrorStatus,
    setAccessToken
  ) {
    const myOneOne = UsuarioService.iniciarSession(
      form,
      setStatus,
      setMensajeErrorStatus,
      setAccessToken
    ).catch(console.log);
    return myOneOne;
  },
};
