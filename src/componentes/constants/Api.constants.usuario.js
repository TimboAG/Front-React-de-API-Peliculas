export const API_USUARIO = {
  URL: "http://localhost:8081",

  USUARIO_ADD: function () {
    return `${this.URL}/registro`;
  },
  //   USUARIO_ACTUALIZAR: function (id) {
  //     return `${this.URL}/personaje/${id}`;
  //   },

  //   USUARIO_ELIMINAR: function (id) {
  //     return `${this.URL}/personaje/${id}`;
  //   },

  // USUARIO_ALTA: function (id) {
  //     return `${this.URL}/personaje/alta/${id}`;
  //   },
  //   USUARIO_BAJA: function (id) {
  //     return `${this.URL}/personaje/alta/${id}`;
  //   },
};
