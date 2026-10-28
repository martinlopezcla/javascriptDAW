function ultimoDiaMes(anno, mes) {
  let fecha = new Date(anno, mes + 1, 0);
  return fecha.getDate();
}

console.log(ultimoDiaMes(2020, 4));
console.log(ultimoDiaMes(2026, 1));
