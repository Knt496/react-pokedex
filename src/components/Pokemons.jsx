import Card from "./Card";

const PokemonList = ({ pokemons }) => (
  (pokemons.map((pokemon,index) => <Card key={index} pokemon={pokemon} />))
)

const NoPokemonsFound = () => {
  return (
    <p>No Pokémons Found</p>
  )
}

export function Pokemons ({ pokemons }) {
  return (
    <div className="w-full grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-5">
      { pokemons.length 
        ? <PokemonList pokemons={pokemons}/>
        : <NoPokemonsFound/>
      }
    </div>
  )
}; 