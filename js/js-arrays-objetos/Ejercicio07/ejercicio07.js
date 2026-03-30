function verResolucion() {
  let resolucionAE = " ";

  const catalogo = [
    {
      id: 1,
      titulo: "The Legend of Zelda: Breath of the Wild",
      anio: 2017,
      genero: "Aventura",
      disponible: true,
    },
    {
      id: 2,
      titulo: "Interstellar",
      anio: 2014,
      genero: "Ciencia Ficción",
      disponible: false,
    },
    {
      id: 3,
      titulo: "The Last of Us Part II",
      anio: 2020,
      genero: "Acción / Drama",
      disponible: true,
    },
  ];

  console.log(catalogo);
  resolucionAE +="Array completo "+ JSON.stringify(catalogo) +"<br>";

  const tituloSegundo = catalogo[1].titulo;

  console.log(tituloSegundo);
  resolucionAE += "Titulo del segundo elemento : "+ tituloSegundo +"<br>";

  const tituloTercero = catalogo[2]?.disponible
  console.log(tituloTercero);
  resolucionAE +="si el tercero está disponible o no "+ tituloTercero;

  document.getElementById("resolucionAE").innerHTML = resolucionAE;
}
