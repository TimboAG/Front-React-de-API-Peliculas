export const API_PERSONAJE = {
  URL: "http://localhost:8081",

  PERSONAJE: function () {
    return `${this.URL}/personaje`;
  },

  PERSONAJE_CUSTOM: function () {
    return `${this.URL}/personaje/custom`;
  },

  PERSONAJE_ID: function (id) {
    return `${this.URL}/personaje/${id}`;
  },
  PERSONAJE_ADD: function () {
    return `${this.URL}/personaje`;
  },
  PERSONAJE_ACTUALIZAR: function (id) {
    return `${this.URL}/personaje/${id}`;
  },

  PERSONAJE_ELIMINAR: function (id) {
    return `${this.URL}/personaje/${id}`;
  },

  PERSONAJE_ALTA: function (id) {
    return `${this.URL}/personaje/alta/${id}`;
  },
  PERSONAJE_BAJA: function (id) {
    return `${this.URL}/personaje/alta/${id}`;
  },
};
