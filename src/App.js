import './App.css';
import {useState} from "react";
import Movie from "./Movie";
import Logo from './images/logo.png'
function App() {
    const [movies, setMovies] = useState([]);
    const [selectedMovie, setSelectedMovie] = useState(null);
    const searchMovie = async (e) => {
        e.preventDefault();
        const movieName = e.target.value;
        if(!movieName) setMovies([]);
        const response = await fetch(`https://api.themoviedb.org/3/search/movie?api_key=19ca613dce306abd8309ecbdbd90cbe3&language=en-US&query=${movieName}&page=1&include_adult=false`);
        const data = await response.json();
        setMovies(data.results);
    }
    const selectMovie = (movieId) => {
        const selectedMovie = movies.find(movie => movie.id === movieId);
        setSelectedMovie(selectedMovie);
        console.log(selectedMovie);
    }

  return (
    <div>
        <div className="p-10 h-full">
        </div>
        <img alt="Logo" src={Logo} className="max-w-logo m-auto p-10 "/>
        <div className="max-w-xs flex flex-row flex-nowrap justify-between m-auto">
            <button className="relative inline-flex items-center justify-center p-0.5 mb-2  overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-green-400 to-blue-600 group-hover:from-green-400 group-hover:to-blue-600 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800">
                <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                    Watched Movies
                </span>
            </button>
            <button className="relative inline-flex items-center justify-center p-0.5 mb-2  overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-500 to-pink-500 group-hover:from-purple-500 group-hover:to-pink-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800">
                <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                    Saved Movies
                </span>
            </button>
        </div>
        <div className="w-full h-24">
            <div className="w-full h-full p-10">
                <input onInput={(e) => searchMovie(e)} type="text"  className=" text-center text-2xl border  bg-slate-700 rounded w-full h-full p-7 text-gray-400 border-slate-900  outline-slate-400 focus-visible:outline" placeholder="Search..."/>
            </div>
        </div>
        <div className="w-full h-full p-10 flex flex-row flex-wrap justify-center">
            {movies && movies.map(movie => {
                return (
                <div key={movie.id} onClick={() => selectMovie(movie.id)} className="flex w-full flex-col flex-nowrap pt-5 pb-5 sm:pl-5 sm:pr-5 sm:w-full md:w-1/2 lg:w-1/3 xl:w-1/4 max-w-lg  ">
                    {movie.poster_path ? <img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} loading={"lazy"} alt={`Poster for ${movie.title}`} className="rounded-md border-slate-900 border w-full h-full drop-shadow-md"/> : <p className="text-2xl text-center text-slate-400 flex justify-center items-center h-full border border-slate-900">{movie.title}</p>}
                </div>
            )})}
        </div>
        {selectedMovie ? <Movie movie={selectedMovie}/> : ''}
    </div>
   
  );
}

export default App;
