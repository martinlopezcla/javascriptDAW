function truncar(str, maxLong) {
  if (str.length > maxLong) {
    return str.slice(0, maxLong - 1) + "…";
  } else {
    return str;
  }
}

console.log(truncar("Lo que me gustaría contar sobre este tema es:", 20));
// "Lo que me gustaría …"  → 19 + 1 = 20 caracteres

console.log(truncar("Hola a todos!", 20));
// "Hola a todos!"
