const curso = "JavaScript";

function mostrarCurso() {
  const mensaje = `Estás en el curso de ${curso}`;
  console.log(mensaje);
  return mensaje;
}

function verResolucion() {
  let resolucionAE = " ";

  resolucionAE += mostrarCurso() + "<br><br>";

  if (true) {
    const variableBloque = "Variable dentro del if";
    console.log(variableBloque);
    resolucionAE += variableBloque + "<br>";
  }

  document.getElementById("resolucionAE").innerHTML = resolucionAE;
}

verResolucion();