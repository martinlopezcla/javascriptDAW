function contarLetras(cadena, letra) {
  let contador = 0;
  for (let i = 0; i < cadena.length; i++) {
    if (cadena[i] == letra) {
      contador++;
    }
  }
  return contador;
}

console.log("Declarada: " + contarLetras("Este es el texto de prueba", "a"));

let contarLetrasExpresion = function (cadena, letra) {
  let contador = 0;
  for (let i = 0; i < cadena.length; i++) {
    if (cadena[i] == letra) {
      contador++;
    }
  }
  return contador;
};

console.log(
  "Expresión: " + contarLetrasExpresion("Este es el texto de prueba", "s")
);

let contarLetrasFlecha = (cadena, letra) => {
  let contador = 0;
  for (let i = 0; i < cadena.length; i++) {
    if (cadena[i] == letra) {
      contador++;
    }
  }
  return contador;
};

console.log("Flecha: " + contarLetrasFlecha("Este es el texto de prueba", "l"));
