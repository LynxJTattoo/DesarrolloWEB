class Camion {
  constructor(id) {
    this.placa = id;
  }

  transportar(lugar) {
    console.log(
      "El camion 🚚[" +
        this.placa +
        "] esta transportando el pedido a: " +
        lugar
    );
  }
}

export default Camion;
