import PeliculaService from "../../service/Pelicula.service";

export const FETCH_PELICULA = {
  FETCH_TODOS: function ({ setPelicula }) {
    const myOneOne = PeliculaService.todos()
      .then((data) => setPelicula(data))
      .catch(console.log);
    return myOneOne;
  },

  FETCH_ADD: function (form, form2) {
    const myOneOne = PeliculaService.agregarPelicula(form, form2).catch(
      console.log
    );
    return myOneOne;
  },

  FETCH_UNA_PELICULA: function (id, setPelicula) {
    PeliculaService.porId(id)
      .then((res) => res)
      .then((res = Response) => {
        setPelicula(res);
      })
      .catch(console.log);
  },
  FETCH_ACTUALIZAR: function (id, form, imagen2) {
    const myOneOne = PeliculaService.actualizar(id, form, imagen2).catch(
      console.log
    );
    return myOneOne;
  },

  FETCH_ALTA: function ({ setPelicula, id }) {
    const myOneOne = PeliculaService.alta(id)
      .then((data) => setPelicula(data))
      .catch(console.log);
    return myOneOne;
  },
  FETCH_BAJA: function ({ setPelicula, id }) {
    const myOneOne = PeliculaService.baja(id)
      .then((data) => setPelicula(data))
      .catch(console.log);
    return myOneOne;
  },

  FETCH_ELIMINAR: function ({ setPelicula, id }) {
    const myOneOne = PeliculaService.eliminar(id)
      .then((data) => setPelicula(data))
      .catch(console.log);
    return myOneOne;
  },
};
