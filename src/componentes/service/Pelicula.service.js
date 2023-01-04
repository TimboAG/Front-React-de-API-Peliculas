import { API_PELICULA } from "./../constants/Api.constanst.pelicula";
class PeliculaService {
  async todos() {
    const response = await fetch(API_PELICULA.PELICULA());
    return response.json();
  }

  async custom(id) {
    const response = await fetch(API_PELICULA.PELICULA_CUSTOM());
    console.log(response);
    return response.json();
  }

  async porId(id) {
    const response = await fetch(API_PELICULA.PELICULA_ID(id));
    console.log(response);
    return response.json();
  }

  async agregarPelicula(form, form2) {
    // var myHeaders = new Headers();
    // const myDate = new Date(form.fechaCreacion);
    // // myHeaders.append("Content-Type", "multipart/form-data; ");
    // myHeaders.append("Content-Type", "application/json ");
    // var data = new FormData();
    // var imagedata = form2.imagenPelicula;
    // data.append("imagenPelicula", imagedata);

    // var form1 = JSON.stringify({
    //   titulo: form.titulo,
    //   fechaCreacion: myDate,
    //   youtubeTrailerId: form.youtubeTrailerId,
    //   calificacion: form.calificacion,
    //   // imagenPelicula: form2.imagenPelicula,
    //   imagen: form.imagenPelicula,
    //   genero: [{ id: form.genero }],
    // });
    // data.append("form1", form1);

    // console.log("esto es raw", form1);
    // var requestOptions = {
    //   method: "POST",
    //   data: data,
    //   // file: form2.imagenPelicula,
    //   redirect: "follow",
    //   mode: "no-cors",
    // };
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "multipart/form-data; ");
    // myHeaders.append("Content-Type", "application/json ");
    // myHeaders.append("Content-Type", "application/x-www-form-urlencoded ");

    const myDate = new Date(form.fechaCreacion);
    var form1 = JSON.stringify({
      id: 10,
      titulo: form.titulo,
      eliminado: false,
      fechaCreacion: myDate,
      youtubeTrailerId: form.youtubeTrailerId,
      calificacion: form.calificacion,
      // imagenPelicula: form2.imagenPelicula,
      imagen: form.imagenPelicula,
      genero: [{ id: form.genero }],
      personajePelicula: [],
    });

    var formdata = new FormData();
    formdata.append("imagenPelicula", form2.imagenPelicula);
    formdata.append("form1", form1);

    var requestOptions = {
      method: "POST",
      body: formdata,
      header: myHeaders,
      redirect: "follow",
    };

    const response = await fetch(API_PELICULA.PELICULA_ADD(), requestOptions)
      .then((response) => response.text())
      .then((result) => console.log(result))
      .catch((error) => console.log("error", error));
    console.log(response);
    return response.json();
  }

  async actualizar(id) {
    const response = await fetch(API_PELICULA.PELICULA_ACTUALIZAR(id));
    console.log(response);
    return response.json();
  }
  async eliminar(id) {
    const response = await fetch(API_PELICULA.PELICULA_ELIMINAR(id));
    console.log(response);
    return response.json();
  }
  async alta(id) {
    const response = await fetch(API_PELICULA.PELICULA_ALTA(id));
    console.log(response);
    return response.json();
  }
  async baja(id) {
    const response = await fetch(API_PELICULA.PELICULA_BAJA(id));
    console.log(response);
    return response.json();
  }
}

export default new PeliculaService();
