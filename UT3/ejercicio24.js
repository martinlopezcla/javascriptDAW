function subir() {
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function bajar300() {
  window.scrollBy(0, 300);
}

function posicion() {
  console.log("Desplazamiento: " + window.scrollY + " px");
}
