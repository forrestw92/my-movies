import React, { useState } from "react";
import Search from "../components/Search";
import MoviePoster from "../components/MoviePoster";
import Trending from "../components/Trending";
import MovieInfo from "../components/MovieInfo";

const Home = () => {
  const [movies, setMovies] = useState([]);
  const [selectedMovie, setSelectedMovie] = useState(null);
  const [searchMovie, setSearchMovie] = useState("");
  const setSearch = async (e) => {
    e.preventDefault();
    const movieName = e.target.value;
    setSearchMovie(movieName);
    if (!movieName) setMovies([]);
    const response = await fetch(
      `https://api.themoviedb.org/3/search/movie?api_key=19ca613dce306abd8309ecbdbd90cbe3&language=en-US&query=${movieName}&page=1&include_adult=false`
    );
    const data = await response.json();
    setMovies(data.results);
  };
  const selectMovie = (movieId) => {
    if (movieId) setSelectedMovie(movieId);
  };
  const handleClose = () => {
    setSelectedMovie(null);
  };

  return (
    <>
      <Search setSearch={setSearch} />
      <div className="w-full h-full p-10 flex flex-row flex-wrap justify-center">
        {movies &&
          movies.map((movie) => {
            return (
              <MoviePoster
                key={movie.id}
                movie={movie}
                selectMovie={selectMovie}
              />
            );
          })}
        {searchMovie === "" && <Trending selectMovie={selectMovie} />}
      </div>
      {selectedMovie && (
        <MovieInfo movieId={selectedMovie} handleClose={handleClose} />
      )}
    </>
  );
};
export default Home;
