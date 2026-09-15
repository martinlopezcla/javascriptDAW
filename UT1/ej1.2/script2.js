const MAX = 1000;
let seguir = true;

for (let i = 900; seguir === true; i++) {
  document.body.innerHTML += "<p>" + i + "</p>";

  if (i === MAX) {
    seguir = false;
  }
}
