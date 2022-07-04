import React, { useEffect, useState } from "react";
import Search from "../components/Search";
import MoviePoster from "../components/MoviePoster";
import { findOne, getAllWatched } from "../db";

const Watched = () => {
  const [selectedMovie, setSelectedMovie] = useState(null);
  const [searchMovie, setSearchMovie] = useState("");
  const [movies, setMovies] = useState([]);
  const getWatchedMoviesInfo = async () => {
    const watchedMovies = getAllWatched();
    const promises = watchedMovies
      .map((movie) => {
        return fetch(
          `https://api.themoviedb.org/3/movie/${movie.id}?api_key=19ca613dce306abd8309ecbdbd90cbe3`
        );
      })
      .map((promise) => promise.then((response) => response.json()));
    return await Promise.all(promises);
  };
  const getMovieById = async (movieId) => {
    const response = await fetch(
      `https://api.themoviedb.org/3/movie/${movieId}?api_key=19ca613dce306abd8309ecbdbd90cbe3&language=en-US`
    );
    return await response.json();
  };
  const setSearch = (e) => {
    if (movies && movies.length > 0) {
      e.preventDefault();
      const movieName = e.target.value;
      const foundMovie = findOne("watched", movieName);

      if (foundMovie) {
      }
    }
  };
  const selectMovie = (movieId) => {
    if (movieId) setSelectedMovie(movieId);
  };
  useEffect(() => {
    const fetchData = async () => {
      const watched = await getWatchedMoviesInfo();
      setMovies(watched);
    };
    fetchData();
  });

  return (
    <div>
      <Search setSearch={setSearch} />
      <h1 className="text-4xl text-white font-bold underline underline-offset-4 w-full text-center mt-8 mb-8">
        Watched Movies
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
    </div>
  );
};
export default Watched;
