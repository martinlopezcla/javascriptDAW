function extraeDatos(dir) {
  let Arroba = dir.indexOf("@");
  let DosPuntos = dir.indexOf(":");

  let puerto = dir.slice(DosPos + 1);

  console.log("Usuario: " + usuario);
  console.log("Dominio: " + dominio);
  console.log("Puerto: " + puerto);
}

extraeDatos("admin@servidor.com:8080");
