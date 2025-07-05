const API_KEY = '63bc50b4a58bd52084b6d8642ced5aa7';
const BASE_URL = 'https://api.themoviedb.org/3';
const IMAGE_BASE_URL = 'https://image.tmdb.org/t/p';

// Helper function to make API requests
async function fetchFromTMDB(endpoint) {
  try {
    // Clean up endpoint and ensure proper URL formation
    const cleanEndpoint = endpoint.startsWith('/') ? endpoint : `/${endpoint}`;
    const separator = cleanEndpoint.includes('?') ? '&' : '?';
    const url = `${BASE_URL}${cleanEndpoint}${separator}api_key=${API_KEY}`;
    
    
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    return await response.json();
  } catch (error) {
    console.error('TMDB API Error:', error);
    return null;
  }
}

// Get popular movies
export async function getPopularMovies(page = 1) {
  return await fetchFromTMDB(`/movie/popular?page=${page}`);
}

// Get trending movies
export async function getTrendingMovies(timeWindow = 'day') {
  return await fetchFromTMDB(`/trending/movie/${timeWindow}`);
}

// Search movies
export async function searchMovies(query, page = 1) {
  const encodedQuery = encodeURIComponent(query);
  return await fetchFromTMDB(`/search/movie?query=${encodedQuery}&page=${page}`);
}

// Get movie details
export async function getMovieDetails(movieId) {
  return await fetchFromTMDB(`/movie/${movieId}?append_to_response=credits,videos,similar`);
}

// Get movie genres
export async function getGenres() {
  return await fetchFromTMDB('/genre/movie/list');
}

// Get movies by genre
export async function getMoviesByGenre(genreId, page = 1) {
  return await fetchFromTMDB(`/discover/movie?with_genres=${genreId}&page=${page}`);
}

// Get top rated movies
export async function getTopRatedMovies(page = 1) {
  return await fetchFromTMDB(`/movie/top_rated?page=${page}`);
}

// Get upcoming movies
export async function getUpcomingMovies(page = 1) {
  return await fetchFromTMDB(`/movie/upcoming?page=${page}`);
}

// Helper function to get image URL
export function getImageUrl(path, size = 'w500') {
  if (!path) return '/placeholder-movie.jpg';
  return `${IMAGE_BASE_URL}/${size}${path}`;
}

// Helper function to get backdrop URL
export function getBackdropUrl(path, size = 'w1280') {
  if (!path) return '/placeholder-backdrop.jpg';
  return `${IMAGE_BASE_URL}/${size}${path}`;
}

// Helper function to format release date
export function formatDate(dateString) {
  if (!dateString) return 'Unknown';
  const date = new Date(dateString);
  return date.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });
}

// Helper function to format runtime
export function formatRuntime(minutes) {
  if (!minutes) return 'Unknown';
  const hours = Math.floor(minutes / 60);
  const mins = minutes % 60;
  return `${hours}h ${mins}m`;
}
