import './App.css';
import {useState} from "react";
import Header from "./components/Header";
import MoviePoster from "./components/MoviePoster";
import MovieInfo from "./components/MovieInfo";
import Search from "./components/Search";
import Trending from "./components/Trending";

function App() {
    const [movies, setMovies] = useState([]);
    const [selectedMovie, setSelectedMovie] = useState(null);
    const setSearch = async (e) => {
        e.preventDefault();
        const movieName = e.target.value;
        if(!movieName) setMovies([]);
        const response = await fetch(`https://api.themoviedb.org/3/search/movie?api_key=19ca613dce306abd8309ecbdbd90cbe3&language=en-US&query=${movieName}&page=1&include_adult=false`);
        const data = await response.json();
        setMovies(data.results);
    }
    const selectMovie = (movieId) => {
        if(movieId) setSelectedMovie(movieId);
        console.log(movieId);
    }

  return (
    <div>
        <Header/>
        <Search setSearch={setSearch}/>
        <div className="w-full h-full p-10 flex flex-row flex-wrap justify-center">
            {movies && movies.map(movie => {
                return (<MoviePoster key={movie.id} movie={movie} selectMovie={selectMovie}/>
            )})}
             <Trending selectMovie={selectMovie}/>
        </div>
        {selectedMovie ? <MovieInfo movieId={selectedMovie}/> : ''}
    </div>
   
  );
}

export default App;
