/* empty css                                 */
import { c as createComponent, a as createAstro, r as renderComponent, d as renderTemplate, m as maybeRenderHead } from '../chunks/astro/server_BWIUPyhQ.mjs';
import 'kleur/colors';
import 'html-escaper';
import { i as getPopularMovies, $ as $$Layout, d as $$Header, e as $$MovieCard, h as $$Footer } from '../chunks/MovieCard_-hTpXpCc.mjs';
import { $ as $$Pagination } from '../chunks/Pagination_CZgI_gZk.mjs';
export { renderers } from '../renderers.mjs';

const $$Astro = createAstro();
const $$Popular = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Popular;
  const url = new URL(Astro2.request.url);
  const page = parseInt(url.searchParams.get("page") || "1");
  const popularMovies = await getPopularMovies(page);
  const totalPages = popularMovies?.total_pages || 0;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Popular Movies - MovieHub" }, { "default": async ($$result2) => renderTemplate` ${renderComponent($$result2, "Header", $$Header, {})} ${maybeRenderHead()}<main class="min-h-screen bg-dark-900"> <div class="container mx-auto px-4 py-8"> <!-- Header --> <div class="mb-8"> <h1 class="text-3xl md:text-4xl font-bold text-white mb-4">Popular Movies</h1> <p class="text-gray-400">
Discover the most popular movies right now
${totalPages > 1 && ` (Page ${page} of ${totalPages})`} </p> </div> <!-- Movies Grid --> ${popularMovies?.results && popularMovies.results.length > 0 ? renderTemplate`<div> <div class="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6 mb-12"> ${popularMovies.results.map((movie) => renderTemplate`${renderComponent($$result2, "MovieCard", $$MovieCard, { "movie": movie })}`)} </div> <!-- Pagination --> ${renderComponent($$result2, "Pagination", $$Pagination, { "currentPage": page, "totalPages": totalPages, "baseUrl": "/popular" })} </div>` : renderTemplate`<!-- No Results -->
        <div class="text-center py-16"> <div class="mb-6"> <svg class="w-24 h-24 text-gray-600 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1" d="M7 4V2a1 1 0 011-1h8a1 1 0 011 1v2h4a1 1 0 110 2h-1v12a2 2 0 01-2 2H6a2 2 0 01-2-2V6H3a1 1 0 110-2h4z"></path> </svg> </div> <h2 class="text-2xl font-bold text-white mb-4">No movies found</h2> <p class="text-gray-400">Unable to load popular movies at this time.</p> </div>`} </div> </main> ${renderComponent($$result2, "Footer", $$Footer, {})} ` })}`;
}, "C:/Users/Administrator/Documents/BLACKBOX AI/Adsterra Pool/Movie/src/pages/popular.astro", void 0);

const $$file = "C:/Users/Administrator/Documents/BLACKBOX AI/Adsterra Pool/Movie/src/pages/popular.astro";
const $$url = "/popular";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Popular,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
