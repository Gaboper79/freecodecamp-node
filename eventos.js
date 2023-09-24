const EventEmitter = require("events");

const emisorProductos = new EventEmitter();

emisorProductos.on("compra", (total, cantidad) => {
  console.log(`Se realizo una compra por $${total} y ${cantidad} de productos`);
});

console.log("entro un pedido");
emisorProductos.emit("compra", 5000, 10);
