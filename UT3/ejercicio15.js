function diaSemana(fecha) {
    let dias = ["domingo", "lunes", "martes", "miércoles", "jueves", "viernes", "sábado"];
    return dias[fecha.getDay()];
}

console.log(diaSemana(new Date(2026, 9, 9)));
console.log(diaSemana(new Date(2026, 9, 11)));
console.log(diaSemana(new Date(2026, 9, 5)));
