export const API_GENERO = {
  URL: "http://localhost:8081",

  GENERO: function () {
    return `${this.URL}/genero`;
  },

  GENERO_CUSTOM: function () {
    return `${this.URL}/genero/custom`;
  },

  GENERO_ID: function (id) {
    return `${this.URL}/genero/${id}`;
  },
  GENERO_ADD: function () {
    return `${this.URL}/genero`;
  },
  GENERO_ACTUALIZAR: function (id) {
    return `${this.URL}/genero/${id}`;
  },

  GENERO_ELIMINAR: function (id) {
    return `${this.URL}/genero/${id}`;
  },

  GENERO_ALTA: function (id) {
    return `${this.URL}/genero/alta/${id}`;
  },
  GENERO_BAJA: function (id) {
    return `${this.URL}/genero/alta/${id}`;
  },
};
