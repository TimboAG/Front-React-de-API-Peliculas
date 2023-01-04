import { API_GENERO } from "../constants/Api.constanst.genero";
class GeneroService {
  async todos() {
    const response = await fetch(API_GENERO.GENERO());
    return response.json();
  }

  async custom(id) {
    const response = await fetch(API_GENERO.GENERO_CUSTOM());
    console.log(response);
    return response.json();
  }

  async porId(id) {
    const response = await fetch(API_GENERO.GENERO_ID(id));
    console.log(response);
    return response.json();
  }

  async agregarGenero() {
    const response = await fetch(API_GENERO.GENERO_ADD());
    console.log(response);
    return response.json();
  }

  async actualizar(id) {
    const response = await fetch(API_GENERO.GENERO_ACTUALIZAR(id));
    console.log(response);
    return response.json();
  }
  async eliminar(id) {
    const response = await fetch(API_GENERO.GENERO_ELIMINAR(id));
    console.log(response);
    return response.json();
  }
  async alta(id) {
    const response = await fetch(API_GENERO.GENERO_ALTA(id));
    console.log(response);
    return response.json();
  }
  async baja(id) {
    const response = await fetch(API_GENERO.GENERO_BAJA(id));
    console.log(response);
    return response.json();
  }
}

export default new GeneroService();
