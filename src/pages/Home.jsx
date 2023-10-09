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

  const handleSubmit = (e) => {
    e.preventDefault();
    const {name } = Object.fromEntries(new window.FormData(e.target));
    console.log("clicked", name);
  };
      

  return (
    <>
      <header className="my-2">
        <h1 className="text-2xl font-extrabold">Pokémon Finder</h1>
        <form className="flex gap-2" onSubmit={handleSubmit}>
          <input name="name" type="text" className="border-2 border-primary rounded-md p-1 text-sm focus-visible:outline-[#177363]" placeholder="Bulbasur, Charmander,..."/>
          <button className="bg-primary rounded-md text-white px-2 shadow hover:bg-[#177363]">Search</button>
        </form>
      </header>
      <div className="w-full grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-5">
        <PokemonList />
      </div>
    </>
  )
}

export default Home;