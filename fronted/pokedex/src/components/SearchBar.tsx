import { useState } from 'react';
import { buscarPokemonPorNombre } from '../services/pokemonApi';

function BuscadorPokemon({ alBuscar, alLimpiar }) {
  const [busqueda, setBusqueda] = useState('');

  const manejarInput = async (e) => {
    const valor = e.target.value.toLowerCase();
    setBusqueda(valor);

    if (!valor) {
      alLimpiar();
      return;
    }

    const pokemon = await buscarPokemonPorNombre(valor);
    if (pokemon) {
      alBuscar(pokemon);
    }
  };

  return (
    <header className="header">
      <input
        type="search"
        placeholder="Filtra Pokémon por nombre ..."
        onChange={manejarInput}
        autoFocus
      />
    </header>
  );
}

export default BuscadorPokemon;