import React, { useState, useEffect } from 'react';
import MovieList from './components/MovieList';
import AddMovie from './components/AddMovie';

const App = () => {
  const [movies, setMovies] = useState(() => {
    const savedMovies = localStorage.getItem('movies');
    return savedMovies ? JSON.parse(savedMovies) : [];
  });

  useEffect(() => {
    localStorage.setItem('movies', JSON.stringify(movies));
  }, [movies]);

  const addMovie = (movie) => {
    setMovies([...movies, movie]);
  };

  const removeMovie = (id) => {
    setMovies(movies.filter(movie => movie.id !== id));
  };

  return (
    <div className="min-h-screen bg-gray-600 p-8">
      <h1 className="text-3xl font-bold text-center mb-8 text-gray-100">Movie Watchlist</h1>
      <AddMovie addMovie={addMovie} />
      <MovieList movies={movies} removeMovie={removeMovie} />
    </div>
  );
};

export default App;


