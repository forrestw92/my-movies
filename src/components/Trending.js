import React, {useEffect, useState} from 'react'
import MoviePoster from "./MoviePoster";

const Trending = ({selectMovie}) => {
    const [movies, setMovies] = useState([]);
    const [error, setError] = useState(null);
    const getTrendingMovies = async () => {
        try {
            const response = await fetch(`https://api.themoviedb.org/3/trending/movie/day?api_key=19ca613dce306abd8309ecbdbd90cbe3`);
            const data = await response.json();
            setMovies(data.results);
        } catch (error) {
            setError(error);
        }
    }
    useEffect( () => {
        const fetchData = async () => {
            await getTrendingMovies()
        }
        fetchData()
    },[])
    return (
        <>
            <h1 className="text-4xl text-white font-bold underline underline-offset-4 w-full text-center mb-8">Today Trending</h1>
            {movies && movies.map(movie => {
                return (<MoviePoster key={movie.id} movie={movie} selectMovie={selectMovie}/>
                )})}
            {error && <p>Error loading trending movies.</p>}
        </>
    )
}
export default Trending;