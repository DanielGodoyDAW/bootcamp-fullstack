import { useState } from "react";
import PokemonPopup from "./PokemonPopUp";
import type { Pokemon } from "../services/pokemonApi";

interface CartaPokemonProps {
  pokemon: Pokemon;
}

function CartaPokemon({ pokemon }: CartaPokemonProps) {
  const [popupAbierto, setPopupAbierto] = useState(false);

  return (
    <div className="carta-pokemon">
      <img 
        src={pokemon.image} 
        alt={pokemon.name} 
        onClick={() => setPopupAbierto(true)}
        style={{ cursor: "pointer" }}
      />
      <span>{pokemon.name}</span>
      {/* Popup */}
      <PokemonPopup
        pokemon={pokemon}
        visible={popupAbierto}
        onClose={() => setPopupAbierto(false)}
      />
    </div>
  );
}

export default CartaPokemon;