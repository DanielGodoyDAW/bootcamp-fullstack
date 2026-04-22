import { useState } from "react";
import PokemonPopup from "./PokemonPopUp";

function CartaPokemon({ pokemon }) {
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