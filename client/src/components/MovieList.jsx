import React from 'react';
import Movie from './Movie';

const MovieList = ({ movies, removeMovie }) => {
    return (
    <div className="max-w-4xl mx-auto">
        <h2 className="text-2xl font-semibold mb-4 text-gray-100">My Watchlist</h2>
        <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {movies.map((movie) => (
            <Movie key={movie.id} movie={movie} removeMovie={removeMovie} />
        ))}
        </ul>
    </div>
    );
};

export default MovieList;
