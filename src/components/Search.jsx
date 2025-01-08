import { useSearchParams } from 'react-router-dom';
import {useState, useEffect} from 'react';
import GameCard from './GameCard';

function Search() {
    const [data, setData] = useState([]);
  const [searchResults, setSearchResults] = useState([]);
  const [searchParams] = useSearchParams();

  const searchTerm = searchParams.get('q');

    useEffect(() => {
        const fetchData = async () => {
          try {
                const response = await fetch('../src/data/freegame.json');
                const jsonData = await response.json();
                setData(jsonData);
          } catch (error) {
            console.error('Error fetching data:', error);
          }
        };
    
        fetchData();
      }, []);
    
      useEffect(() => {
        if (searchTerm) {
          const results = data.filter((game) =>
            game.title.toLowerCase().includes(searchTerm.toLowerCase())
          );
          setSearchResults(results);
        }
      }, [data, searchTerm]);

      if (searchResults=='') {
        return (
            <div className='my-32 flex items-center justify-center '>
                <h3 className='text-3xl font-bold text-white'>No Result Found</h3>
            </div>
        );
    }
    

    return (
        
        <div className="p-8 bg-[#19182b] ">
            <h1 className="text-4xl font-bold text-white ">Search <span className="text-yellow-500">Results</span> </h1>    
            <div className="m-10 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
                {searchResults.map((game) => (
                    <GameCard key={game.id} game={game} />
                ))}
            </div>
        </div>
    );
}

export default Search;

// import React from 'react'

// function Search() {
//   return (
//     <div>
      
//     </div>
//   )
// }

// export default Search
