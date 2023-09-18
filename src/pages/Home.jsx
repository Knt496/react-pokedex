import { useState, useEffect } from "react";


const Home = () => {

  const [pokemons, setPokemons] = useState([])


  const renderData = () => {
    const data = [
      {
        name: "Bulbasur",
        image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png",
        number: "#0001"
      },
      {
        name: "Ivysaur",
        image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/2.png",
        number: "#0002"
      },
      {
        name: "Venusaur",
        image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/3.png",
        number: "#0003"
      },
      {
        name: "Charmander",
        image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/4.png",
        number: "#0004"
      },
      {
        name: "Charmeleon",
        image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/5.png",
        number: "#0005"
      },
      {
        name: "Charizard",
        image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/6.png",
        number: "#0006"
      }
    ];

    setPokemons(data)
  }

  useEffect(renderData,[])

  return (
    <div className="w-full grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-5">
      <button className="rounded-lg bg-blue-500 shadow p-2 text-white">Click me</button>
      <button className="rounded-lg bg-blue-500 shadow p-2 text-white">Click me</button>
      <button className="rounded-lg bg-blue-500 shadow p-2 text-white">Click me</button>
      <button className="rounded-lg bg-blue-500 shadow p-2 text-white">Click me</button>
      <button className="rounded-lg bg-blue-500 shadow p-2 text-white">Click me</button>
    </div>
  )
}

export default Home;