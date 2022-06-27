import React from 'react'

const Search = ({setSearch}) => {
    return (
        <div className="w-full h-24">
            <div className="w-full h-full p-10">
                <input onInput={(e) => setSearch(e)} type="text"  className=" text-center text-2xl border  bg-slate-700 rounded w-full h-full p-7 text-gray-400 border-slate-900  outline-slate-400 focus-visible:outline" placeholder="Search..."/>
            </div>
        </div>
    )
}
export default Search;