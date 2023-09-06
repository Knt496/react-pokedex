import Card from "../components/Card";
import { useState } from "react";

const Home = () => {

  const [pokemons, setPokemons] = useState(
    [
      {
        name: "Bulbasur",
        image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png"
      },
      {
        name: "Charmander",
        image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/4.png"
      },
      {
        name: "Charmeleon",
        image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/5.png"
      },
      {
        name: "Squirtle",
        image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/7.png"
      }
    ]

  )

  const fillList = () => {
    let itemList=pokemons.map((pokemon,index)=>{
      return <Card key={index} pokemon={pokemon}></Card>
    })
    return itemList;
  };


  return (
    <div className="container">
      <div className="flex justify-between flex-wrap">
        {fillList()}
      </div>

    </div>
    
  )
}

export default Home;