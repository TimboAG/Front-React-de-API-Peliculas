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
    var myHeaders = new Headers();
    myHeaders.append("Access-Control-Allow-Origin", "* ");

    const myDate = new Date(form.fechaCreacion);
    var form1 = JSON.stringify({
      titulo: form.titulo,
      fechaCreacion: myDate,
      youtubeTrailerId: form.youtubeTrailerId,
      calificacion: form.calificacion,
      imagen: form.imagenPelicula,
      genero: [{ id: form.genero }],
    });
    var fileName = form2.imagenPelicula.name;
    var formdata = new FormData();
    formdata.append("imagenPelicula", form2.imagenPelicula, fileName);
    formdata.append("form1", form1);
    var requestOptions = {
      method: "POST",
      body: formdata,
      headers: myHeaders,
      redirect: "follow",
      mode: "no-cors",
    };

    const response = await fetch(API_PELICULA.PELICULA_ADD(), requestOptions)
      .then((response) => response.text())
      .then((result) => console.log(result))
      .catch((error) => console.log("error", error));
    return response.json();
  }

  async actualizar(id, form) {
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    const myDate = new Date(form.fechaCreacion);

    var form1 = JSON.stringify({
      titulo: form.titulo,
      fechaCreacion: myDate,
      youtubeTrailerId: form.youtubeTrailerId,
      calificacion: form.calificacion,
      imagen: form.imagenPelicula,
      genero: [{ id: form.genero }],
    });

    var requestOptions = {
      method: "PUT",
      headers: myHeaders,
      body: form1,
      redirect: "follow",
    };

    await fetch(API_PELICULA.PELICULA_ACTUALIZAR(id), requestOptions)
      .then((response) => response.text())
      .then((result) => console.log(result))
      .catch((error) => console.log("error", error));
  }

  async alta(id) {
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    var requestOptions = {
      method: "PUT",
      headers: myHeaders,
      body: id,
      redirect: "follow",
    };
    const response = await fetch(
      API_PELICULA.PELICULA_ALTA(id),
      requestOptions
    );
    console.log(response);
    return response.json();
  }
  async baja(id) {
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    var requestOptions = {
      method: "PUT",
      headers: myHeaders,
      body: id,
      redirect: "follow",
    };
    const response = await fetch(
      API_PELICULA.PELICULA_BAJA(id),
      requestOptions
    );
    console.log(response);
    return response.json();
  }
  async eliminar(id) {
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    var requestOptions = {
      method: "DELETE",
      headers: myHeaders,
      body: id,
      redirect: "follow",
    };
    const response = await fetch(
      API_PELICULA.PELICULA_ELIMINAR(id),
      requestOptions
    );
    console.log(response);
    return response.json();
  }
}

export default new PeliculaService();
