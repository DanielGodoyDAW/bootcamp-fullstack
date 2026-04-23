import { useState } from 'react';

interface BuscadorPokemonProps {
  alBuscar: (texto:string) => void;
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
    }else{
      alBuscar(valor);
      return;
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