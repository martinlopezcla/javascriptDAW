function extraerValorDolares(str) {
  function extraerValorDolares(str) {
    return Number(str.slice(1));
  }

  console.log(extraerValorDolares("$120"));
  console.log(extraerValorDolares("$9.99"));
}
