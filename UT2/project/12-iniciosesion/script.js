let userName = prompt("Inicio de sesion");

if (userName == "admin") {
  let clave = prompt("Contraseña");

  if (clave == "TheMaster") {
    alert("Bienvenido");
  } else if (userName === null || clave === "") {
    alert("cancelado");
  } else {
    alert("clave incorrecta");
  }
}
