function horas30Minutos() {
  for (let i = 9; i < 21; i++) {
    for (let y = 0; y < 60; y += 5) {
      if (y == 0) {
        console.log(i + ":00");
      } else if (y < 10) {
        console.log(i + ":0" + y);
      } else {
        console.log(i + ":" + y);
      }
    }
  }
}
