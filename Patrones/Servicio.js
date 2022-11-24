import Camion from "./Camion.js";

class Servicio {
  idServicio = 0;

  generarId() {
    this.idServicio = Math.random().toString(36).slice(2);
  }

  obtenerTransporte() {
    return new Camion(this.idServicio);
  }
}

export default Servicio;
