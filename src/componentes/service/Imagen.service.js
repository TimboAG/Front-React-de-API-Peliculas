import { API_IMAGEN } from "./../constants/Api.constanst.imagen";
class ImagenService {
  async todos(id) {
    const response = await fetch(API_IMAGEN.IMAGEN(id));
    // console.log("esto es response desde service", response);
    return response;
  }
}

export default new ImagenService();
