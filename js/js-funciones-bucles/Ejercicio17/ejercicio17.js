function verResolucion() {
  let resolucionAE = " ";

  const contadorInicial = 10;

  const contador = crearContador(contadorInicial);

  resolucionAE += contador() + `<br>`;
  resolucionAE += contador() + `<br>`;
  resolucionAE += contador();

  const contadorLog = crearContador(contadorInicial);

  console.log(contadorLog() + `\n`);
  console.log(contadorLog() + `\n`);
  console.log(contadorLog());

  document.getElementById("resolucionAE").innerHTML = resolucionAE;
}

function crearContador(contador) {

  return function () {
    contador++;
    return contador;
  };
}
