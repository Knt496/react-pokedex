import { useState, useEffect } from "react";
import { Pokemons } from "../components/Pokemons";
import pokemonResults from "../mocks/results.json";

import { useSearch } from "../customHooks/useSearch";

const Home = () => {

  const pokemons = pokemonResults.results;

  const { searchValue, setSearchValue, error } = useSearch();

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
      <Pokemons pokemons={pokemons} />
    </>
  )
}

export default Home;