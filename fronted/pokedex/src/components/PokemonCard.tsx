function PokemonCard({ pokemon }) {
  const nombre = pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1);
  const imagen = pokemon.sprites.front_default;
  const gif =
    pokemon.sprites.versions["generation-v"]["black-white"].animated
      .front_default;
  const tipoPrincipal = pokemon.types?.[0]?.type?.name ?? "normal";

  return (
    <>
      <article className={`container container-${tipoPrincipal}`}>
        <div className={`container-div container-div-${tipoPrincipal}`}>
          <figure className="pokemon-img">
            <img className="static" src={imagen} alt={`imagen de ${nombre}`} />
            <img className="gif" src={gif} alt={`imagen de ${nombre}`} />
          </figure>
          <p className="container-div-p-ID">ID: {pokemon.id}</p>
        </div>
        <div>
          <p>
            <strong className={tipoPrincipal}>{nombre}</strong>
          </p>
          <p>
            {pokemon.types.map((item) => (
              <span className={`tipo ${item.type.name}`} key={item.slot}>
                {item.type.name.charAt(0).toUpperCase() + item.type.name.slice(1)}
              </span>
            ))}
          </p>
          {pokemon.evolution && (
            <div className="evolution">
            Evoluciona de <span className={`evolution-pokemon evolution-${tipoPrincipal}`}>{pokemon.evolution}</span>
          </div>)}
        </div>
      </article>
    </>
  );
}

export default PokemonCard;
