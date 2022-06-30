import './App.css';
import axios from "axios";
import React, {useEffect, useState} from "react"

function App() {
  const [pokemon,setPokemon] =useState([]);
  useEffect(() => {
    axios
    .get("https://pokeapi.co/api/v2/pokemon/?limit=807")
    .then((response) =>{setPokemon(response.data.results);})
      
    .catch(err => console.log(err));
  }, []);
  return (
    <div className="App">
      <h1>Pokemon API</h1>
      <ul>
        {pokemon.map((pokemon, i) =>(
        <li className='fun' key={i}>{pokemon.name}</li>
        ))}
      </ul>
      
    </div>
  );
}

export default App;
