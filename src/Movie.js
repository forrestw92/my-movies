import React, {useEffect, useState} from 'react'
import {ReactComponent as CloseIcon} from "./images/x.svg";
import StarRatings from 'react-star-ratings';

const Movie = ({movie}) => {
    const [isOpen, setIsOpen] = useState(movie);
    const toggle = () => setIsOpen(false);
    useEffect(() => {
            setIsOpen(true);
    }, [movie]);
    return (
        <div className={`${!isOpen ? 'hidden' : ''} fixed w-full h-full overflow-x-hidden overflow-y-auto top-0 right-0 left-0`}>
            <div className={`-translate-x-1/2 -translate-y-1/2 absolute bg-slate-900 left-1/2 p-5 rounded text-slate-400 top-1/2 w-full max-w-xl `}>
                <div className="flex flex-row flex-nowrap justify-between p-2 mb-3 border-b  border-b-slate-800">
                    <div className="text-slate-400 text-2xl font-bold text-ellipsis">
                        {movie.title}
                    </div>
                    <div className="flex items-center">
                        <CloseIcon onClick={toggle} className="cursor-pointer"/>
                    </div>
                </div>
                <img src={`https://image.tmdb.org/t/p/w500/${movie.backdrop_path}`} alt={`Poster for ${movie.title}`} className="border-slate-900 border w-full h-full drop-shadow-md"/>
                <div className="flex flex-row flex-nowrap">
                    <StarRatings
                        rating={movie.vote_average / 2}
                        numberOfStars={5}
                        name='rating'
                        starDimension="24px"
                        starSpacing={"-20px"}
                        className="bg-indigo-600"
                        starRatedColor={'#ffd700'}
                    />

                    <span className="flex items-center pl-2">{movie.vote_average / 2}/5</span>
                </div>
                <div className="pt-5 flex flex-col flex-nowrap">

                    <p className="text-lg">Summary:</p>
                    <p>
                        {movie.overview}
                    </p>
                </div>
            </div>
        </div>)
}

export default Movie;