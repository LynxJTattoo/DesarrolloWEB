import Servicio from "./Servicio.js";

// Nuestra aplicacion de mensajeria
const servicio = new Servicio();
servicio.generarId();
const camion = servicio.obtenerTransporte();
camion.transportar("Bogotá");

function realizarEnvio(camion, lugar) {
    camion.transportar(lugar);
}