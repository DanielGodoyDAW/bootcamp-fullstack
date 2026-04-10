//constantes

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

//Funciones de utilidad

// Función para determinar el tipo usando el mapeo único
function obtenerTipoPokemon(tipo) {
  const tipoIngles = tipo.toLowerCase();
  return TIPO_MAP[tipoIngles] || tipoIngles;
}

// Función recursiva para buscar la evolución en la cadena de evolución
function buscarEvolucion(chain, nombrePokemon, evolucionAnterior = null) {
  // Si encontramos el pokemon actual
  if (chain.species.name === nombrePokemon) {
    if (evolucionAnterior) {
      return (
        evolucionAnterior.charAt(0).toUpperCase() + evolucionAnterior.slice(1)
      );
    }
    return null;
  }

  // Si no es el pokemon actual, buscamos en las evoluciones posteriores
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

//Funciones de API

// Función para cargar los pokemons desde la API
async function cargarPokemons() {
  try {
    // Obtener la lista de pokemons
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/?limit=9`);
    const datos = await response.json();

    // Usar Promise.all para esperar a que se resuelvan todas las promesas de los pokemons
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
    // Obtener los datos de la especie
    const responseSpecies = await fetch(
      `https://pokeapi.co/api/v2/pokemon-species/${pokemonId}/`,
    );
    const datosSpecies = await responseSpecies.json();

    // Obtener la cadena de evolución
    const urlEvolutionChain = datosSpecies.evolution_chain.url;
    const responseEvolutionChain = await fetch(urlEvolutionChain);
    const datosEvolutionChain = await responseEvolutionChain.json();

    // Buscar el pokemon actual en la cadena y obtener su evolución
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

// Función para formatear los datos del pokemon
async function formatearPokemon(datosApi) {
  const tipoIngles = datosApi.types[0].type.name.toLowerCase();

    // Convertir a español usando el mapeo único
    const tipoEspanol = TIPO_MAP[tipoIngles] || tipoIngles;

    // Obtener la evolución
    const evolucion = await obtenerEvolucion(datosApi.id);

    // GIF con fallback a imagen estática
    const gifUrl = datosApi.sprites.versions?.["generation-v"]?.["black-white"]?.animated?.front_default;
    const imagenFinal = gifUrl || datosApi.sprites.front_default;

    return{
      id: datosApi.id,
      nombre:
        datosApi.name.charAt(0).toUpperCase() + datosApi.name.slice(1),
      tipos: datosApi.types.map(
        (tipo) => tipo.type.name.charAt(0).toUpperCase() + tipo.type.name.slice(1),
      ),
      image: datosApi.sprites.front_default,
      gif: imagenFinal,
      tipo_color: tipoEspanol,
      evolucion: evolucion,
    };
    
}

//Funciones del DOM

// Función para mostrar los pokemons
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

  //iteramos sobre los tipos del pokemon y por cada tipo creamos un span con la clase del tipo y el texto del tipo
  pokemon.tipos.forEach((tipo) => {
    const spanTipo = document.createElement("span");
    const tipoEspanol = obtenerTipoPokemon(tipo); // Convertir a español
    spanTipo.className = `tipo ${tipoEspanol}`; // Usar nombre en español
    spanTipo.textContent = tipo; // Mantener el texto en inglés
    parrafoTipo.append(spanTipo);
  });

  //declaramos una variable para el div de evolucion
  let evolutionDiv = null;
  //si el pokemon tiene evolucion, creamos un div para mostrar la evolucion
  if (pokemon.evolucion) {
    evolutionDiv = document.createElement("div");
    evolutionDiv.className = `evolution`;
    evolutionDiv.textContent = `Evoluciona de `;

    const spanEvolution = document.createElement("span");
    spanEvolution.className = `evolution-pokemon evolution-${pokemon.tipo_color}`;
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

// Función para hacer el renderizado de las tarjetas
function renderizado(coleccion) {
  const main = document.querySelector("main");
  main.innerHTML = "";

  coleccion.forEach((pokemon) => {
    const tarjeta = crearTarjetaPokemon(pokemon);
    main.append(tarjeta);
  });
}

// Variables globales

let pokemonsBase = [];
let retardo;

//Eventos

// Evento DOMContentLoaded
document.addEventListener("DOMContentLoaded", async () => {
  pokemonsBase = await cargarPokemons();
  renderizado(pokemonsBase);
});

// Función para realizar la búsqueda
async function realizarBusqueda(nombre) {
  try {
    const pokemonNombre = nombre.target.value.trim().toLowerCase();
    if (!pokemonNombre) {
      renderizado(pokemonsBase);
      return;
    }

    // Si son SOLO números -> no permitir
    if (/^\d+$/.test(pokemonNombre)) {
      // aquí puedes mostrar un aviso o simplemente volver a la lista
      console.warn("La búsqueda no puede contener solo números.");
      // mostramos las tarjetas base
      renderizado(pokemonsBase);
      return;
    }
    const responseBusqueda = await fetch(
      `https://pokeapi.co/api/v2/pokemon/${pokemonNombre}`,
    );
    if (!responseBusqueda.ok) {
      return;
    }
    const dataBusqueda = await responseBusqueda.json();
    //console.log(dataBusqueda);

    const pokemonRenderizado = await formatearPokemon(dataBusqueda);
    renderizado([pokemonRenderizado]);
  } catch (error) {
    console.error("Error:", error);
  }
}

//Busqueda
const busqueda = document.querySelector("#busqueda");
busqueda.addEventListener("input", (e) => {
  clearTimeout(retardo); // Limpiar el retardo anterior para evitar búsquedas innecesarias
  retardo = setTimeout(() => {
  realizarBusqueda(e); 
  }, 400); //aplicmaos un retardo de 400ms para evitar hacer una búsqueda en cada pulsación
});