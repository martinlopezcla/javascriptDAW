const MAX2 = 100;
let seguir2 = true;

for (let i = 1; seguir2 === true; i++) {
  document.body.innerHTML += "<p>" + i + "</p>";

  if (i === MAX2) {
    seguir2 = false;
  }
}
