import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import PokemonList from './components/PokemonList'
import PokemonDetails from './components/PokemonDetails'

function App() {
  const [count, setCount] = useState(0)
  const [selectedPokemon, setSelectedPokemon] = useState()

  return (
    <>
    {selectedPokemon && (
      <div>
        <h2>Selected Pokemon</h2>
        <PokemonDetails pokemon={selectedPokemon}></PokemonDetails>
      </div>
    )}
<PokemonList selectPokemon={setSelectedPokemon}></PokemonList>
    </>
  )
}

export default App
