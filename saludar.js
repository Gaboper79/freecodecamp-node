function saludar(nombre) {
  return `Hola-${nombre}`;
}

function despedir(nombre) {
  return `Chau-${nombre}`;
}
module.exports = { despedir: despedir, saludar: saludar };
