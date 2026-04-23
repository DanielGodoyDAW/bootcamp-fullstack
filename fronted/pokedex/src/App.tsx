import { useEffect, useState } from 'react';
import './style/globals.css';
import './style/variables.css';
import PokemonCard from './components/PokemonCard'
import { cargarPokemons } from './services/pokemonApi';
import SearchBar from './components/SearchBar';
import {filtrarPokemonsPorNombre} from './services/pokemonApi';

interface Pokemon {
  id: number;
  name: string;
  image: string;
  gif: string;
  type_color: string;
  types: string[];
  evolution?: string | null;
}

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
      <div className="box left-top"></div>
      <div className="box right-top"></div>
      <div className="box left-botton"></div>
      <div className="box right-botton"></div>
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
