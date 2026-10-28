function diaSemanaLocal(fecha) {
  let dia = fecha.getDay();
  if (dia == 0) {
    return 7;
  }
  return dia;
}

console.log(diaSemanaLocal(new Date(2026, 9, 5)));
console.log(diaSemanaLocal(new Date(2026, 9, 9)));
console.log(diaSemanaLocal(new Date(2026, 9, 11)));
x;
