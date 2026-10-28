let ventana = null;

function abrirVentana(url, ancho, alto) {
  let izquierda = (screen.width - ancho) / 2;
  let arriba = (screen.height - alto) / 2;

  let nueva = window.open(url, "_blank",
    "width=" + ancho + ",height=" + alto + ",left=" + izquierda + ",top=" + arriba);

  if (nueva === null) {
    console.log("El navegador ha bloqueado la ventana emergente");
    return null;
  }

  return nueva;
}

function cerrarVentana() {
  if (ventana !== null && !ventana.closed) {
    ventana.close();
    console.log("Ventana cerrada");
  } else {
    console.log("No hay ninguna ventana abierta");
  }
}

// Prueba sin clic: al cargar la página el navegador bloquea la ventana
// y sale el mensaje por consola. Descomenta la línea para comprobarlo.
// abrirVentana("https://www.google.com", 400, 300);
