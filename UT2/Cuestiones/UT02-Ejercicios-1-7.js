// ============================================
// UT02 - Ejercicios 1 a 7
// ============================================

// ---------- Ejercicio 1: Variables y constantes ----------
let nuestroPlaneta = "Tierra";
let nombreUsuarioActual = "Ana85";

console.log(nuestroPlaneta);        // "Tierra"
console.log(nombreUsuarioActual);   // "Ana85"


// ---------- Ejercicio 2: ¿Mayúsculas en las constantes? ----------
// fechaNacimiento es un valor "fijo", conocido de antemano -> se podría escribir en mayúsculas
const FECHA_NACIMIENTO = '18.04.1982';

// edad se CALCULA en tiempo de ejecución -> se queda en camelCase normal
function someCode(fecha) {
    // función de ejemplo; en un caso real calcularía la edad real a partir de la fecha
    const partes = fecha.split('.');
    const anioNacimiento = parseInt(partes[2]);
    const anioActual = new Date().getFullYear();
    return anioActual - anioNacimiento;
}
const edad = someCode(FECHA_NACIMIENTO);

console.log(FECHA_NACIMIENTO); // "18.04.1982"
console.log(edad);             // depende del año actual


// ---------- Ejercicio 3: Tipos de datos y template literals ----------
let nombre = "Jose";

console.log(`Hola ${1}`);        // "Hola 1"        -> se inserta el número 1
console.log(`Hola ${"nombre"}`); // "Hola nombre"    -> es el texto literal "nombre"
console.log(`Hola ${nombre}`);   // "Hola Jose"      -> usa el valor de la variable


// ---------- Ejercicio 4: Prefijo (++a) vs sufijo (b++) ----------
let a4 = 1, b4 = 1;
let c4 = ++a4; // se incrementa a4 PRIMERO -> c4 recibe el valor ya incrementado
let d4 = b4++; // se devuelve el valor ANTES de incrementar -> d4 recibe el valor viejo

console.log("a4:", a4); // 2
console.log("b4:", b4); // 2
console.log("c4:", c4); // 2
console.log("d4:", d4); // 1


// ---------- Ejercicio 5: Resultado de una asignación ----------
let a5 = 2;
let x5 = 1 + (a5 *= 2); // a5 *= 2 modifica a5 Y devuelve su nuevo valor (4)

console.log("a5:", a5); // 4
console.log("x5:", x5); // 5


// ---------- Ejercicio 6: Conversión de tipos ----------
console.log("" + 1 + 0);      // "10"   -> concatenación de strings
console.log("" - 1 + 0);      // -1     -> "-" fuerza conversión numérica
console.log(true + false);    // 1      -> true=1, false=0
console.log(6 / "3");         // 2      -> "3" se convierte a número
console.log("2" * "3");       // 6      -> ambos se convierten a número
console.log(4 + 5 + "px");    // "9px"  -> primero suma numérica, luego concatena
console.log("$" + 4 + 5);     // "$45"  -> concatena desde el principio
console.log("4" - 2);         // 2      -> "-" convierte "4" a número
console.log("4px" - 2);       // NaN    -> "4px" no es un número válido
console.log(" -9 " + 5);      // " -9 5" -> "+" concatena sin recortar espacios
console.log(" -9 " - 5);      // -14    -> "-" sí ignora espacios al convertir
console.log(null + 1);        // 1      -> Number(null) = 0
console.log(undefined + 1);   // NaN    -> Number(undefined) = NaN
console.log(" \t \n" - 2);    // -2     -> string de solo espacios/tabs = 0


// ---------- Ejercicio 7: Corregir la suma con prompt() ----------
// OJO: esta parte usa prompt()/alert(), solo funciona en el navegador,
// no en la consola de Node.js. Pruébala en la consola del navegador (F12).

let a7 = prompt("¿Primer número?", 1);
let b7 = prompt("¿Segundo número?", 2);

// ANTES (incorrecto): alert(a7 + b7);  -> concatenaba strings y daba "12"

// CORREGIDO: convertimos a número antes de sumar
alert(Number(a7) + Number(b7)); // resultado correcto: 3
