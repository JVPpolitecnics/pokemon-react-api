import { useEffect, useState } from "react";
import PokemonCard from "./PokemonCard"
import axios from "axios";
import "./PokemonList.css"

function PokemonList() {
    const [pokemons, setPokemons] = useState([]);
    useEffect(() => {
        getPokemons(10);
    }, [])

    const axiosFetchPokemon = async (index) =>{
       
        const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${index}`);
        const data = response.data;
        return data
    }

    const getPokemons = async (quantity) => {
        const pokemonList = [];

        for (let i = 1; i <= quantity; i++){
            const pokemon = await axiosFetchPokemon(i);
            pokemonList.push(pokemon)

        }

        setPokemons(pokemonList);
    }

    const pokemonCards = pokemons.map((pokemon) => {
        return <PokemonCard key={pokemon.id} pokemon={pokemon}></PokemonCard>
    })
    return (
        <ul className="pokemon-list">
            {pokemonCards}
        </ul>
    )
}
export default PokemonList