import MovieCard from './MovieCard';
import {useState,useEffect} from 'react';

import './App.css';
import searchIcon from './search.svg';
// a7464dc0

const API_URL = 'http://www.omdbapi.com/?&apikey=ac742dc0';


const App = () => {

    const [movies,setMovies] = useState([ ]);
    const [searchTerm,setSearchTerm]=useState('');

    const searchMovies = async (title) => {
        const response = await fetch(`${API_URL}&s=${title}`);
        const data = await response.json();
        // console.log(data);
        setMovies(data.Search);
    }


    useEffect(() => {
        searchMovies();
    }, [])


    return (
        <div className='app'>
            <h1>MovieMania</h1>
            <div className='search'>
                <input
                    placeholder='search movies'
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                />
                <img
                    src={searchIcon}
                    alt="search"
                    onClick={() => searchMovies(searchTerm)}
                />
            </div>
            <div className='searchHeading'>
                <p>All your search results are as follows</p>
            </div>


            {
                movies?.length > 0
                    ? (
                        <div className="container">
                            {movies.map((movie)=>(
                                <MovieCard movie={movie}/>
                            ))}
                            
                        </div>
                    ) : (
                        <div className='empty'>
                            <h2>No Movies Found</h2>
                        </div>
                    )
            }

        </div>
    );
}

export default App;

