export const getPokemons = async (limit) => {
  try {
    
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=0`)
    const json = await response.json()

    const data = json.results

    const fetchPromises = data.map(obj => getPokemonByUrl(obj.url))

    const pokemons = await Promise.all(fetchPromises)

    return mapPokemons(pokemons)

  } catch (error) {
    throw new Error("Error getting pokemons")
  }
}

export const getPokemonByName = async (name) => {

  if(!name || name === '') return null

  const searchValue = String(name).toLocaleLowerCase()

  try {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${searchValue}`)
    const pokemon = await response.json()
  
    const list = [pokemon]
  
    return mapPokemons(list)
  } catch (error) {
    return []
  }
}

const getPokemonByUrl = async (url) => {

  if(!url || url === '') return null

  const response = await fetch(url)
  const pokemon = await response.json()

  return pokemon

}

const mapPokemons = (pokemons) => {
  const mappedPokemons = pokemons.map(pokemon => ({
    name: pokemon?.name,
    image: pokemon?.sprites.front_default,
    number: String(pokemon?.id).padStart(3,"0"),
    hp: pokemon?.stats.find(item => item.stat.name === "hp").base_stat,
    types: pokemon?.types.map(item => item.type.name) || []
  }))

  return mappedPokemons;
}