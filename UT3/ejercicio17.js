function obtenerFechaHace(fecha, dias) {
  let copia = new Date(fecha);
  copia.setDate(copia.getDate() - dias);
  return copia.getDate();
}

let date = new Date(2026, 5, 2);
console.log(obtenerFechaHace(date, 1));
console.log(obtenerFechaHace(date, 2));
console.log(obtenerFechaHace(date, 365));
