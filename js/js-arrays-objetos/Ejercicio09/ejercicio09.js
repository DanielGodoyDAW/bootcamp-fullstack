function verResolucion() {
  let resolucionAE = " ";

  const cursos = [
    {
      titulo: "Introducción a JavaScript",
      duracion: 40,
      nivel: "principiante",
      activo: true,
    },
    {
      titulo: "JavaScript Avanzado",
      duracion: 60,
      nivel: "intermedio",
      activo: true,
    },
    {
      titulo: "React desde Cero",
      duracion: 50,
      nivel: "intermedio",
      activo: true,
    },
    {
      titulo: "Node.js y Express",
      duracion: 55,
      nivel: "avanzado",
      activo: false,
    },
  ];

  cursos.forEach((curso) => {
    console.log(`
        Titulo: ${curso.titulo }|
        Duracion: ${curso.duracion} horas |
        Nivel: ${curso.nivel} |
        Activo: ${curso.activo}
        `);
  });

  cursos.forEach((curso) => {
    resolucionAE += `
        Titulo: ${curso.titulo}|
        Duracion: ${curso.duracion} horas|
        Nivel: ${curso.nivel}|
        Activo: ${curso.activo} <br>`;
  });

  document.getElementById("resolucionAE").innerHTML = resolucionAE;
}
