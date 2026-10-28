/**
 * Ejercicio 10 — EDAD1
 * (Sentencias: decisiones)
 * --------------------------------------------------------------------
 *
 * Crea un script para comprobar que la variable edad está entre 14 y 90,
 * inclusive. "Inclusive" significa que edad puede llegar a ser uno de los
 * extremos: 14 o 90.
 */

function edad1(edad) {
  return edad >= 14 && edad <= 90;
}

let edad = 20;
console.log(edad + ": " + edad1(edad)); // 20: true
edad = 14;
console.log(edad + ": " + edad1(edad)); // 14: true
edad = 90;
console.log(edad + ": " + edad1(edad)); // 90: true
edad = 1;
console.log(edad + ": " + edad1(edad)); // 1: false
edad = 100;
console.log(edad + ": " + edad1(edad)); // 100: false
