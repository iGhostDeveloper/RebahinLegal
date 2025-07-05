/* empty css                                 */
import { c as createComponent, r as renderComponent, d as renderTemplate, m as maybeRenderHead, e as addAttribute } from '../chunks/astro/server_BWIUPyhQ.mjs';
import 'kleur/colors';
import 'html-escaper';
import { l as getTrendingMovies, i as getPopularMovies, j as getTopRatedMovies, k as getUpcomingMovies, $ as $$Layout, d as $$Header, e as $$MovieCard, h as $$Footer } from '../chunks/MovieCard_-hTpXpCc.mjs';
export { renderers } from '../renderers.mjs';

const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const trendingMovies = await getTrendingMovies();
  const popularMovies = await getPopularMovies();
  const topRatedMovies = await getTopRatedMovies();
  const upcomingMovies = await getUpcomingMovies();
  const featuredMovie = trendingMovies?.results?.[0];
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "MovieHub - Discover Amazing Movies" }, { "default": async ($$result2) => renderTemplate` ${renderComponent($$result2, "Header", $$Header, {})} ${maybeRenderHead()}<main> <!-- Hero Section --> ${featuredMovie && renderTemplate`<section class="relative h-screen flex items-center justify-center overflow-hidden"> <!-- Background Image --> <div class="absolute inset-0"> <img${addAttribute(`https://image.tmdb.org/t/p/w1280${featuredMovie.backdrop_path}`, "src")}${addAttribute(featuredMovie.title, "alt")} class="w-full h-full object-cover"> <div class="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-transparent"></div> <div class="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div> </div> <!-- Hero Content --> <div class="relative z-10 container mx-auto px-4"> <div class="max-w-2xl"> <h1 class="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight"> ${featuredMovie.title} </h1> <p class="text-xl text-gray-200 mb-8 leading-relaxed"> ${featuredMovie.overview} </p> <div class="flex items-center space-x-6 mb-8"> <div class="flex items-center space-x-2"> <svg class="w-6 h-6 text-yellow-400" fill="currentColor" viewBox="0 0 20 20"> <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path> </svg> <span class="text-white text-lg font-semibold">${featuredMovie.vote_average.toFixed(1)}</span> </div> <span class="text-gray-300"> ${featuredMovie.release_date ? new Date(featuredMovie.release_date).getFullYear() : "Unknown"} </span> </div> <div class="flex flex-col sm:flex-row gap-4"> <a${addAttribute(`/movie/${featuredMovie.id}`, "href")} class="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold transition-colors flex items-center justify-center space-x-2"> <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"> <path d="M6.3 2.841A1.5 1.5 0 004 4.11V15.89a1.5 1.5 0 002.3 1.269l9.344-5.89a1.5 1.5 0 000-2.538L6.3 2.84z"></path> </svg> <span>Watch Now</span> </a> <button class="bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white px-8 py-4 rounded-lg font-semibold transition-colors flex items-center justify-center space-x-2"> <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6"></path> </svg> <span>Add to Watchlist</span> </button> </div> </div> </div> <!-- Scroll Indicator --> <div class="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce"> <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"></path> </svg> </div> </section>`} <!-- Trending Movies Section --> ${trendingMovies?.results && renderTemplate`<section class="py-16 bg-dark-900"> <div class="container mx-auto px-4"> <div class="flex items-center justify-between mb-8"> <h2 class="text-3xl font-bold text-white">Trending Now</h2> <a href="/trending" class="text-blue-400 hover:text-blue-300 transition-colors font-medium">
View All →
</a> </div> <div class="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6"> ${trendingMovies.results.slice(0, 12).map((movie) => renderTemplate`${renderComponent($$result2, "MovieCard", $$MovieCard, { "movie": movie })}`)} </div> </div> </section>`} <!-- Popular Movies Section --> ${popularMovies?.results && renderTemplate`<section class="py-16 bg-dark-800"> <div class="container mx-auto px-4"> <div class="flex items-center justify-between mb-8"> <h2 class="text-3xl font-bold text-white">Popular Movies</h2> <a href="/popular" class="text-blue-400 hover:text-blue-300 transition-colors font-medium">
View All →
</a> </div> <div class="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6"> ${popularMovies.results.slice(0, 12).map((movie) => renderTemplate`${renderComponent($$result2, "MovieCard", $$MovieCard, { "movie": movie })}`)} </div> </div> </section>`} <!-- Top Rated Movies Section --> ${topRatedMovies?.results && renderTemplate`<section class="py-16 bg-dark-900"> <div class="container mx-auto px-4"> <div class="flex items-center justify-between mb-8"> <h2 class="text-3xl font-bold text-white">Top Rated</h2> <a href="/top-rated" class="text-blue-400 hover:text-blue-300 transition-colors font-medium">
View All →
</a> </div> <div class="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6"> ${topRatedMovies.results.slice(0, 12).map((movie) => renderTemplate`${renderComponent($$result2, "MovieCard", $$MovieCard, { "movie": movie })}`)} </div> </div> </section>`} <!-- Upcoming Movies Section --> ${upcomingMovies?.results && renderTemplate`<section class="py-16 bg-dark-800"> <div class="container mx-auto px-4"> <div class="flex items-center justify-between mb-8"> <h2 class="text-3xl font-bold text-white">Coming Soon</h2> <a href="/upcoming" class="text-blue-400 hover:text-blue-300 transition-colors font-medium">
View All →
</a> </div> <div class="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6"> ${upcomingMovies.results.slice(0, 12).map((movie) => renderTemplate`${renderComponent($$result2, "MovieCard", $$MovieCard, { "movie": movie })}`)} </div> </div> </section>`} <!-- Newsletter Section --> <section class="py-16 bg-gradient-to-r from-blue-600 to-purple-600"> <div class="container mx-auto px-4 text-center"> <h2 class="text-3xl font-bold text-white mb-4">Stay Updated</h2> <p class="text-blue-100 mb-8 max-w-2xl mx-auto">
Get the latest movie news, reviews, and recommendations delivered straight to your inbox.
</p> <form class="max-w-md mx-auto flex gap-4"> <input type="email" placeholder="Enter your email" class="flex-1 px-4 py-3 rounded-lg bg-white/20 backdrop-blur-sm text-white placeholder-blue-200 border border-white/30 focus:outline-none focus:ring-2 focus:ring-white/50"> <button type="submit" class="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors">
Subscribe
</button> </form> </div> </section> </main> ${renderComponent($$result2, "Footer", $$Footer, {})} ` })}`;
}, "C:/Users/Administrator/Documents/BLACKBOX AI/Adsterra Pool/Movie/src/pages/index.astro", void 0);

const $$file = "C:/Users/Administrator/Documents/BLACKBOX AI/Adsterra Pool/Movie/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
