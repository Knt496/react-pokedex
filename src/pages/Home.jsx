import Card from "../components/Card";
import { useState, useEffect } from "react";

const Home = () => {

  const [pokemons, setPokemons] = useState([])

  useEffect(()=> {
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

    setPokemons(data);
  },[]);

  const fillList = () => {
    let itemList = pokemons.map((pokemon,index)=>{
      return <Card key={index} pokemon={pokemon}></Card>
    })
    return itemList;
  };


  return (
    <div className="w-full grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-5">
      {fillList()}
    </div>
  )
}

export default Home;