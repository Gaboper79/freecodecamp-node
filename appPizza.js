const pc = require("picocolors");
const statusPedido = () => {
  const status = Math.random() < 0.8;
  console.log(status);
  return status;
};

const pedido = new Promise((resolve, reject) => {
  setTimeout(() => {
    if (statusPedido()) {
      resolve("pedido exitoso");
    } else {
      reject("El pedido se perdio!!");
    }
  }, 3000);
});

pedido
  .then((mensaje) => {
    console.log(pc.green(mensaje));
  })
  .catch((mensaje) => {
    console.log(pc.red(mensaje));
  });
