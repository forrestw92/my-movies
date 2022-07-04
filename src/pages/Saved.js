import React, { useEffect, useState } from "react";
import MoviePoster from "../components/MoviePoster";
import { getAllSaved } from "../db";
import MovieInfo from "../components/MovieInfo";

const Saved = () => {
  const [selectedMovie, setSelectedMovie] = useState(null);
  const [movies, setMovies] = useState([]);
  const getSavedMovieInfo = async () => {
    const savedMovies = getAllSaved();
    const promises = savedMovies
      .map((movie) => {
        return fetch(
          `https://api.themoviedb.org/3/movie/${movie.id}?api_key=19ca613dce306abd8309ecbdbd90cbe3`
        );
      })
      .map((promise) => promise.then((response) => response.json()));
    return await Promise.all(promises);
  };

  const selectMovie = (movieId) => {
    if (movieId) setSelectedMovie(movieId);
  };
  const handleClose = () => {
    setSelectedMovie(null);
  };
  useEffect(() => {
    const fetchData = async () => {
      const saved = await getSavedMovieInfo();
      setMovies(saved);
    };
    fetchData();
  });

  return (
    <div>
      <h1 className="text-4xl text-white font-bold underline underline-offset-4 w-full text-center mt-8 mb-8">
        Saved Movies
      </h1>

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
      </div>
      {selectedMovie && (
        <MovieInfo movieId={selectedMovie} handleClose={handleClose} />
      )}
    </div>
  );
};
export default Saved;
