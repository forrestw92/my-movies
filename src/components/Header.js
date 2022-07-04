import React from 'react';
import Logo from "../images/logo.png";
import {Link, useLocation} from "react-router-dom";

const Header = () => {
    const location = useLocation()
    const isHome = location.pathname === "/"
    const isWatched = location.pathname === "/watched"
    const isSaved = location.pathname === "/saved"
    return (
        <header>
            <img alt="Logo" src={Logo} className="max-w-logo m-auto p-10 "/>
            <p className="italic text-center pb-5 text-slate-400">Search, save and view watched movies.</p>
            <div className="max-w-md flex flex-row flex-nowrap justify-between m-auto text-center">
                {!isHome && <Link to="/" className="w-2/5 relative inline-flex items-center justify-center p-0.5 mb-2  overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-green-400 to-blue-600 group-hover:from-green-400 group-hover:to-blue-600 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800">
                    <span className="text-lg relative w-full px-2.5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                        Home
                    </span>
                </Link>}
                {!isWatched && <Link to="/watched" className="w-2/5 relative inline-flex items-center justify-center p-0.5 mb-2  overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-green-400 to-blue-600 group-hover:from-green-400 group-hover:to-blue-600 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800">
                    <span className="text-lg relative w-full px-2.5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                        Watched Movies
                    </span>
                </Link>}
                {!isSaved && <Link to="/saved" className="w-2/5 relative inline-flex items-center justify-center p-0.5 mb-2  overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-500 to-pink-500 group-hover:from-purple-500 group-hover:to-pink-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800">
                    <span className="text-lg relative w-full px-2.5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                        Saved Movies
                    </span>
                </Link>}
            </div>
        </header>
    )
}
export default Header;