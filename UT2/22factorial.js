function factorial(n) {
  let resultado = 1;

  for (let i = 2; i <= n; i++) {
    resultado *= i;
  }

  return resultado;
}

console.log(factorial(5)); // 120
console.log(factorial(0)); // 1
console.log(factorial(1)); // 1
121 