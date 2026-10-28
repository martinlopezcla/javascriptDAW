let campo = document.getElementById("hora");
campo.value = calcularHora();

setInterval(() => {
  campo.value = calcularHora();
}, 1000);

function calcularHora() {
  let ahora = new Date();

  let horas = ahora.getHours();
  let minutos = ahora.getMinutes();
  let segundos = ahora.getSeconds();

  if (horas < 10) {
    horas = "0" + horas;
  }
  if (minutos < 10) {
    minutos = "0" + minutos;
  }
  if (segundos < 10) {
    segundos = "0" + segundos;
  }

  return horas + ":" + minutos + ":" + segundos;
}
