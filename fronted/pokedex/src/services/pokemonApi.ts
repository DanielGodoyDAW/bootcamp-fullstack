interface EvolutionChainNode {
  species: {
    name: string;
  };
  evolves_to: EvolutionChainNode[];
}

interface PokemonSpeciesResponse {
  name: string;
  evolution_chain: {
    url: string;
  };
}

interface PokemonListResponse {
  results: Array<{
    url: string;
  }>;
}

interface PokemonApiResponse {
  id: number;
  name: string;
  types: Array<{
    type: {
      name: string;
    };
  }>;
  sprites: {
    front_default: string | null;
    versions?: {
      "generation-v"?: {
        "black-white"?: {
          animated?: {
            front_default: string | null;
          };
        };
      };
    };
  };
}

export interface Pokemon {
  id: number;
  name: string;
  image: string;
  gif: string;
  type_color: string;
  types: string[];
  evolution: string | null;
}

function buscarEvolucion(
  chain: EvolutionChainNode,
  nombrePokemon: string,
  evolucionAnterior: string | null = null,
): string | null | undefined {
  // Si encontramos el pokemon actual
  if (chain.species.name === nombrePokemon) {
    if (typeof evolucionAnterior === "string") {
      return (
        evolucionAnterior.charAt(0).toUpperCase() + evolucionAnterior.slice(1)
      );
    }
    return null;
  }

  // Si no es el pokemon actual, buscamos en las evoluciones posteriores
  for (const evolucion of chain.evolves_to) {
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

async function obtenerEvolucion(pokemonId: number): Promise<string | null> {
  try {
    // Obtener los datos de la especie
    const responseSpecies = await fetch(
      `https://pokeapi.co/api/v2/pokemon-species/${pokemonId}/`,
    );

    if (!responseSpecies.ok) {
      if (responseSpecies.status !== 404) {
        // Solo loguea si no es 404, para no ensuciar la consola de mensajes esperados
        console.error(
          "Error al obtener datos de la especie:",
          responseSpecies.status,
        );
      }
      return null;
    }
    const datosSpecies =
      (await responseSpecies.json()) as PokemonSpeciesResponse;

    // Obtener la cadena de evolución
    const urlEvolutionChain = datosSpecies.evolution_chain.url;
    const responseEvolutionChain = await fetch(urlEvolutionChain);
    if (!responseEvolutionChain.ok) {
      return null;
    }

    const datosEvolutionChain = (await responseEvolutionChain.json()) as {
      chain: EvolutionChainNode;
    };

    // Buscar el pokemon actual en la cadena y obtener su evolución
    const evolucionEncontrada = buscarEvolucion(
      datosEvolutionChain.chain,
      datosSpecies.name,
    );

    return evolucionEncontrada ?? null;
  } catch (error) {
    console.error("Error al obtener evolución:", error);
    return null;
  }
}

async function cargarPokemons(): Promise<Pokemon[]> {
  try {
    // Obtener la lista de pokemons
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/?limit=151`);
    if (!response.ok) {
      return [];
    }
    const datos = (await response.json()) as PokemonListResponse;

    // Usar Promise.all para esperar a que se resuelvan todas las promesas de los pokemons
    const pokemons = await Promise.all(
      datos.results.map(async (pokemonLista: { url: string }) => {
        const respuesta = await fetch(pokemonLista.url);
        const datosAPI = (await respuesta.json()) as PokemonApiResponse;

        return formatearPokemon(datosAPI);
      }),
    );

    return pokemons;
  } catch (error) {
    console.error("Error:", error);
    return [];
  }
}

async function formatearPokemon(datosApi: PokemonApiResponse): Promise<Pokemon> {
  // aprovechamos el tipo original
  const mainType = datosApi.types?.[0]?.type?.name ?? "normal";

  // Obtener la evolución
  const evolucion = await obtenerEvolucion(datosApi.id);

  // GIF con fallback a imagen estática
  const gifUrl =
    datosApi.sprites.versions?.["generation-v"]?.["black-white"]?.animated
      ?.front_default || null;
  // Pokéball como imagen fallback universal
  const imageDefault = datosApi.sprites.front_default || null;
  // Si no hay ni GIF ni imagen estática, usar una imagen de pokéball como último recurso
  const fallbackImage =
    "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/poke-ball.png";
  // Determinar la imagen final a mostrar
  const imagenFinal = imageDefault || fallbackImage;
  // Determinar el GIF final a mostrar, con fallback a imagen estática o pokéball
  const gifFinal = gifUrl || imagenFinal;

  return {
    id: datosApi.id,
    name: datosApi.name.charAt(0).toUpperCase() + datosApi.name.slice(1),
    types: datosApi.types.map((tipo: { type: { name: string } }) =>
      tipo.type.name.toLowerCase(),
    ),
    image: imagenFinal,
    gif: gifFinal,
    type_color: mainType,
    evolution: evolucion,
  };
}

// Función para realizar la búsqueda
async function buscarPokemonPorNombre(nombre: string): Promise<Pokemon | null> {
  try {
    // Si son SOLO números -> no permitir
    if (/^\d+$/.test(nombre)) {
      // aquí puedes mostrar un aviso o simplemente volver a la lista
      console.warn("La búsqueda no puede contener solo números.");
      // mostramos las tarjetas base
      return null;
    }

    const responseBusqueda = await fetch(
      `https://pokeapi.co/api/v2/pokemon/${nombre}`,
    );
    if (!responseBusqueda.ok) {
      return null;
    }
    const dataBusqueda = (await responseBusqueda.json()) as PokemonApiResponse;
    return await formatearPokemon(dataBusqueda);
  } catch (error) {
    console.error("Error:", error);
    return null;
  }
}

function filtrarPokemonsPorNombre(
  pokemons: Pokemon[],
  texto: string | null,
): Pokemon[] {
  if (!texto) return pokemons;

  const palabra = texto.trim().toLowerCase();
  if (!palabra) return pokemons;
  return pokemons.filter((p: Pokemon) => p.name.toLowerCase().includes(palabra));
}

export { cargarPokemons, formatearPokemon, buscarPokemonPorNombre, filtrarPokemonsPorNombre };
