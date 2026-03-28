function verResolucion() {
  let resolucionAE = " ";

  let resul = 0;
  for (let i = 1; i <= 5; i++) {
    resul = resul + i;
  }
  console.log(resul);

  resolucionAE = resul;

  document.getElementById("resolucionAE").innerHTML = resolucionAE;
}
