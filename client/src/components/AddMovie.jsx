import React, { useState } from 'react';
import { searchMovies } from '../api';

const AddMovie = ({ addMovie }) => {
const [query, setQuery] = useState('');
const [results, setResults] = useState([]);

const handleSearch = async (e) => {
    e.preventDefault();
    if (query) {
        const movies = await searchMovies(query);
        setResults(movies);
    }
};

const handleSelectMovie = (movie) => {
    addMovie(movie);
    setQuery('');
    setResults([]);
};

return (
    <div className="mb-8">
        <form onSubmit={handleSearch} className="flex justify-center mb-4">
        <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search for a movie"
            className="px-4 py-2 border rounded-l-lg focus:outline-none focus:ring-2 focus:ring-blue-800"
        />
        <button type="submit"
            className="px-4 py-2 bg-blue-900 text-white rounded-r-lg hover:bg-blue-800"
        >Search</button>
        </form>
    <ul className="max-w-md mx-auto">
        {results.map((movie) => (
            <li key={movie.id} onClick={() => handleSelectMovie(movie)}
            className="cursor-pointer hover:bg-gray-700 p-2 rounded text-gray-100"
            >
            {movie.title} ({movie.release_date.split('-')[0]})
            </li>
        ))}
    </ul>
    </div>
);
};

export default AddMovie;


