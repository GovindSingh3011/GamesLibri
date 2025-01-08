/* eslint-disable react/prop-types */
import { useState } from "react";

const GameCard = ({ game }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="bg-gray-200 rounded-lg shadow-md p-5"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}>
      <img src={game.thumbnail} alt={game.title} className="w-full h-48 object-cover rounded-lg mb-4" />
      <h2 className="text-2xl font-bold mb-2">{game.title}</h2>
      <p className="text-gray-700  mb-2 transition-all duration-300 ">
        {isHovered ? `${game.short_description}` : `${`${game.short_description}`.slice(0, 55)}${`${game.short_description}`.length > 55 ? "..." : ""}`}
      </p>
      <p className="text-gray-700 mb-2"> <span className="text-gray-800 font-medium ">Genre :</span> {game.genre}</p>
      <p className="text-gray-700 mb-2"> <span className="text-gray-800 font-medium ">Platform :</span> {game.platform}</p>
      <p className="text-gray-700 mb-2"> <span className="text-gray-800 font-medium ">Publisher : </span>{game.publisher}</p>
      <p className="text-gray-700 mb-2"> <span className="text-gray-800 font-medium ">Developer : </span>{game.developer}</p>
      <p className="text-gray-700 mb-2"> <span className="text-gray-800 font-medium ">Release Date : </span>{game.release_date}</p>
      <div className="container-eg-btn-4 uf-border">
        <a className="button button-3" href={game.game_url} rel="noopener noreferrer" target="_blank">View Game</a>
      </div>

    </div>
  )
};

export default GameCard;