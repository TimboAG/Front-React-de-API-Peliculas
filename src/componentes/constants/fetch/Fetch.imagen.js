import ImagenService from "../../service/Imagen.service";

export const FETCH_IMAGEN = {
  FETCH_TODOS: async function (setImagen, id) {
    var requestOptions = {
      method: "GET",
      redirect: "follow",
    };

    await fetch(ImagenService.todos(id), requestOptions)
      .then((data) => setImagen(data))
      .catch((error) => console.error("Unable to get items.", error));
  },
};
