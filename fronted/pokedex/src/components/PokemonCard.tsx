function PokemonCard({ pokemon }) {
  // const nombre = pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1);
  // const imagen = pokemon.sprites.front_default;
  // const gif =
  //   pokemon.sprites.versions["generation-v"]["black-white"].animated
  //     .front_default;
  // const tipoPrincipal = pokemon.types?.[0]?.type?.name ?? "normal";

  return (
    <>
      <article className={`container container-${pokemon.type_color}`}>
        <div className={`container-div container-div-${pokemon.type_color}`}>
          <figure className="pokemon-img">
            <img className="static" src={pokemon.image} alt={`imagen de ${pokemon.name}`} />
            <img className="gif" src={pokemon.gif} alt={`imagen de ${pokemon.name}`} />
          </figure>
          <p className="container-div-p-ID">ID: {pokemon.id}</p>
        </div>
        <div>
          <p>
            <strong className={pokemon.types_color}>{pokemon.name}</strong>
          </p>
          <p>
            {pokemon.types.map((item) => (
              <span className={`tipo ${item}`} key={item}>
                {item}
              </span>
            ))}
          </p>
          {pokemon.evolution && (
            <div className="evolution">
            Evoluciona de <span className={`evolution-pokemon evolution-${pokemon.type_color}`}>{pokemon.evolution}</span>
          </div>)}
        </div>
      </article>
    </>
  );
}

export default PokemonCard;
