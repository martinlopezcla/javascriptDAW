let n = Number();

function tablaMultiplicar(n) {
  if (typeof n !== "number" || isNaN(n)) {
    console.log("Número no válido");
    return;
  }

  console.log(`Tabla del ${n}`);

  for (let i = 1; i <= 10; i++) {
    console.log(`${n} x ${i} = ${n * i}`);
  }
}

tablaMultiplicar(8);
tablaMultiplicar("HOlas");
