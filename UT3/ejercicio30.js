function cambioPagina(url, reemplazar) {
  if (url == null || url == "" || url == undefined) {
    alert("No hay url");
  }

  location.replace(url);
}
