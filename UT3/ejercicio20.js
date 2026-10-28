function getSecondsToTomorrow() {
  let ahora = new Date();
  let segundosHoy = ahora.getHours() * 3600 + ahora.getMinutes() * 60 + ahora.getSeconds();
  return 86400 - segundosHoy;
}

console.log(getSecondsToTomorrow());
