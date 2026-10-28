function tablero(numColumnas, numFilas) {
  for (let i = 0; i < numColumnas; i++) {
    let linea = "";

    for (let j = 0; j < numFilas; j++) {
      linea += "#";
    }

    console.log(linea);
  }
}

tablero(8, 4);
