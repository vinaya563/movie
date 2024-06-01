import React, { useState } from "react";
import { ResultCard } from "./ResultCard";
import { Link } from "react-router-dom";
export const Add = () => {
    const [query, setQuery] = useState("");
    const [results, setResults] = useState([]);

    const onChange = (e) => {
        e.preventDefault();

        setQuery(e.target.value);
        fetch(
            `https://api.themoviedb.org/3/search/movie?api_key=b7bafde0405fe6ef75c70ad66ac4be3a&query=${e.target.value}`
        )
            .then((res) => res.json())
            .then((data) => {
                if (!data.errors) {
                    setResults(data.results);
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
        <div className="add-page">
            <div className="container">
                <div className="add-content">
                    <div className="input-wrapper">
                        <input
                            type="text"
                            placeholder="Search for a movie"
                            value={query}
                            onChange={onChange}
                        />
                    </div>

                    {results.length > 0 && (
                        <ul className="results">
                            {results.map((movie) => (
                                <li key={movie.id}>
                                    <ResultCard movie={movie} />
                                </li>
                            ))}
                        </ul>
                    )}
                </div>
            </div>
        </div>
        </>
    );
};