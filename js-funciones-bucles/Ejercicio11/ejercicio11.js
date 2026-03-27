function verResolucion() {
  let resolucionAE = " ";

  document.getElementById("resolucionAE").innerHTML = resolucionAE;
}

const curso = "JavaScript"; //esta varible esta definida para todo el archivo, por eso es vista desde dentro
function mostrarCurso() {
  const mensaje = `Estás en el curso de ${curso}`;

  console.log(mensaje);
}
mostrarCurso();
//este log no lo lee, porque la variable mensaje esta dentro de la funcion y desde fuera no es visible
console.log(mensaje);
