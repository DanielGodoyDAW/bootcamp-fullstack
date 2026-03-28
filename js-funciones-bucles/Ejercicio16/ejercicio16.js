function verResolucion() {
  let resolucionAE = " ";

  const contador = crearContador();

  resolucionAE += contador()+ `<br>`;
  resolucionAE += contador()+ `<br>`;
  resolucionAE += contador();

  /*
  para mostrar el ejemplo con console.log inicializo una nueva variable,
  ya que si uso contador, seguiria por el 4, 5 y 6 
  */

  const contadorLog = crearContador();

  console.log(contadorLog()+ `<br>`);
  console.log(contadorLog()+ `<br>`);
  console.log(contadorLog());

  document.getElementById("resolucionAE").innerHTML = resolucionAE;
}

function crearContador() {
  let contador = 0;

  return function () {
    contador++;
    return contador;
  };
}
