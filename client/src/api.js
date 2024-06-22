import axios from 'axios';

const API_KEY = 'YOUR_API_KEY';     // Replace 'YOUR_API_KEY' with your own TMDB API key
const BASE_URL = 'https://api.themoviedb.org/3';

export const searchMovies = async (query) => {
    const response = await axios.get(`${BASE_URL}/search/movie`, {
    params: {
        api_key: API_KEY,
        query: query,
    },
});
return response.data.results;
};
