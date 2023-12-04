import pokemonResults from "../mocks/results.json";
import { useState } from "react";

export function usePokemons({ searchValue }) {

  const [responseList, setResponseList] = useState([])

  const pokemons = responseList;


  const getPokemon = () => {
    
    if(searchValue && searchValue !== '') {

      const filterList =  pokemonResults.results.filter((pokemon) => {
        return pokemon.name.toLocaleLowerCase() === searchValue.toLocaleLowerCase()
      })

      setResponseList(filterList)
    }
    else {
      setResponseList([])
    }
  }


  return { pokemons, getPokemon }

}