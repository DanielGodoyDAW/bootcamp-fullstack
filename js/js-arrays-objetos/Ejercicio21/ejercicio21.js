function verSolucion() {
  let solucion = " ";

  //array que cumple los objetivos 1 y 2
  const cursos = [
    {
      id: 1,
      nombre: "JavaScript Básico",
      duracion: 40,
      disponible: true,
      instructor: {
        nombre: "Juan García",
        email: "juan@ejemplo.com",
      },
    },
    {
      id: 2,
      nombre: "React Avanzado",
      duracion: 60,
      disponible: true,
      instructor: {
        nombre: "María López",
        email: "maria@ejemplo.com",
      },
    },
    {
      id: 3,
      nombre: "Node.js",
      duracion: 50,
      disponible: false,
      instructor: {
        nombre: "Carlos Martín",
        email: "carlos@ejemplo.com",
      },
    },
  ];

  //mostrar el catálogo completo
  console.log("Catálogo de cursos:", cursos);
  solucion = "Catálogo de cursos: " + JSON.stringify(cursos);

  //acceder a una propiedad anidada
  console.log(
    "Instructor del curso de React Avanzado:",
    cursos[1].instructor.nombre,
  );
  solucion +=
    "<br><br>Instructor del curso de React Avanzado: " +
    cursos[1].instructor.nombre;

  //desestructurar al menos una parte del dato
  const { nombre: nombreCurso, duracion } = cursos[0];
  console.log("Curso desestructurado:", nombreCurso, duracion);
  solucion +=
    "<br><br>Curso desestructurado: " + nombreCurso + ", Duración: " + duracion;

  //crear una copia modificada de uno de los elementos usando spread
  const cursoModificado = { ...cursos[0], disponible: false };
  console.log("Curso modificado:", cursoModificado);
  solucion += "<br><br>Curso modificado: " + JSON.stringify(cursoModificado);

  //usar optional chaining o nullish coalescing en algún acceso
  const emailInstructor = cursos[2].instructor?.email ?? "Email no disponible";
  console.log("Email del instructor del curso de Node.js:", emailInstructor);
  solucion +=
    "<br><br>Email del instructor del curso de Node.js: " + emailInstructor;

  //convertir la colección a JSON y reconstruirla
  const cursosJSON = JSON.stringify(cursos);
  const cursosReconstruidos = JSON.parse(cursosJSON);
  console.log("Cursos reconstruidos:", cursosReconstruidos);
  solucion +=
    "<br><br>Cursos reconstruidos: " + JSON.stringify(cursosReconstruidos);

  document.getElementById("solucion").innerHTML = solucion;
}