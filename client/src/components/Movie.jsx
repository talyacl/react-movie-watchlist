import React from 'react';

const Movie = ({ movie, removeMovie }) => {
    const posterUrl = movie.poster_path
    ? `https://image.tmdb.org/t/p/w200${movie.poster_path}`
    : 'https://via.placeholder.com/200x300?text=No+Image';

    return (
    <li className="bg-white shadow-md rounded-lg overflow-hidden">
        <img src={posterUrl} alt={movie.title} className="w-full" />
        <div className="p-4">
        <h3 className="text-xl font-semibold">{movie.title}</h3>
        <p className="text-gray-700 mt-2">{movie.overview}</p>
        <p className="text-gray-500 mt-2">Release Date: {movie.release_date}</p>
        <button onClick={() => removeMovie(movie.id)}
                className="mt-4 px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700"
        >Remove</button>
    </div>
    </li>
    );
};

export default Movie;

