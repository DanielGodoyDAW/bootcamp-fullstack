import { useEffect, useState } from 'react';
import './style/globals.css';
import './style/variables.css';
import PokemonCard from './components/PokemonCard'
import BackgroundBoxes from './components/BackgroundBoxes';
import { cargarPokemons } from './services/pokemonApi';
import SearchBar from './components/SearchBar';
import {filtrarPokemonsPorNombre} from './services/pokemonApi';
import type { Pokemon } from './services/pokemonApi';

function App() {
  const [pokemons, setPokemons] = useState<Pokemon[]>([]);
  const [pokemonsBase, setPokemonsBase] = useState<Pokemon[]>([]);

  useEffect(() => {
    async function cargar() {
      const data : Pokemon[] = await cargarPokemons();
      setPokemons(data);
      setPokemonsBase(data);
    }
    cargar();
  }, []);

  const manejarBusqueda = (texto:string | null) => {
    const resultado = filtrarPokemonsPorNombre(pokemonsBase, texto)
    setPokemons(resultado)
  };

  const manejarLimpiar = () => {
    setPokemons(pokemonsBase);
  };

  return (
    <>
      <BackgroundBoxes />
      <SearchBar alBuscar={manejarBusqueda} alLimpiar={manejarLimpiar} />
      <main>
        {pokemons.map((pokemon) => (
          <PokemonCard key={pokemon.id} pokemon={pokemon} />
        ))}
      </main>
    </>
  );
}

export default App
