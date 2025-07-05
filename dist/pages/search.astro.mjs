/* empty css                                 */
import { c as createComponent, a as createAstro, r as renderComponent, d as renderTemplate, m as maybeRenderHead, e as addAttribute } from '../chunks/astro/server_BWIUPyhQ.mjs';
import 'kleur/colors';
import 'html-escaper';
import { s as searchMovies, $ as $$Layout, d as $$Header, e as $$MovieCard, h as $$Footer } from '../chunks/MovieCard_-hTpXpCc.mjs';
import { $ as $$Pagination } from '../chunks/Pagination_CZgI_gZk.mjs';
export { renderers } from '../renderers.mjs';

const $$Astro = createAstro();
const $$Search = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Search;
  const url = new URL(Astro2.request.url);
  const query = url.searchParams.get("q") || "";
  const page = parseInt(url.searchParams.get("page") || "1");
  let searchResults = null;
  let totalPages = 0;
  if (query.trim()) {
    searchResults = await searchMovies(query, page);
    totalPages = searchResults?.total_pages || 0;
  }
  const title = query ? `Search results for "${query}"` : "Search Movies";
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": `${title} - MovieHub` }, { "default": async ($$result2) => renderTemplate` ${renderComponent($$result2, "Header", $$Header, {})} ${maybeRenderHead()}<main class="min-h-screen bg-dark-900"> <div class="container mx-auto px-4 py-8"> <!-- Search Header --> <div class="mb-8"> <h1 class="text-3xl md:text-4xl font-bold text-white mb-4"> ${query ? `Search Results for "${query}"` : "Search Movies"} </h1> ${searchResults && renderTemplate`<p class="text-gray-400">
Found ${searchResults.total_results?.toLocaleString()} results
${totalPages > 1 && ` (Page ${page} of ${totalPages})`} </p>`} </div> <!-- Search Form --> <div class="mb-12"> <form action="/search" method="get" class="max-w-2xl"> <div class="relative"> <input type="text" name="q"${addAttribute(query, "value")} placeholder="Search for movies..." class="w-full bg-dark-800 border border-dark-600 rounded-lg px-6 py-4 pl-14 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-lg" autocomplete="off"> <div class="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none"> <svg class="h-6 w-6 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path> </svg> </div> <button type="submit" class="absolute inset-y-0 right-0 pr-4 flex items-center text-blue-400 hover:text-blue-300 transition-colors"> <svg class="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7l5 5-5 5M6 12h12"></path> </svg> </button> </div> </form> </div> <!-- Search Results --> ${query && searchResults ? renderTemplate`<div> ${searchResults.results && searchResults.results.length > 0 ? renderTemplate`<div> <!-- Movies Grid --> <div class="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6 mb-12"> ${searchResults.results.map((movie) => renderTemplate`${renderComponent($$result2, "MovieCard", $$MovieCard, { "movie": movie })}`)} </div> <!-- Pagination --> ${renderComponent($$result2, "Pagination", $$Pagination, { "currentPage": page, "totalPages": totalPages, "baseUrl": `/search?q=${encodeURIComponent(query)}` })} </div>` : renderTemplate`<!-- No Results -->
            <div class="text-center py-16"> <div class="mb-6"> <svg class="w-24 h-24 text-gray-600 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path> </svg> </div> <h2 class="text-2xl font-bold text-white mb-4">No movies found</h2> <p class="text-gray-400 mb-8">
We couldn't find any movies matching "${query}". Try searching with different keywords.
</p> <div class="space-y-2 text-gray-500 text-sm"> <p>• Check your spelling</p> <p>• Try more general keywords</p> <p>• Use the movie's original title</p> </div> </div>`} </div>` : !query ? renderTemplate`<!-- Search Suggestions -->
        <div class="text-center py-16"> <div class="mb-8"> <svg class="w-24 h-24 text-gray-600 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path> </svg> </div> <h2 class="text-2xl font-bold text-white mb-4">Discover Movies</h2> <p class="text-gray-400 mb-8 max-w-2xl mx-auto">
Search through thousands of movies to find your next favorite film. 
            Enter a movie title, actor name, or genre to get started.
</p> <!-- Popular Search Terms --> <div class="max-w-2xl mx-auto"> <h3 class="text-lg font-semibold text-white mb-4">Popular Searches</h3> <div class="flex flex-wrap justify-center gap-2"> ${[
    "Marvel",
    "Action",
    "Comedy",
    "Horror",
    "Sci-Fi",
    "Drama",
    "Tom Hanks",
    "Leonardo DiCaprio",
    "Christopher Nolan",
    "Disney"
  ].map((term) => renderTemplate`<a${addAttribute(`/search?q=${encodeURIComponent(term)}`, "href")} class="bg-dark-800 hover:bg-blue-600 text-gray-300 hover:text-white px-4 py-2 rounded-full text-sm transition-colors"> ${term} </a>`)} </div> </div> </div>` : renderTemplate`<!-- Loading State -->
        <div class="text-center py-16"> <div class="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500 mx-auto mb-4"></div> <p class="text-gray-400">Searching...</p> </div>`} </div> </main> ${renderComponent($$result2, "Footer", $$Footer, {})} ` })}`;
}, "C:/Users/Administrator/Documents/BLACKBOX AI/Adsterra Pool/Movie/src/pages/search.astro", void 0);

const $$file = "C:/Users/Administrator/Documents/BLACKBOX AI/Adsterra Pool/Movie/src/pages/search.astro";
const $$url = "/search";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Search,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
