export const API_USUARIO = {
  URL: "http://localhost:8081",

  USUARIO_REGISTRO: function () {
    return `${this.URL}/api/auth/signup`;
  },
  USUARIO_INICIAR_SESSION: function () {
    return `${this.URL}/api/auth/signin`;
  },
};
