function verResolucion() {
  let resolucionAE = " ";

  const numero = parseInt(prompt("Introduce un numero entero"));

  resolucionAE = "La funcion declarada seria: " + declarada(numero);
  console.log("La funcion expresada seria " + expresada(numero));
  console.log("La funcion flecha seria: " + flecha(numero));

  document.getElementById("resolucionAE").innerHTML = resolucionAE;
}

function declarada(a) {
  return a * a;
}

const expresada = function (a) {
  return a * a;
};

const flecha = (a) => a * a;
