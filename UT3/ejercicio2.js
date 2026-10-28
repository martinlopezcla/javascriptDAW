function comprobarSpam(str) {
  return str.includes("gratis") || str.includes("XXX");
}

console.log(comprobarSpam("regalo gratis")); // true
console.log(comprobarSpam("contenido XXX aquí")); // true
console.log(comprobarSpam("mensaje inocente")); // false
