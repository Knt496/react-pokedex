import { useState, useEffect } from "react";
import Card from "../components/Card";

const Home = () => {

  const [pokemons, setPokemons] = useState([])
  const [searchValue, setSearchValue] = useState('')
  const [error, setError] = useState('')


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

  const handleChange = (e) => {
    const newSearchValue = e.target.value;

    if(newSearchValue.startsWith(" ")) return

    setSearchValue(newSearchValue)

    console.log({searchValue})
  }

  useEffect(() => {
  
    if(searchValue == '') {
      setError("Can't search for empty value")
      return
    }

    if(searchValue.length < 3) {
      setError("At least 3 characters required")
      return
    }

    setError('')

  },[searchValue])
      

  return (
    <>
      <header className="my-2">
        <h1 className="text-2xl font-extrabold">Pokémon Finder</h1>
        <form className="flex gap-2" onSubmit={handleSubmit}>
          <input 
            name="name"
            type="text"
            className={`border-2 rounded-md p-1 text-sm ${!error ? "border-primary focus-visible:outline-[#177363]" : "border-red-700 focus-visible:outline-red-800"}`}
            placeholder="Bulbasur, Charmander,..."
            value={searchValue}
            onChange={handleChange}
          />
          <button className="bg-primary rounded-md text-white px-2 shadow hover:bg-[#177363]">Search</button>
        </form>
        { error && <p className="text-red-800">{error}</p>}
      </header>
      <div className="w-full grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-5">
        <PokemonList />
      </div>
    </>
  )
}

export default Home;