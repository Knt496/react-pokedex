import { useEffect, useState } from "react";
import { getPokemonByName, getPokemons } from "../services/pokemons";

export function usePokemons({ searchValue }) {

  const [pokemons, setPokemonsList] = useState([])

  useEffect(() => {
    getPokemon()
  },[])


  const getPokemon = async () => {
    
    if(searchValue && searchValue !== '') {

      const filterList = await getPokemonByName(searchValue)

      setPokemonsList(filterList)
    }
    else {
      const list = await getPokemons(30)

      setPokemonsList(list)
    }
  }

  return { pokemons, getPokemon }

}