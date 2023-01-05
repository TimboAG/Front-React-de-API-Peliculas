export const API_IMAGEN = {
  URL: "http://localhost:8081/imagen",

  IMAGEN: function (id) {
    return `${this.URL}/${id}`;
  },
};
