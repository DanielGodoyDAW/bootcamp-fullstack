import { useEffect, useState } from 'react';
import './style/globals.css';
import './style/variables.css';
import PokemonCard from './components/PokemonCard'
import { cargarPokemons } from './services/pokemonApi';
import { BuscadorPokemon as SearchBar } from './components/SearchBar';

function App() {
  const [pokemons, setPokemons] = useState([]);
  const [pokemonsBase, setPokemonsBase] = useState([]);

  useEffect(() => {
    async function cargar() {
      const data = await cargarPokemons();
      setPokemons(data);
      setPokemonsBase(data);
    }
    cargar();
  }, []);

  const manejarBusqueda = (pokemon) => {
    if (pokemon) {
      setPokemons([pokemon]);
    }
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
