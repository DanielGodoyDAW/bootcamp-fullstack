import { useState } from 'react';
import { buscarPokemonPorNombre } from '../services/pokemonApi';

interface Pokemon {
  id: number;
  name: string;
  image: string;
  gif: string;
  type_color: string;
  types: string[];
  evolution?: string | null;
}


interface BuscadorPokemonProps {
  alBuscar: (pokemon: Pokemon) => void;
  alLimpiar: () => void;
}

function BuscadorPokemon({ alBuscar, alLimpiar }: BuscadorPokemonProps) {
  const [busqueda, setBusqueda] = useState('');

  const manejarInput = async (e) => {
    const valor = e.target.value.toLowerCase();
    setBusqueda(valor);

    if (!valor) {
      alLimpiar();
      return;
    }

    if (valor.length < 3){
      alLimpiar();
      return; 
    } 

    try{
      const pokemon = await buscarPokemonPorNombre(valor);
      if (pokemon) {
        alBuscar(pokemon);
      }else{
        alLimpiar();
      }
    } catch (error) {
      alLimpiar();
      console.error("Error en la búsqueda:", error);
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