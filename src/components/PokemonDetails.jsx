function PokemonDetails(props){
    const {pokemon} = props;
    if (!pokemon || !pokemon.sprites || !pokemon.sprites.front_default) {
        return <div>Loading or data unavailable...</div>;
      }
    return(
       <section>
         <div>PokemonDetails</div>
         
          <div className="pokemon-container">
            <h2 className="text">{pokemon.name}</h2>
            <img src={pokemon.sprites.front_default} alt="pokemon img"></img>
            <h3>HP: {pokemon.stats[0].base_stat}</h3>
          </div>  
       </section>
    )
}
export default PokemonDetails;