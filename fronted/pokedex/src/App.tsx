import { useEffect, useState } from 'react';
// import './App.css'
import PokemonCard from './components/PokemonCard'
import { cargarPokemons } from './services/pokemonApi';

function App() {
  const [pokemons, setPokemons] = useState([]);

  useEffect(() => {
    async function cargar() {
      const data = await cargarPokemons();
      setPokemons(data);
    }
    cargar();
  }, []);

  return (
    <main>
      {pokemons.map((pokemon) => (
        <PokemonCard key={pokemon.id} pokemon={pokemon} />
      ))}
    </main>
  );
}

export default App
