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

   // Obtén los colores CSS de los tipos
  const color1 = `var(--color-${pokemon.types[0].toLowerCase()})`;
  const color2 = pokemon.types[1] 
    ? `var(--color-${pokemon.types[1].toLowerCase()})`
    : color1;

    // Aplica el gradiente
  const gradientStyle = {
    background: `linear-gradient(135deg, ${color1}, ${color2})`,
  };
  return (
    <div className="popup-overlay" onClick={onClose}>
      <div className="popup-content" style={gradientStyle} onClick={e => e.stopPropagation()}>
        <h2>{pokemon.name}</h2>
        <img src={pokemon.image} alt={pokemon.name} />
        <p>{pokemon.types.map((item) => (
              <span className={`tipo ${item}`} key={item}>
                {item.charAt(0).toUpperCase() + item.slice(1)}
              </span>
            ))}</p>
            {pokemon.evolution && (
              <div className="evolution">
              <span className="evolution-text">Evoluciona de </span>
              <span className={`evolution-pokemon`}>{pokemon.evolution}</span>
          </div>)}
        <button onClick={onClose}>Cerrar</button>
      </div>
    </div>
  );
}

export default PokemonPopUp
