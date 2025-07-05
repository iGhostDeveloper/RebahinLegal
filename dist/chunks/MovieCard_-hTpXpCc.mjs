import { c as createComponent, a as createAstro, e as addAttribute, f as renderHead, g as renderSlot, d as renderTemplate, m as maybeRenderHead, b as renderScript, r as renderComponent } from './astro/server_BWIUPyhQ.mjs';
import 'kleur/colors';
import 'html-escaper';
import 'clsx';
/* empty css                         */

const $$Astro$1 = createAstro();
const $$Layout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Layout;
  const { title, description = "Discover and explore movies with our comprehensive movie database" } = Astro2.props;
  return renderTemplate`<html lang="en" class="dark"> <head><meta charset="UTF-8"><meta name="description"${addAttribute(description, "content")}><meta name="viewport" content="width=device-width, initial-scale=1.0"><link rel="icon" type="image/svg+xml" href="/favicon.svg"><link rel="preconnect" href="https://fonts.googleapis.com"><link rel="preconnect" href="https://fonts.gstatic.com" crossorigin><link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap" rel="stylesheet"><title>${title}</title>${renderHead()}</head> <body class="bg-dark-900 text-white min-h-screen"> ${renderSlot($$result, $$slots["default"])} </body></html>`;
}, "C:/Users/Administrator/Documents/BLACKBOX AI/Adsterra Pool/Movie/src/layouts/Layout.astro", void 0);

const $$SearchBar = createComponent(async ($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<div class="relative"> <form action="/search" method="get" class="relative"> <input type="text" name="q" placeholder="Search movies..." class="w-full bg-dark-700 border border-dark-600 rounded-lg px-4 py-2 pl-10 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all" autocomplete="off"> <div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none"> <svg class="h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path> </svg> </div> <button type="submit" class="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-400 hover:text-white transition-colors"> <svg class="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7l5 5-5 5M6 12h12"></path> </svg> </button> </form> <!-- Search suggestions dropdown (will be populated via JavaScript) --> <div id="search-suggestions" class="absolute top-full left-0 right-0 bg-dark-800 border border-dark-600 rounded-lg mt-1 shadow-xl z-50 hidden max-h-96 overflow-y-auto"> <!-- Suggestions will be populated here --> </div> </div> ${renderScript($$result, "C:/Users/Administrator/Documents/BLACKBOX AI/Adsterra Pool/Movie/src/components/SearchBar.astro?astro&type=script&index=0&lang.ts")}`;
}, "C:/Users/Administrator/Documents/BLACKBOX AI/Adsterra Pool/Movie/src/components/SearchBar.astro", void 0);

const $$Header = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<header class="bg-dark-800/95 backdrop-blur-sm border-b border-dark-700 sticky top-0 z-50"> <div class="container mx-auto px-4 py-4"> <div class="flex items-center justify-between"> <!-- Logo --> <div class="flex items-center space-x-2"> <a href="/" class="flex items-center space-x-2 hover:opacity-80 transition-opacity"> <div class="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center"> <svg class="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20"> <path d="M2 6a2 2 0 012-2h6l2 2h6a2 2 0 012 2v6a2 2 0 01-2 2H4a2 2 0 01-2-2V6zM5 8a1 1 0 011-1h1a1 1 0 010 2H6a1 1 0 01-1-1zm6 0a1 1 0 011-1h3a1 1 0 110 2h-3a1 1 0 01-1-1z"></path> </svg> </div> <span class="text-xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
MovieHub
</span> </a> </div> <!-- Navigation --> <nav class="hidden md:flex items-center space-x-8"> <a href="/" class="text-gray-300 hover:text-white transition-colors font-medium">
Home
</a> <a href="/popular" class="text-gray-300 hover:text-white transition-colors font-medium">
Popular
</a> <a href="/top-rated" class="text-gray-300 hover:text-white transition-colors font-medium">
Top Rated
</a> <a href="/upcoming" class="text-gray-300 hover:text-white transition-colors font-medium">
Upcoming
</a> </nav> <!-- Search Bar --> <div class="flex-1 max-w-md mx-4"> ${renderComponent($$result, "SearchBar", $$SearchBar, {})} </div> <!-- Mobile Menu Button --> <button class="md:hidden p-2 rounded-lg hover:bg-dark-700 transition-colors" id="mobile-menu-btn"> <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path> </svg> </button> </div> <!-- Mobile Navigation --> <nav class="md:hidden mt-4 pb-4 border-t border-dark-700 pt-4 hidden" id="mobile-menu"> <div class="flex flex-col space-y-3"> <a href="/" class="text-gray-300 hover:text-white transition-colors font-medium py-2">
Home
</a> <a href="/popular" class="text-gray-300 hover:text-white transition-colors font-medium py-2">
Popular
</a> <a href="/top-rated" class="text-gray-300 hover:text-white transition-colors font-medium py-2">
Top Rated
</a> <a href="/upcoming" class="text-gray-300 hover:text-white transition-colors font-medium py-2">
Upcoming
</a> </div> </nav> </div> </header> ${renderScript($$result, "C:/Users/Administrator/Documents/BLACKBOX AI/Adsterra Pool/Movie/src/components/Header.astro?astro&type=script&index=0&lang.ts")}`;
}, "C:/Users/Administrator/Documents/BLACKBOX AI/Adsterra Pool/Movie/src/components/Header.astro", void 0);

const $$Footer = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<footer class="bg-dark-800 border-t border-dark-700 mt-16"> <div class="container mx-auto px-4 py-8"> <div class="grid grid-cols-1 md:grid-cols-4 gap-8"> <!-- Brand Section --> <div class="col-span-1 md:col-span-2"> <div class="flex items-center space-x-2 mb-4"> <div class="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center"> <svg class="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20"> <path d="M2 6a2 2 0 012-2h6l2 2h6a2 2 0 012 2v6a2 2 0 01-2 2H4a2 2 0 01-2-2V6zM5 8a1 1 0 011-1h1a1 1 0 010 2H6a1 1 0 01-1-1zm6 0a1 1 0 011-1h3a1 1 0 110 2h-3a1 1 0 01-1-1z"></path> </svg> </div> <span class="text-xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
MovieHub
</span> </div> <p class="text-gray-400 text-sm leading-relaxed max-w-md">
Discover and explore thousands of movies with our comprehensive database. 
          Get detailed information, ratings, and reviews for all your favorite films.
</p> <div class="flex items-center space-x-4 mt-4"> <a href="#" class="text-gray-400 hover:text-white transition-colors"> <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"> <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path> </svg> </a> <a href="#" class="text-gray-400 hover:text-white transition-colors"> <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"> <path d="M22.46 6c-.77.35-1.6.58-2.46.69.88-.53 1.56-1.37 1.88-2.38-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29 0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15 0 1.49.75 2.81 1.91 3.56-.71 0-1.37-.2-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 0 1-1.93.07 4.28 4.28 0 0 0 4 2.98 8.521 8.521 0 0 1-5.33 1.84c-.34 0-.68-.02-1.02-.06C3.44 20.29 5.7 21 8.12 21 16 21 20.33 14.46 20.33 8.79c0-.19 0-.37-.01-.56.84-.6 1.56-1.36 2.14-2.23z"></path> </svg> </a> <a href="#" class="text-gray-400 hover:text-white transition-colors"> <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"> <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.174-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.741.099.12.112.225.085.345-.09.375-.293 1.199-.334 1.363-.053.225-.172.271-.402.165-1.495-.69-2.433-2.878-2.433-4.646 0-3.776 2.748-7.252 7.92-7.252 4.158 0 7.392 2.967 7.392 6.923 0 4.135-2.607 7.462-6.233 7.462-1.214 0-2.357-.629-2.746-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24.009 12.017 24.009c6.624 0 11.99-5.367 11.99-11.988C24.007 5.367 18.641.001.012.001z"></path> </svg> </a> </div> </div> <!-- Quick Links --> <div> <h4 class="text-white font-semibold mb-4">Quick Links</h4> <ul class="space-y-2"> <li><a href="/" class="text-gray-400 hover:text-white transition-colors text-sm">Home</a></li> <li><a href="/popular" class="text-gray-400 hover:text-white transition-colors text-sm">Popular Movies</a></li> <li><a href="/top-rated" class="text-gray-400 hover:text-white transition-colors text-sm">Top Rated</a></li> <li><a href="/upcoming" class="text-gray-400 hover:text-white transition-colors text-sm">Upcoming</a></li> <li><a href="/search" class="text-gray-400 hover:text-white transition-colors text-sm">Search</a></li> </ul> </div> <!-- Categories --> <div> <h4 class="text-white font-semibold mb-4">Categories</h4> <ul class="space-y-2"> <li><a href="/genre/action" class="text-gray-400 hover:text-white transition-colors text-sm">Action</a></li> <li><a href="/genre/comedy" class="text-gray-400 hover:text-white transition-colors text-sm">Comedy</a></li> <li><a href="/genre/drama" class="text-gray-400 hover:text-white transition-colors text-sm">Drama</a></li> <li><a href="/genre/horror" class="text-gray-400 hover:text-white transition-colors text-sm">Horror</a></li> <li><a href="/genre/sci-fi" class="text-gray-400 hover:text-white transition-colors text-sm">Sci-Fi</a></li> </ul> </div> </div> <!-- Bottom Section --> <div class="border-t border-dark-700 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center"> <div class="text-gray-400 text-sm mb-4 md:mb-0"> <p>&copy; 2024 MovieHub. All rights reserved.</p> </div> <div class="flex items-center space-x-6 text-sm"> <a href="/privacy" class="text-gray-400 hover:text-white transition-colors">Privacy Policy</a> <a href="/terms" class="text-gray-400 hover:text-white transition-colors">Terms of Service</a> <a href="/contact" class="text-gray-400 hover:text-white transition-colors">Contact</a> </div> </div> <!-- TMDB Attribution --> <div class="border-t border-dark-700 mt-6 pt-6"> <div class="flex items-center justify-center space-x-2 text-gray-400 text-xs"> <span>Powered by</span> <a href="https://www.themoviedb.org/" target="_blank" rel="noopener noreferrer" class="hover:text-white transition-colors"> <img src="https://www.themoviedb.org/assets/2/v4/logos/v2/blue_short-8e7b30f73a4020692ccca9c88bafe5dcb6f8a62a4c6bc55cd9ba82bb2cd95f6c.svg" alt="TMDB" class="h-4"> </a> </div> </div> </div> </footer>`;
}, "C:/Users/Administrator/Documents/BLACKBOX AI/Adsterra Pool/Movie/src/components/Footer.astro", void 0);

const API_KEY = '63bc50b4a58bd52084b6d8642ced5aa7';
const BASE_URL = 'https://api.themoviedb.org/3';
const IMAGE_BASE_URL = 'https://image.tmdb.org/t/p';

// Helper function to make API requests
async function fetchFromTMDB(endpoint) {
  try {
    const response = await fetch(`${BASE_URL}${endpoint}?api_key=${API_KEY}`);
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
async function getPopularMovies(page = 1) {
  return await fetchFromTMDB(`/movie/popular?page=${page}`);
}

// Get trending movies
async function getTrendingMovies(timeWindow = 'day') {
  return await fetchFromTMDB(`/trending/movie/${timeWindow}`);
}

// Search movies
async function searchMovies(query, page = 1) {
  const encodedQuery = encodeURIComponent(query);
  return await fetchFromTMDB(`/search/movie?query=${encodedQuery}&page=${page}`);
}

// Get movie details
async function getMovieDetails(movieId) {
  return await fetchFromTMDB(`/movie/${movieId}?append_to_response=credits,videos,similar`);
}

// Get top rated movies
async function getTopRatedMovies(page = 1) {
  return await fetchFromTMDB(`/movie/top_rated?page=${page}`);
}

// Get upcoming movies
async function getUpcomingMovies(page = 1) {
  return await fetchFromTMDB(`/movie/upcoming?page=${page}`);
}

// Helper function to get image URL
function getImageUrl(path, size = 'w500') {
  if (!path) return '/placeholder-movie.jpg';
  return `${IMAGE_BASE_URL}/${size}${path}`;
}

// Helper function to get backdrop URL
function getBackdropUrl(path, size = 'w1280') {
  if (!path) return '/placeholder-backdrop.jpg';
  return `${IMAGE_BASE_URL}/${size}${path}`;
}

// Helper function to format release date
function formatDate(dateString) {
  if (!dateString) return 'Unknown';
  const date = new Date(dateString);
  return date.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });
}

// Helper function to format runtime
function formatRuntime(minutes) {
  if (!minutes) return 'Unknown';
  const hours = Math.floor(minutes / 60);
  const mins = minutes % 60;
  return `${hours}h ${mins}m`;
}

const $$Astro = createAstro();
const $$MovieCard = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$MovieCard;
  const { movie } = Astro2.props;
  const posterUrl = getImageUrl(movie.poster_path);
  const year = movie.release_date ? new Date(movie.release_date).getFullYear() : "Unknown";
  const rating = movie.vote_average ? movie.vote_average.toFixed(1) : "N/A";
  return renderTemplate`${maybeRenderHead()}<div class="bg-dark-800 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 group" data-astro-cid-y6otcn7o> <a${addAttribute(`/movie/${movie.id}`, "href")} class="block" data-astro-cid-y6otcn7o> <div class="relative aspect-[2/3] overflow-hidden" data-astro-cid-y6otcn7o> <img${addAttribute(posterUrl, "src")}${addAttribute(movie.title, "alt")} class="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110" loading="lazy" data-astro-cid-y6otcn7o> <div class="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" data-astro-cid-y6otcn7o></div> <!-- Rating Badge --> <div class="absolute top-2 right-2 bg-black/70 backdrop-blur-sm rounded-full px-2 py-1 flex items-center space-x-1" data-astro-cid-y6otcn7o> <svg class="w-3 h-3 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" data-astro-cid-y6otcn7o> <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" data-astro-cid-y6otcn7o></path> </svg> <span class="text-white text-xs font-medium" data-astro-cid-y6otcn7o>${rating}</span> </div> <!-- Play Button Overlay --> <div class="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300" data-astro-cid-y6otcn7o> <div class="bg-white/20 backdrop-blur-sm rounded-full p-3" data-astro-cid-y6otcn7o> <svg class="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20" data-astro-cid-y6otcn7o> <path d="M6.3 2.841A1.5 1.5 0 004 4.11V15.89a1.5 1.5 0 002.3 1.269l9.344-5.89a1.5 1.5 0 000-2.538L6.3 2.84z" data-astro-cid-y6otcn7o></path> </svg> </div> </div> </div> <div class="p-4" data-astro-cid-y6otcn7o> <h3 class="text-white font-semibold text-lg mb-2 line-clamp-2 group-hover:text-blue-400 transition-colors" data-astro-cid-y6otcn7o> ${movie.title} </h3> <div class="flex items-center justify-between mb-3" data-astro-cid-y6otcn7o> <span class="text-gray-400 text-sm" data-astro-cid-y6otcn7o>${year}</span> <div class="flex items-center space-x-1" data-astro-cid-y6otcn7o> <svg class="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" data-astro-cid-y6otcn7o> <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" data-astro-cid-y6otcn7o></path> </svg> <span class="text-gray-300 text-sm font-medium" data-astro-cid-y6otcn7o>${rating}</span> </div> </div> ${movie.overview && renderTemplate`<p class="text-gray-400 text-sm line-clamp-3 leading-relaxed" data-astro-cid-y6otcn7o> ${movie.overview} </p>`} </div> </a> </div> `;
}, "C:/Users/Administrator/Documents/BLACKBOX AI/Adsterra Pool/Movie/src/components/MovieCard.astro", void 0);

export { $$Layout as $, getBackdropUrl as a, getImageUrl as b, formatRuntime as c, $$Header as d, $$MovieCard as e, formatDate as f, getMovieDetails as g, $$Footer as h, getPopularMovies as i, getTopRatedMovies as j, getUpcomingMovies as k, getTrendingMovies as l, searchMovies as s };
