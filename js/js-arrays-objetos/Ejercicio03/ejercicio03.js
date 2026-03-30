function verResolucion() {
  let resolucionAE = " ";

  //lista de nombres
  const nombres = ["Manolo", "Jorge", "Ivan"];

  //datos de un producto
  const producto = {
    nombre: "Android",
    marca: "periquito",
    modelo: "menganito",
  };

  //tareas con título y estado
  const tarea = [
    {
      lengua: "en proceso",
    },
    {
      matematica: "finalizado",
    },
  ];

  //ciudades visitadas por una persona
  const ciudades = ["Madrid", "Barcelona", "Málaga"];

  //catálogo de películas con título, año y género

  const peliculas = [
    {
      titulo: "Star Wars",
      anio: 1977,
      genero: "ciencia ficcion",
    },
    {
      titulo: "Star Wars 2",
      anio: 1979,
      genero: "ciencia ficcion",
    },
  ];

  resolucionAE += "nombres "+ nombres.toString() + "<br>";
  resolucionAE += "producto "+ JSON.stringify(producto) + "<br>";
  resolucionAE += "tarea "+ JSON.stringify(tarea) + "<br>";
  resolucionAE += "ciudades "+ ciudades.toString() + "<br>";
  resolucionAE += "películas "+ JSON.stringify(peliculas);

  console.log(nombres)
  console.log(producto)
  console.log(tarea)
  console.log(ciudades)
  console.log(peliculas)

  document.getElementById("resolucionAE").innerHTML = resolucionAE;
}
