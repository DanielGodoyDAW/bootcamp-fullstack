function PokemonCard(id, name, types, image, gif, evolution) {
  return (
    <>
       <article className="container container-planta">
        <div className="container-div container-div-planta">
          <figure className="pokemon-img">
            <img className="static" src="" alt="imagen de Bulbasaur" />
            <img className="gif" src="" alt="imagen de Bulbasaur" />
          </figure>
          <p className="container-div-p-ID">ID: {id}</p>
        </div>
        <div>
          <p>
            <strong className={types}>{name}</strong>
          </p>
          <p>
            <span className="tipo veneno">Poison</span>
            <span className="tipo hierva">Grass</span>
          </p>
        </div>
      </article>
    </>
  )
}

export default PokemonCard
