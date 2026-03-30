function verResolucion() {
  let resolucionAE = " ";

  const alumno = {
    nombre: "Dani",
    edad: 28,
    grupo: "FullStack",
    activo: true,
  };

  const { nombre, grupo } = alumno;

  resolucionAE += `El alumno ${nombre} pertenece al grupo ${grupo}`;
  console.log(nombre);
  console.log(grupo);

  const { nombre: nombreAlumno, grupo: grupoAlumno } = alumno;

  resolucionAE += `<br>El alumno ${nombreAlumno} pertenece al grupo ${grupoAlumno}`;
  console.log(nombreAlumno);
  console.log(grupoAlumno);

  const { rol = "usuario" } = alumno;

  resolucionAE += `<br>El alumno ${nombre} tiene el rol de ${rol}`;
  console.log(nombre);
  console.log(rol);

  document.getElementById("resolucionAE").innerHTML = resolucionAE;
}
