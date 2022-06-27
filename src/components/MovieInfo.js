import React, {useEffect, useState} from 'react'
import {ReactComponent as CloseIcon} from "../images/x.svg";

const MovieInfo = ({movieId}) => {
    const [isOpen, setIsOpen] = useState(movieId !== 0);
    const [movie, setMovieData] = useState(null);
    const toggle = () => setIsOpen(false);
    useEffect( () => {
        setIsOpen(false)
        const fetchData = async () => {
            const response = await fetch(`https://api.themoviedb.org/3/movie/${movieId}?api_key=19ca613dce306abd8309ecbdbd90cbe3&language=en-US`);
            const data = await response.json();
            setMovieData(data);
            setIsOpen(true)
            console.log(data)
        }
        fetchData()
    },[movieId])

    return (
        <>
            {movie && <div className={`${!isOpen ? 'hidden' : ''} fixed w-full h-full overflow-x-hidden overflow-y-auto top-0 right-0 left-0`}>
                <div className={`-translate-x-1/2 -translate-y-1/2 absolute bg-slate-900 left-1/2 p-5 rounded text-slate-400 top-1/2 w-full max-w-xl `}>
                    <div className="flex flex-row flex-nowrap justify-between p-2 mb-3 border-b  border-b-slate-800">
                        <div className="text-slate-200 text-2xl font-bold text-ellipsis">
                            {movie.title}
                        </div>

                        <div className="flex items-center">
                            <CloseIcon onClick={toggle} className="cursor-pointer"/>
                        </div>
                    </div>
                    <div className="flex text-slate-300 text-1xl italic text-ellipsis w-full justify-center">
                        {movie.tagline}
                    </div>
                    <img src={`https://image.tmdb.org/t/p/w500/${movie.backdrop_path}`} alt={`Poster for ${movie.title}`} className="border-slate-900 border w-full h-full drop-shadow-md"/>
                    <div className="flex items-center mt-2 w-full">
                        <svg className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20"
                             xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                        </svg>
                        <p className="ml-2 text-sm font-bold text-gray-900 dark:text-white">{Math.round(movie.vote_average *2 ) / 4}</p>
                        <span className="w-1 h-1 mx-1.5 bg-gray-500 rounded-full dark:bg-gray-400"></span>
                        <p className="text-sm font-medium text-gray-900 dark:text-white">{movie.vote_count} votes</p >
                        <a href={movie.homepage} className="flex justify-end grow text-slate-300 hover:text-slate-100 underline  hover:no-underline">Movie Homepage</a>
                    </div>
                    <div className="pt-5 pb-5 flex flex-col flex-nowrap">

                        <p className="text-lg font-bold text-slate-300">Summary:</p>
                        <p>
                            {movie.overview}
                        </p>
                    </div>
                    <div className="flex flex-row flex-nowrap justify-center w-full pt-3 border-t-2 border-t-slate-800">
                        <button type="button" className="text-white bg-gradient-to-br from-green-400 to-blue-600 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">
                            Watched It
                        </button>
                        <button type="button" className="text-white bg-gradient-to-r from-purple-500 to-pink-500 hover:bg-gradient-to-l focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">
                            Save It
                        </button>
                    </div>

                </div>
            </div>}
        </>)
}

export default MovieInfo;