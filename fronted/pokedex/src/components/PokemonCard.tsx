import { useState } from "react";
import PokemonPopup from "./PokemonPopUp"; 

interface PokemonCardProps {
  pokemon: {
    id: number;
    name: string;
    types: string[];
    image: string;
    gif: string;
    type_color: string;
    evolution?: string;
  };
}

function PokemonCard({ pokemon }: PokemonCardProps) {
  const [popupAbierto, setPopupAbierto] = useState(false)

  return (
    <>
      <article className={`container container-${pokemon.type_color}`} onClick={() => setPopupAbierto(true)}>
        <div className={`container-div container-div-${pokemon.type_color}`}>
          <figure className="pokemon-img">
            <img className="static" src={pokemon.image} alt={`imagen de ${pokemon.name}`} />
            <img className="gif" src={pokemon.gif} alt={`imagen de ${pokemon.name}`} />
          </figure>
          <p className="container-div-p-ID">ID: {pokemon.id}</p>
        </div>
        <div>
          <p>
            <strong className={pokemon.type_color}>{pokemon.name}</strong>
          </p>
          <p>
            {pokemon.types.map((item) => (
              <span className={`tipo ${item}`} key={item}>
                {item.charAt(0).toUpperCase() + item.slice(1)}
              </span>
            ))}
          </p>
          {pokemon.evolution && (
            <div className="evolution">
            Evoluciona de <span className={`evolution-pokemon evolution-${pokemon.type_color}`}>{pokemon.evolution}</span>
          </div>)}
        </div>
      </article>
      {/* Popup */}
       <PokemonPopup
        pokemon={pokemon}
        visible={popupAbierto}
        onClose={() => setPopupAbierto(false)}
      />
    </>
  );
}

export default PokemonCard;
