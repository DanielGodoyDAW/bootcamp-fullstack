function verResolucion() {
  let resolucionAE = " ";

  const numero1 = parseInt(prompt("Introduce un inicio"));
  const numero2 = parseInt(prompt("Introduce un fin"));

  resolucionAE = mostrarRango(numero1, numero2);
  console.log(mostrarRango(numero1, numero2));

  document.getElementById("resolucionAE").innerHTML = resolucionAE;
}

function mostrarRango(inicio, fin) {
  let resultado = "";

  for (let i = inicio; i <= fin; i++) {
    resultado += i +"<br>";
  }
  return resultado;
}
