import { useState, useEffect } from 'react';

import { Link } from 'react-router-dom';

function Category() {
    const [uniqueGenres, setUniqueGenres] = useState([]);

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
                setUniqueGenres([...new Set(data.map((game) => game.genre))]);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, []);


    return (
        <div className="p-8">
            <h1 className="text-4xl font-bold text-white ">CATEGORY </h1>
            
            <div className="m-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-10 ">
                {uniqueGenres.map((genre) => (
                    <Link
                        key={genre}
                        to={`/category/${genre}`}
                        className="text-2xl font-bold mb-2"
                    >
                        <div className="bg-[#19182b] rounded-2xl shadow-sm shadow-[#19182b] outline outline-slate-400 -outline-offset-8">
                            <div className="group overflow-hidden relative after:duration-500 before:duration-500 duration-500 hover:-rotate-12  hover:after:translate-x-24 hover:before:translate-y-12 hover:before:-translate-x-32 hover:duration-500 after:absolute after:bg-[#2a293e] after:rounded-full after:blur-xl after:bottom-32 after:right-16 after:w-12 after:h-12 before:absolute before:w-20 before:h-20 before:bg-[#313048] before:rounded-full before:blur-xl before:top-20 before:right-16 flex justify-center items-center h-44 w-56 bg-[#19182b] rounded-2xl outline outline-slate-400 -outline-offset-8">
                                <div className="z-10 flex flex-col items-center gap-2">
                                    <span className="text-white">{genre} </span>
                                </div>
                            </div>
                        </div>
                    </Link>
                ))}
            </div>
        </div>






    );
}

export default Category;