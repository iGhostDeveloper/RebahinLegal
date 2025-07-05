import { c as createComponent, a as createAstro, m as maybeRenderHead, e as addAttribute, d as renderTemplate } from './astro/server_BWIUPyhQ.mjs';
import 'kleur/colors';
import 'html-escaper';
import 'clsx';

const $$Astro = createAstro();
const $$Pagination = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Pagination;
  const { currentPage, totalPages, baseUrl } = Astro2.props;
  const pageNumbers = [];
  const maxPages = Math.min(5, totalPages);
  for (let i = 0; i < maxPages; i++) {
    let pageNum;
    if (totalPages <= 5) {
      pageNum = i + 1;
    } else if (currentPage <= 3) {
      pageNum = i + 1;
    } else if (currentPage >= totalPages - 2) {
      pageNum = totalPages - 4 + i;
    } else {
      pageNum = currentPage - 2 + i;
    }
    pageNumbers.push(pageNum);
  }
  return renderTemplate`${totalPages > 1 && renderTemplate`${maybeRenderHead()}<div class="flex justify-center items-center space-x-2"><!-- Previous Page -->${currentPage > 1 && renderTemplate`<a${addAttribute(`${baseUrl}?page=${currentPage - 1}`, "href")} class="bg-dark-800 hover:bg-dark-700 text-white px-4 py-2 rounded-lg transition-colors flex items-center space-x-2"><svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"></path></svg><span>Previous</span></a>`}<!-- Page Numbers --><div class="flex items-center space-x-1">${pageNumbers.map((pageNum) => {
    const isCurrentPage = pageNum === currentPage;
    const linkClass = isCurrentPage ? "bg-blue-600 text-white px-3 py-2 rounded-lg transition-colors" : "bg-dark-800 hover:bg-dark-700 text-gray-300 hover:text-white px-3 py-2 rounded-lg transition-colors";
    return renderTemplate`<a${addAttribute(`${baseUrl}?page=${pageNum}`, "href")}${addAttribute(linkClass, "class")}>${pageNum}</a>`;
  })}</div><!-- Next Page -->${currentPage < totalPages && renderTemplate`<a${addAttribute(`${baseUrl}?page=${currentPage + 1}`, "href")} class="bg-dark-800 hover:bg-dark-700 text-white px-4 py-2 rounded-lg transition-colors flex items-center space-x-2"><span>Next</span><svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path></svg></a>`}</div>`}`;
}, "C:/Users/Administrator/Documents/BLACKBOX AI/Adsterra Pool/Movie/src/components/Pagination.astro", void 0);

export { $$Pagination as $ };
