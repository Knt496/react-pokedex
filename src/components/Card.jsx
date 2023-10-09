import { Link } from "react-router-dom";

const Card = ({pokemon}) => (
    <div className="transition ease-in-out duration-500 hover:scale-105 bg-primary border mb-5 border-gray-200 rounded-lg shadow p-2">
      <div className="flex bg-white justify-between mb-1">
        <div className="p-1 text-sm md:text-lg font-bold">
          <span>{pokemon.name}</span>
        </div>
        <div className="p-1 ps-2 md:ps-3 text-xs md:text-sm font-bold flex items-center border-s-4 border-t-2 border-primary rounded-tl-[30px]">
          <span>{pokemon.number}</span>
        </div>
      </div>
      <Link to="/">
        <img className="p-8 w-full bg-white" src={pokemon.image} alt="pokemon" />
      </Link>
      <div className="flex items-center mt-2.5 mb-5 gap-3">
        {
          pokemon.types.map((type, i) => (
            <span key={i} className="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800">{type}</span>
          ))
        }
      </div>
      <div className="flex items-center justify-between">
        <span className="text-lg md:text-2xl font-bold text-gray-900 dark:text-white">{pokemon.hp} HP</span>
        <Link to="/" className="text-white bg-[#5A9C38] hover:bg-[#286840] focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-3 md:px-5 py-1.5 md:py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">More</Link>
      </div>
    </div>
)

export default Card;