import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";
import { MovieCard } from "./MovieCard";
import { Header } from "./Header";
import { Link } from "react-router-dom";
export const Watched = () => {
    const { watched } = useContext(GlobalContext);
  
    return (
    <>
            <header>
                <div className="container">
                    <div className="inner-content">
                        <div className="brand">
                            <Link to="/movielist">Movies</Link>
                        </div>
                        <div>

                        </div>
                        <ul className="nav-links">

                            <li>
                                <Link to="/hits">Hits</Link>
                            </li>

                            <li>
                                <Link to="/rotten">Rotten</Link>
                            </li>

                            <li>
                                <Link to="/add" className="btn btn-main">
                                    Search
                                </Link>
                            </li>
                            <li>
                                <Link to="/">Logout

                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </header>
        <div className="movie-page">
           
            <div className="container">
                <div className="header">

                    <h1 className="heading">Rotten oranges</h1>

                    <span className="count-pill">
                        {watched.length} {watched.length === 1 ? "Movie" : "Movies"}
                    </span>
                </div>

                {watched.length > 0 ? (
                    <div className="movie-grid">
                        {watched.map((movie) => (
                            <MovieCard movie={movie} key={movie.id} type="watched" />
                        ))}
                    </div>
                ) : (
                    <h2 className="no-movies">No movies in your list! Add some!</h2>
                )}
            </div>
        </div>
        </>
    );
};