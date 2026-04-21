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

async function formatearPokemon(datosApi) {

    // aprovechamos el tipo original
    const mainType = datosApi.types?.[0]?.type?.name ?? "normal"

    // Obtener la evolución
    const evolucion = await obtenerEvolucion(datosApi.id);

    // GIF con fallback a imagen estática
    const gifUrl = datosApi.sprites.versions?.["generation-v"]?.["black-white"]?.animated?.front_default;
    const imagenFinal = gifUrl || datosApi.sprites.front_default;


    return{
      id: datosApi.id,
      name:
        datosApi.name.charAt(0).toUpperCase() + datosApi.name.slice(1),
      types: datosApi.types.map(
        (tipo) => tipo.type.name.charAt(0).toUpperCase() + tipo.type.name.slice(1),
      ),
      image: datosApi.sprites.front_default,
      gif: imagenFinal,
      type_color: mainType,
      evolution: evolucion,
    };
    
}



export { cargarPokemons, formatearPokemon };

// async function realizarBusqueda(nombre) {
//   try {
//     const pokemonNombre = nombre.target.value.trim().toLowerCase();
//     if (!pokemonNombre) {
//       renderizado(pokemonsBase);
//       return;
//     }

//     // Si son SOLO números -> no permitir
//     if (/^\d+$/.test(pokemonNombre)) {
//       // aquí puedes mostrar un aviso o simplemente volver a la lista
//       console.warn("La búsqueda no puede contener solo números.");
//       // mostramos las tarjetas base
//       renderizado(pokemonsBase);
//       return;
//     }
//     const responseBusqueda = await fetch(
//       `https://pokeapi.co/api/v2/pokemon/${pokemonNombre}`,
//     );
//     if (!responseBusqueda.ok) {
//       return;
//     }
//     const dataBusqueda = await responseBusqueda.json();
//     //console.log(dataBusqueda);

//     const pokemonRenderizado = await formatearPokemon(dataBusqueda);
//     renderizado([pokemonRenderizado]);
//   } catch (error) {
//     console.error("Error:", error);
//   }
// }