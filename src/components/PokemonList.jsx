import { useEffect, useState } from "react";
import PokemonCard from "./PokemonCard";
import GetForm from "./GetForm";
import axios from "axios";
import "./PokemonList.css"

function PokemonList(props) {
    const [pokemons, setPokemons] = useState([]);
    const [filteredPokemons, setFilteredPokemons] = useState([]);
    const [isFiltered, setIsFiltered] = useState(false);
    
    useEffect(() => {
        getPokemons(1, 10);
    }, [])

    const axiosFetchPokemon = async (index) =>{
       
        const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${index}`);
        const data = response.data;
        return data
    }

    const getPokemons = async (from, to) => {
        const pokemonList = [];

        for (let i = from; i <= to; i++){
            const pokemon = await axiosFetchPokemon(i);
            pokemonList.push(pokemon)

        }

        setPokemons(pokemonList);
    }

    const filterPokemons = (speciesToSearch) => {
       if(speciesToSearch != ""){
        console.log("recieved prop filterPokemons " + speciesToSearch);
        const filtered = pokemons.filter(pokemon => 
            pokemon.name.toLowerCase().includes(speciesToSearch.toLowerCase())
        );
        setFilteredPokemons(filtered);
        setIsFiltered(true);
        } else {
            setIsFiltered(false);
    }
        
    }

    const pokemonListToRender = isFiltered ? filteredPokemons : pokemons;

  

    const pokemonCards = pokemonListToRender.map((pokemon) => {
        return <PokemonCard key={pokemon.id} pokemon={pokemon} selectedPokemon={props.selectPokemon}></PokemonCard>
    })
    return (
        <div>
            <GetForm getPokemons={getPokemons} filterPokemons={filterPokemons}></GetForm>
        
            <ul className="pokemon-list">
            {pokemonCards}
          

    
        </ul>
        </div>
    )
}
export default PokemonList