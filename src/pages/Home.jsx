import { useState, useEffect } from "react";
import Card from "../components/Card";

const Home = () => {

  const [pokemons, setPokemons] = useState([])


  const renderData = () => {
    const data = [
      {
        name: "Bulbasur",
        image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png",
        number: "0001",
        hp: 888,
        types: ["normal"]
      },
      {
        name: "Ivysaur",
        image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/2.png",
        number: "0002",
        hp: 888,
        types: ["normal"]
      },
      {
        name: "Venusaur",
        image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/3.png",
        number: "0003",
        hp: 898,
        types: ["normal"]
      },
      {
        name: "Charmander",
        image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/4.png",
        number: "0004",
        hp: 888,
        types: ["fire"]
      },
      {
        name: "Charmeleon",
        image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/5.png",
        number: "0005",
        hp: 888,
        types: ["fire"]
      },
      {
        name: "Charizard",
        image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/6.png",
        number: "0006",
        hp: 888,
        types: ["fire", "flying"]
      }
    ];

    setPokemons(data)
  }

  useEffect(renderData,[])

  const PokemonList = () => (
    (pokemons.map((pokemon,index) => <Card key={index} pokemon={pokemon} />))
  )
      

  return (
    <div className="w-full grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-5">
      <PokemonList />
    </div>
  )
}

export default Home;