import { useState, useEffect } from 'react';
import GameCard from './GameCard';
import Loader from './Loader';

function LatestGames() {
    const [latestGames, setLatestGames] = useState(null);

    useEffect(() => {
        const fetchLatestGames = async () => {
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

                if (data.length > 0) {
                    const sortedGames = data.sort((a, b) => {
                        const dateA = new Date(a.release_date);
                        const dateB = new Date(b.release_date);
                        return dateB - dateA;
                    });


                    const latestGames = sortedGames.slice(0, 12);

                    setLatestGames(latestGames);
                }
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchLatestGames();
    }, []);

    if (!latestGames) {
        return (
            <div className='my-8 flex items-center justify-center'>
                <Loader />
            </div>
        );
    }

    return (
        <div className="m-10 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            {latestGames.map((game) => (
                <GameCard key={game.id} game={game} />
            ))}
        </div>
    );
}

export default LatestGames;