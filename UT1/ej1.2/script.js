const MAC = 100;
let continuar = true;

for (let i = 1; continuar === true; i++) {
  document.body.innerHTML += "<p>" + i + "</p>";

  if (i === MAC) {
    continuar = false;
  }
}
