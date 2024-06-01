import React, { useState, useEffect , useContext} from "react";
import { ResultCard } from "./ResultCard";
import { Moviehome } from "./Moviehome";
import { MovieCard1 } from "./MovieCard1";
import { Header } from "./Header";
import { Link } from "react-router-dom";
import { GlobalContext } from "../context/GlobalState";
const API_KEY = "b7bafde0405fe6ef75c70ad66ac4be3a";

export const MovieList = () => {
    const [results, setResults] = useState([]);
    const { movielist } = useContext(GlobalContext);
    useEffect(() => {
        list();
    }, []);

    const list = () => {
        fetch(`https://api.themoviedb.org/3/movie/top_rated?api_key=${API_KEY}&language=en-US&page=1`)
            .then(response => response.json())
            .then(data => {
                if (!data.errors) {
                    setResults(prevResults => {
                        const newResults = [...prevResults, ...data.results];
                        if (newResults.length > 30) {
                            return newResults.slice(0, 30);
                        }
                        return newResults;
                    });
                } else {
                    setResults([]);
                }
                console.log(data);
            });
    };

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
                <div className="add-content1">
                    {results.length > 0 && (
                        <div className="movie-grid">
                            {results.map((movie) => (
                                <MovieCard1 movie={movie} key={movie.id} type="homelist" />
                            ))}
                    </div>
                    )}
                </div>
            </div>
        </div>
        </>
    );
};
