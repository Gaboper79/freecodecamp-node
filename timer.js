const { saludar } = require("./saludar");
console.log("inicio de funcion");

function sayhai() {
  console.log(saludar("gabo"));
}

function sumar(a, b) {
  return a + b;
}
setInterval(sumar, 2000, 2, sumar());
console.log("termino");
