const curso = require("./curso.json");
//de json a obje de js
console.log(curso.titulo);

//de js a json

let infoCurso = {
  titulo: "Mi artículo genial",
  numVisitas: 1000,
  numlikes: 250,
  temas: ["tecnología", "ciencia", "programación"],
  esPublico: true,
};

let dataJson = JSON.stringify(infoCurso);

console.log(typeof dataJson);
console.log(dataJson);

//de json a object

let objJs = JSON.parse(dataJson);

console.log("obj typo ", typeof objJs);
console.log(objJs);
