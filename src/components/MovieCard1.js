import React from "react";
import { MovieControls } from "./MovieControls";

export const MovieCard1 = ({ movie, type }) => {
    return (
        <div className="movie-card">
            <div className="overlay"></div>

            <img
                src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`}
                alt={`${movie.title} Poster`}
            />
            <h3>{movie.title}</h3>
          

            <MovieControls type={type} movie={movie} />
        </div>
    );
};