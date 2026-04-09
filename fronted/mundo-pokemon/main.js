//Coleccion de pokemons, mapeo antiguo para la insercion manual de las tarjetas
const pokemons = [
  {
    id: 1,
    nombre: "Bulbasaur",
    tipos: ["Poison", "Grass"],
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png",
    gif: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/1.gif",
    tipo_color: "planta",
    evolucion: null,
  },
  {
    id: 2,
    nombre: "Ivysaur",
    tipos: ["Poison", "Grass"],
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/2.png",
    gif: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/2.gif",
    tipo_color: "planta",
    evolucion: "Bulbasaur",
  },
  {
    id: 3,
    nombre: "Venusaur",
    tipos: ["Poison", "Grass"],
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/3.png",
    gif: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/3.gif",
    tipo_color: "planta",
    evolucion: "Ivysaur",
  },
  {
    id: 4,
    nombre: "Charmander",
    tipos: ["Fire"],
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/4.png",
    gif: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/4.gif",
    tipo_color: "fuego",
    evolucion: null,
  },
  {
    id: 5,
    nombre: "Charmeleon",
    tipos: ["Fire"],
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/5.png",
    gif: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/5.gif",
    tipo_color: "fuego",
    evolucion: "Charmander",
  },
  {
    id: 6,
    nombre: "Charizard",
    tipos: ["Fire", "Flying"],
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/6.png",
    gif: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/6.gif",
    tipo_color: "fuego",
    evolucion: "Charmeleon",
  },
  {
    id: 7,
    nombre: "Squirtle",
    tipos: ["Water"],
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/7.png",
    gif: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/7.gif",
    tipo_color: "agua",
    evolucion: null,
  },
  {
    id: 8,
    nombre: "Wartortle",
    tipos: ["Water"],
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/8.png",
    gif: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/8.gif",
    tipo_color: "agua",
    evolucion: "Squirtle",
  },
  {
    id: 9,
    nombre: "Blastoise",
    tipos: ["Water"],
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/9.png",
    gif: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/9.gif",
    tipo_color: "agua",
    evolucion: "Wartortle",
  },
];

//Funcion para mostrar los pokemons

function crearTarjetaPokemon(pokemon) {
  //crear contenedor principal
  const article = document.createElement("article");
  article.className = `container container-${pokemon.tipo_color}`;

  //crear div para la imagen
  const containerDiv = document.createElement("div");
  containerDiv.className = `container-div container-div-${pokemon.tipo_color}`;

  //crear figure para la imagen
  const figure = document.createElement("figure");
  figure.className = `pokemon-img`;

  //crear img static
  const imgStatic = document.createElement("img");
  imgStatic.className = `static`;
  imgStatic.src = pokemon.image;
  imgStatic.alt = `imagen de ${pokemon.nombre}`;

  //crear img gif

  const imgGif = document.createElement("img");
  imgGif.className = `gif`;
  imgGif.src = pokemon.gif;
  imgGif.alt = `imagen de ${pokemon.nombre}`;

  //insertamos dentro de figure el img static y el img gif
  figure.append(imgStatic, imgGif);

  const pID = document.createElement("p");
  pID.className = `container-div-p-ID`;
  pID.textContent = `ID: ${pokemon.id}`;

  //insertamos dentro del div el figure y el pID
  containerDiv.append(figure, pID);

  //crear div con clase y tipo
  const divTipo = document.createElement("div");

  //parrafo y strong
  const parrafoClase = document.createElement("p");
  const strongClase = document.createElement("strong");
  strongClase.className = pokemon.tipo_color;
  strongClase.textContent = pokemon.nombre;

  //insertamos el strong dentro del parrafo
  parrafoClase.append(strongClase);

  const parrafoTipo = document.createElement("p");

  //iteramos sobre los tipos del pokemon y por cada tipo creamos un span con la clase del tipo y el texto del tipo, luego insertamos el span dentro del parrafo de tipo
  pokemon.tipos.forEach((tipo) => {
    const spanTipo = document.createElement("span");
    spanTipo.className = `tipo ${obtenerTipoPokemon(tipo)}`;
    spanTipo.textContent = tipo;
    //insertamos el span dentro del parrafo
    parrafoTipo.append(spanTipo);
  });

  //declaramos una variable para el div de evolucion, si el pokemon no tiene evolucion, esta variable quedara en null y no se renderizara el div de evolucion
  let evolutionDiv = null;
  //si el pokemon tiene evolucion, creamos un div para mostrar la evolucion
  if (pokemon.evolucion) {
    evolutionDiv = document.createElement("div");
    evolutionDiv.className = `evolution`;
    evolutionDiv.textContent = `Evoluciona de `;

    const spanEvolution = document.createElement("span");
    spanEvolution.className = `evolution-pokemon evolution-${pokemon.tipo_color}`;
    spanEvolution.textContent = pokemon.evolucion;

    //insertamos el span dentro del div de evolucion
    evolutionDiv.append(spanEvolution);
  }
  //insertamos el parrafo de clase, el parrafo de tipo y el div de evolucion dentro del divTipo
  divTipo.append(parrafoClase, parrafoTipo);

  if (evolutionDiv) {
    //insertamos el div de evolucion dentro del divTipo
    divTipo.append(evolutionDiv);
  }

  //insertamos el divTipo dentro del article
  article.append(containerDiv, divTipo);

  return article;
}

//funcion para determinar el tipo (los nombres asi son por las clases de css)
function obtenerTipoPokemon(tipo) {
  const tiposPokemon = {
    Poison: "veneno",
    Grass: "hierva",
    Fire: "fire",
    Flying: "volador",
    Water: "water",
  };
  return tiposPokemon[tipo] || "";
}

//funcion para hacer el renderizado de las tarjetas
function renderizado(coleccion) {
  const main = document.querySelector("main");
  //vaciamos el main
  main.innerHTML = "";

  //iteramos sobre la coleccion de pokemons y por cada pokemon creamos una tarjeta y la insertamos en el main
  coleccion.forEach((pokemon) => {
    const tarjeta = crearTarjetaPokemon(pokemon);
    main.append(tarjeta);
  });
}

//esperamos a que el DOM este cargado para hacer el renderizado de las tarjetas
document.addEventListener("DOMContentLoaded", () => {
  renderizado(pokemons);
});