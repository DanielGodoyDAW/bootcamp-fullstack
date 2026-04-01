function verSolucion() {
  let solucion = " ";

  const alumnos = new Map([
    ["Fran", 4],
    ["Pepe", 5],
    ["Maria", 6],
    ["Sofia", 7],
    ["Pablo", 8],
    ["Lucia", 9],
    ["Diego", 10],
  ]);

  console.log("La Nota de Fran es " + alumnos.get("Fran"));
  solucion += "La Nota de Fran es " + alumnos.get("Fran") + "<br><br>";

  solucion += "Map Original: <br>";
  alumnos.forEach((nota, alumno) => {
    solucion += `${alumno} - ${nota} <br>`;
  });
  
  console.log("Map original \n");
  console.log(alumnos);

  const alumnosCopia = new Map(alumnos);
  alumnosCopia.set("Carlos", 3);

  console.log("Map con Carlos \n");
  console.log(alumnosCopia);

  solucion += "<br>Map después de añadir a Carlos: <br>";
  alumnosCopia.forEach((nota, alumno) => {
    solucion += `${alumno} - ${nota} <br>`;
  });

  document.getElementById("solucion").innerHTML = solucion;
}
