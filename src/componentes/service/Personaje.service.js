import { API_PERSONAJE } from "../constants/Api.constanst.personaje";
class PersonajeService {
  async todos() {
    const response = await fetch(API_PERSONAJE.PERSONAJE());
    return response.json();
  }

  async custom(id) {
    const response = await fetch(API_PERSONAJE.PERSONAJE_CUSTOM());
    console.log(response);
    return response.json();
  }

  async porId(id) {
    const response = await fetch(API_PERSONAJE.PERSONAJE_ID(id));
    console.log(response);
    return response.json();
  }

  async agregarPersonaje() {
    const response = await fetch(API_PERSONAJE.PERSONAJE_ADD());
    console.log(response);
    return response.json();
  }

  async actualizar(id) {
    const response = await fetch(API_PERSONAJE.PERSONAJE_ACTUALIZAR(id));
    console.log(response);
    return response.json();
  }
  async eliminar(id) {
    const response = await fetch(API_PERSONAJE.PERSONAJE_ELIMINAR(id));
    console.log(response);
    return response.json();
  }
  async alta(id) {
    const response = await fetch(API_PERSONAJE.PERSONAJE_ALTA(id));
    console.log(response);
    return response.json();
  }
  async baja(id) {
    const response = await fetch(API_PERSONAJE.PERSONAJE_BAJA(id));
    console.log(response);
    return response.json();
  }
}

export default new PersonajeService();
