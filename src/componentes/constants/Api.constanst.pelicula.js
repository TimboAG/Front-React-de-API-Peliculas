export const API_PELICULA = {
  URL: "http://localhost:8081/pelicula",

  PELICULA: function () {
    return `${this.URL}`;
  },

  PELICULA_CUSTOM: function () {
    return `${this.URL}/custom`;
  },

  PELICULA_ID: function (id) {
    return `${this.URL}/${id}`;
  },
  PELICULA_ADD: function () {
    return `${this.URL}`;
  },
  PELICULA_ACTUALIZAR: function (id) {
    return `${this.URL}/${id}`;
  },

  PELICULA_ELIMINAR: function (id) {
    return `${this.URL}/${id}`;
  },

  PELICULA_ALTA: function (id) {
    return `${this.URL}/alta/${id}`;
  },
  PELICULA_BAJA: function (id) {
    return `${this.URL}/alta/${id}`;
  },
};
