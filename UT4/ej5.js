// 1. Crear un array styles con los items "Jazz" y "Blues"
let styles = ["Jazz", "Blues"];

// 2. Agregar "Rock-n-Roll" al final
styles.push("Rock-n-Roll");

// 3. Reemplazar el valor del medio por "Classics"
let medio = (styles.length - 1) / 2;
styles[medio] = "Classics";

// 4. Quitar el primer valor del array y mostrarlo
let primero = styles.shift();
console.log("Elim: " + primero);

// 5. Insertar "Rap" y "Reggae" al principio del array
styles.unshift("Rap", "Reggae");

console.log(styles.toString());
