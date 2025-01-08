import { useState, useEffect } from 'react';
import GameCard from './GameCard';

function FetchAllGames() {
    const [games, setGames] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const url = 'https://free-to-play-games-database.p.rapidapi.com/api/games';
            const options = {
                method: 'GET',
                headers: {
                    'x-rapidapi-key': '0215cd853dmshf1bc589ec75c6b6p1cc149jsnac69ad8f3d9d',
                    'x-rapidapi-host': 'free-to-play-games-database.p.rapidapi.com'
                }
            };
            try {
                const response = await fetch(url, options);
                const data = await response.json();
                setGames(data);
            } catch (error) {
                console.error(error);
            }

        };
        fetchData();
    })

    return (
        <div className="p-8 bg-[#19182b] ">
            <h1 className="text-4xl font-bold text-white ">All <span className="text-yellow-500">Games</span> </h1>
            <div className="m-10 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
                {games.map((game) => (
                    <GameCard key={game.id} game={game} />
                ))}
            </div>
        </div>
    );
}

export default FetchAllGames;