import "../style/pokemonPopUp.css";
import type { Pokemon } from "../services/pokemonApi";

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

  // Función para obtener el color del boton de popup basado en el tipo del Pokémon
  const obtenerColorComplementario = (tipo: string) => {
    const tipoLower = tipo.toLowerCase();
    const complementos: Record<string, string> = {
      fire: "water",
      water: "fire",
      grass: "fire",
      electric: "ground",
      ice: "fire",
      fighting: "flying",
      poison: "ground",
      ground: "water",
      flying: "electric",
      psychic: "dark",
      bug: "fire",
      rock: "water",
      ghost: "normal",
      dragon: "ice",
      dark: "psychic",
      steel: "fire",
      fairy: "poison",
    };
    return complementos[tipoLower] || "normal";
  };

  const colorBoton = `var(--color-${obtenerColorComplementario(pokemon.types[0])})`;

  return (
    <div className="popup-overlay" onClick={onClose}>
      <div
        className="popup-content"
        style={gradientStyle}
        onClick={(e) => e.stopPropagation()}
      >
        <h2>{pokemon.name}</h2>
        <img src={pokemon.image} alt={pokemon.name} />
        <p>
          {pokemon.types.map((item) => (
            <span className={`tipo ${item}`} key={item}>
              {item.charAt(0).toUpperCase() + item.slice(1)}
            </span>
          ))}
        </p>
        {pokemon.evolution && (
          <div className="evolution">
            <span className="evolution-text">Evoluciona de </span>
            <span className={`evolution-pokemon`}>{pokemon.evolution}</span>
          </div>
        )}
        <button onClick={onClose} style={{ backgroundColor: colorBoton }}>
          Cerrar
        </button>
      </div>
    </div>
  );
}

export default PokemonPopUp;
