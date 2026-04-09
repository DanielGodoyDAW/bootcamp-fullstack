//Busqueda
const busqueda = document.querySelector("#busqueda");
busqueda.addEventListener("input", realizarBusqueda);

async function realizarBusqueda(nombre) {
  try {
    const pokemonNombre = nombre.target.value.trim().toLowerCase();
    if (!pokemonNombre) {
      renderizado(pokemonsBase);
      return;
    }
    const responseBusqueda = await fetch(
      `https://pokeapi.co/api/v2/pokemon/${encodeURIComponent(pokemonNombre)}`,
    );
    if (!responseBusqueda.ok) {
      return;
    }
    const dataBusqueda = await responseBusqueda.json();

    const pokemonRenderizado = await formatearPokemon(dataBusqueda);
    renderizado([pokemonRenderizado]);
  } catch (error) {
    console.error("Error:", error);
  }
}

async function formatearPokemon(datosApi) {
  const tipoIngles = datosApi.types[0].type.name.toLowerCase();
  const tipoEspanol = TIPO_MAP[tipoIngles] || tipoIngles;
  const evolucion = await obtenerEvolucion(datosApi.id);

  const gifUrl =
    datosApi.sprites.versions?.["generation-v"]?.["black-white"]?.animated
      ?.front_default;
  const imagenFinal = gifUrl || datosApi.sprites.front_default;

  return {
    id: datosApi.id,
    nombre:
      datosApi.name.charAt(0).toUpperCase() + datosApi.name.slice(1),
    tipos: datosApi.types.map(
      (tipo) =>
        tipo.type.name.charAt(0).toUpperCase() + tipo.type.name.slice(1),
    ),
    image: datosApi.sprites.front_default,
    gif: imagenFinal,
    tipo_color: tipoEspanol,
    evolucion: evolucion,
  };
}

// MAPEO ÚNICO DE TIPOS - Punto de verdad para todos los tipos
const TIPO_MAP = {
  grass: "planta",
  fire: "fuego",
  water: "agua",
  poison: "veneno",
  flying: "volador",
  electric: "electrico",
  psychic: "psiquico",
  ice: "hielo",
  dragon: "dragon",
  dark: "siniestro",
  steel: "acero",
  fairy: "hada",
  normal: "normal",
  fighting: "lucha",
  ground: "tierra",
  rock: "roca",
  bug: "bicho",
  ghost: "fantasma",
};

// Función para cargar los pokemons desde la API
async function cargarPokemons() {
  try {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/?limit=9`);
    const datos = await response.json();

    const pokemons = await Promise.all(
      datos.results.map(async (pokemonLista) => {
        const respuesta = await fetch(pokemonLista.url);
        const datosAPI = await respuesta.json();

        return formatearPokemon(datosAPI);
      }),
    );

    return pokemons;
  } catch (error) {
    console.error("Error:", error);
    return [];
  }
}

// Función para obtener la evolución
async function obtenerEvolucion(pokemonId) {
  try {
    const responseSpecies = await fetch(
      `https://pokeapi.co/api/v2/pokemon-species/${pokemonId}/`,
    );
    const datosSpecies = await responseSpecies.json();

    const urlEvolutionChain = datosSpecies.evolution_chain.url;
    const responseEvolutionChain = await fetch(urlEvolutionChain);
    const datosEvolutionChain = await responseEvolutionChain.json();

    const evolucionEncontrada = buscarEvolucion(
      datosEvolutionChain.chain,
      datosSpecies.name,
    );

    return evolucionEncontrada;
  } catch (error) {
    console.error("Error al obtener evolución:", error);
    return null;
  }
}

// Función recursiva para buscar la evolución en la cadena de evolución
function buscarEvolucion(chain, nombrePokemon, evolucionAnterior = null) {
  if (chain.species.name === nombrePokemon) {
    if (evolucionAnterior) {
      return (
        evolucionAnterior.charAt(0).toUpperCase() + evolucionAnterior.slice(1)
      );
    }
    return null;
  }

  for (let evolucion of chain.evolves_to) {
    const resultado = buscarEvolucion(
      evolucion,
      nombrePokemon,
      chain.species.name,
    );
    if (resultado !== undefined) {
      return resultado;
    }
  }

  return undefined;
}

// Función para mostrar los pokemons
function crearTarjetaPokemon(pokemon) {
  // crear contenedor principal
  const article = document.createElement("article");
  article.classList.add("container", `container-${pokemon.tipo_color}`);

  // crear div para la imagen
  const containerDiv = document.createElement("div");
  containerDiv.classList.add(
    "container-div",
    `container-div-${pokemon.tipo_color}`,
  );

  // crear figure para la imagen
  const figure = document.createElement("figure");
  figure.classList.add("pokemon-img");

  // crear img static
  const imgStatic = document.createElement("img");
  imgStatic.classList.add("static");
  imgStatic.src = pokemon.image;
  imgStatic.alt = `imagen de ${pokemon.nombre}`;

  // crear img gif
  const imgGif = document.createElement("img");
  imgGif.classList.add("gif");
  imgGif.src = pokemon.gif;
  imgGif.alt = `imagen de ${pokemon.nombre}`;

  // insertamos dentro de figure el img static y el img gif
  figure.append(imgStatic, imgGif);

  const pID = document.createElement("p");
  pID.classList.add("container-div-p-ID");
  pID.textContent = `ID: ${pokemon.id}`;

  // insertamos dentro del div el figure y el pID
  containerDiv.append(figure, pID);

  // crear div con clase y tipo
  const divTipo = document.createElement("div");

  // parrafo y strong
  const parrafoClase = document.createElement("p");
  const strongClase = document.createElement("strong");
  strongClase.classList.add(pokemon.tipo_color);
  strongClase.textContent = pokemon.nombre;

  // insertamos el strong dentro del parrafo
  parrafoClase.append(strongClase);

  const parrafoTipo = document.createElement("p");

  // iteramos sobre los tipos del pokemon y por cada tipo creamos un span con la clase del tipo y el texto del tipo
  pokemon.tipos.forEach((tipo) => {
    const spanTipo = document.createElement("span");
    const tipoEspanol = obtenerTipoPokemon(tipo); // Convertir a español
    spanTipo.classList.add("tipo", tipoEspanol); // Usar classList.add
    spanTipo.textContent = tipo; // Mantener el texto en inglés
    parrafoTipo.append(spanTipo);
  });

  // declaramos una variable para el div de evolucion
  let evolutionDiv = null;
  // si el pokemon tiene evolucion, creamos un div para mostrar la evolucion
  if (pokemon.evolucion) {
    evolutionDiv = document.createElement("div");
    evolutionDiv.classList.add("evolution");
    evolutionDiv.textContent = `Evoluciona de `;

    const spanEvolution = document.createElement("span");
    spanEvolution.classList.add(
      "evolution-pokemon",
      `evolution-${pokemon.tipo_color}`,
    );
    spanEvolution.textContent = pokemon.evolucion;

    evolutionDiv.append(spanEvolution);
  }

  divTipo.append(parrafoClase, parrafoTipo);

  if (evolutionDiv) {
    divTipo.append(evolutionDiv);
  }

  article.append(containerDiv, divTipo);

  return article;
}

// Función para determinar el tipo usando el mapeo único
function obtenerTipoPokemon(tipo) {
  const tipoIngles = tipo.toLowerCase();
  return TIPO_MAP[tipoIngles] || tipoIngles;
}

// Función para hacer el renderizado de las tarjetas
function renderizado(coleccion) {
  const main = document.querySelector("main");
  main.innerHTML = "";

  coleccion.forEach((pokemon) => {
    const tarjeta = crearTarjetaPokemon(pokemon);
    main.append(tarjeta);
  });
}

let pokemonsBase = [];

// Evento DOMContentLoaded
document.addEventListener("DOMContentLoaded", async () => {
  pokemonsBase = await cargarPokemons();
  renderizado(pokemonsBase);
});