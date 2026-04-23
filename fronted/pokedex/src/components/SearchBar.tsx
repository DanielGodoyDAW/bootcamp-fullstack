import { type ChangeEvent, useState } from 'react';

interface BuscadorPokemonProps {
  alBuscar: (texto:string) => void;
  alLimpiar: () => void;
}

function BuscadorPokemon({ alBuscar, alLimpiar }: BuscadorPokemonProps) {
  const [busqueda, setBusqueda] = useState('');

  const manejarInput = (e: ChangeEvent<HTMLInputElement>) => {
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
        value={busqueda}
        autoFocus
      />
    </header>
  );
}

export default BuscadorPokemon;