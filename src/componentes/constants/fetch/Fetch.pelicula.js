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

  // FETCH_PAGE: function ({ page, setIntoPage }) {
  //   const myOne = RickFetch.pages(page)
  //     .then((res) => res)
  //     .then((res = Response) => {
  //       setIntoPage(res.results);
  //     })
  //     .catch(console.log);
  //   return myOne;
  // },

  // FETCH_POR_NOMBRE: function ({ texto, setPersonajeDetalle }) {
  //   const myOne = RickFetch.buscarPorNombrePersonaje(texto)
  //     .then((res) => res)
  //     .then((res = Response) => {
  //       console.log(res.results);
  //       setPersonajeDetalle(res.results);
  //     })
  //     .catch(console.log);
  //   return myOne;
  // },

  // FETCH_UN_PERSONAJE: function (id, setPersonajeD) {
  //   RickFetch.unPersonaje(id)
  //     .then((res) => res)
  //     .then((res = Response) => {
  //       setPersonajeD(res);
  //     })
  //     .catch(console.log);
  // },

  // FETCH_NUM_PAGE_EPISODIOS: function ({ setNumPage }) {
  //   const myOneOne = RickFetch.todosLosEpisodios()
  //     .then((data) => setNumPage(data.info.pages))
  //     .catch(console.log);
  //   return myOneOne;
  // },

  // FETCH_PAGE_EPISODIOS: function ({ pages, setEpisodios }) {
  //   const myOne = RickFetch.pagesEpisodes(pages)
  //     .then((res) => res)
  //     .then((res = Response) => {
  //       setEpisodios(res.results);
  //     })
  //     .catch(console.log);
  //   return myOne;
  // },
};
