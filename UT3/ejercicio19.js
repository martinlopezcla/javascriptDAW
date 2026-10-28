function getSecondsToday() {
  let ahora = new Date();
  return ahora.getHours() * 3600 + ahora.getMinutes() * 60 + ahora.getSeconds();
}

console.log(getSecondsToday());
