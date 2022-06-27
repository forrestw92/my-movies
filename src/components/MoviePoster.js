import React from 'react';

const MoviePoster = ({ movie,selectMovie }) => {

    return (
        <div key={movie.id} onClick={() => selectMovie(movie.id)} className="flex w-full flex-col flex-nowrap pt-5 pb-5 sm:pl-5 sm:pr-5 sm:w-full md:w-1/2 lg:w-1/3 xl:w-1/4 max-w-lg  ">
            {movie.poster_path ? <img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} loading={"lazy"} alt={`Poster for ${movie.title}`} className="rounded-md border-slate-900 border w-full h-full drop-shadow-md"/> : <p className="text-2xl text-center text-slate-400 flex justify-center items-center h-full border border-slate-900">{movie.title}</p>}
        </div>
    )
}

export default MoviePoster;