function verSolucion() {
  let solucion = " ";

  const pokemons = [
    "Planta",
    "Fuego",
    "Agua",
    "Eléctrico",
    "Hielo",
    "Lucha",
    "Veneno",
    "Tierra",
    "Volador",
    "Psíquico",
  ];

  const existe = pokemons.includes("Planta");

  console.log(`¿El tipo planta existe?`, existe ? "Si" : "No");
  solucion += `¿El tipo planta existe? ${existe ? "Si" : "No"} <br>`;

  const niPerri = pokemons.includes("Perri");

  console.log(`¿Este tipo existe?`, niPerri ? "Si" : "No");
  solucion += `¿Este tipo existe? ${niPerri ? "Si" : "No"}`;

  document.getElementById("solucion").innerHTML = solucion;
}
