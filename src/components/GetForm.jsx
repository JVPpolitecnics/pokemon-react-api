import { useEffect, useState } from "react";
function GetForm(props){
 const [from, setFrom] = useState(1);
 const [to, setTo] = useState(10);
 const [species, setSpecies] = useState("")
 const handleFromInput = (e) => {
    setFrom(e.target.value);
 }
 const handleToInput = (e) => {
    setTo(e.target.value);
 }
 const handleSubmit = (e) => {
  e.preventDefault();
  props.getPokemons(from, to)
 }

 const handleSpecies = (e) => {
    e.preventDefault();
    setSpecies(e.target.value);
    console.log(e.target.value)
    props.filterPokemons(species)
 }
 return (
    <form onSubmit={handleSubmit}>
        <fieldset>
            <label htmlFor="from-pokemon">From: </label>
            <input type="number" 
            id="from-pokemon" min={1} onChange={handleFromInput}/>
        </fieldset>
        <fieldset>
            <label htmlFor="to-pokemon">To: </label>
            <input type="number" 
            id="to-pokemon" min={1} onChange={handleToInput}/>
        </fieldset>
      
            <b>species:</b>
        <input onChange={handleSpecies} type="radio" id="charizard" value={"charizard"} name="species"/>
        <label htmlFor="charizard">Charizard</label> 
        <input onChange={handleSpecies} type="radio" id="ivysaur" value={"ivysaur"} name="species"/>
        <label htmlFor="ivysaur">Ivysaur</label> 
        <input onChange={handleSpecies} type="radio" id="venausaur" value={"venausaur"} name="species"/>
        <label htmlFor="venausaur">Venausaur</label> 
        
        <button>Filter Pokemon</button>
    </form>
 )
}
export default GetForm