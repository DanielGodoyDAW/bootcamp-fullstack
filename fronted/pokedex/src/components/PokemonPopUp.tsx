import "../style/pokemonPopUp.css";

interface Pokemon {
  id: number;
  name: string;
  types: string[];
  image: string;
  gif: string;
  type_color: string;
  evolution?: string;
}

interface PokemonPopupProps {
  pokemon: Pokemon;
  visible: boolean;
  onClose: () => void;
}

function PokemonPopUp({ pokemon, visible, onClose }: PokemonPopupProps) {
   if (!visible || !pokemon) return null;
  return (
    <div className="popup-overlay" onClick={onClose}>
      <div className="popup-content" onClick={e => e.stopPropagation()}>
        <h2>{pokemon.name}</h2>
        <img src={pokemon.image} alt={pokemon.name} />
        <p>Tipos: {pokemon.types.join(", ")}</p>
        {/* Aquí más info o evolución, etc */}
        <button onClick={onClose}>Cerrar</button>
      </div>
    </div>
  );
}

export default PokemonPopUp
