import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import GameCard from './GameCard';

function FetchGames() {
  const { genre } = useParams();
  const [games, setGames] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('../src/data/freegame.json');
        const data = await response.json();
        const filteredGames = data.filter((game) => game.genre === genre);
        setGames(filteredGames);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, [genre]);

  return (
      <div className="m-10 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
        {games.map((game) => (
          <GameCard key={game.id} game={game} />
        ))}
      </div>
  );
}

export default FetchGames;