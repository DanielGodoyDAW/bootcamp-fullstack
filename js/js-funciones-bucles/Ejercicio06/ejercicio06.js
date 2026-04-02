function verResolucion() {
  let resolucionAE = " ";

  let resultado = suma(2, 3);

  console.log(resultado);

  let operacion = 4 - resultado;

  console.log(operacion);

  resolucionAE = `El resultado de la suma es ${resultado} y el resultado de la operación es ${operacion}`;

  document.getElementById("resolucionAE").innerHTML = resolucionAE;
}

function suma(a, b) {
  return a + b;
}
