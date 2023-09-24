const promFlag = false;

const miPromesa = new Promise((resolve, reject) => {
  setTimeout(() => {
    if (promFlag) {
      resolve("promesa cumplida");
    } else {
      reject("promesa rechazada");
    }
  }, 5000);
});

const promesaAceptada = (valor) => {
  console.log(valor);
};
const promesaRechazada = (valor) => {
  console.log(valor);
};
miPromesa.then(promesaAceptada, promesaRechazada);
