import '@astrojs/internal-helpers/path';
import 'kleur/colors';
import 'html-escaper';
import 'clsx';
import { N as NOOP_MIDDLEWARE_HEADER, h as decodeKey } from './chunks/astro/server_BWIUPyhQ.mjs';
import 'cookie';
import 'es-module-lexer';

const NOOP_MIDDLEWARE_FN = async (_ctx, next) => {
  const response = await next();
  response.headers.set(NOOP_MIDDLEWARE_HEADER, "true");
  return response;
};

const codeToStatusMap = {
  // Implemented from IANA HTTP Status Code Registry
  // https://www.iana.org/assignments/http-status-codes/http-status-codes.xhtml
  BAD_REQUEST: 400,
  UNAUTHORIZED: 401,
  PAYMENT_REQUIRED: 402,
  FORBIDDEN: 403,
  NOT_FOUND: 404,
  METHOD_NOT_ALLOWED: 405,
  NOT_ACCEPTABLE: 406,
  PROXY_AUTHENTICATION_REQUIRED: 407,
  REQUEST_TIMEOUT: 408,
  CONFLICT: 409,
  GONE: 410,
  LENGTH_REQUIRED: 411,
  PRECONDITION_FAILED: 412,
  CONTENT_TOO_LARGE: 413,
  URI_TOO_LONG: 414,
  UNSUPPORTED_MEDIA_TYPE: 415,
  RANGE_NOT_SATISFIABLE: 416,
  EXPECTATION_FAILED: 417,
  MISDIRECTED_REQUEST: 421,
  UNPROCESSABLE_CONTENT: 422,
  LOCKED: 423,
  FAILED_DEPENDENCY: 424,
  TOO_EARLY: 425,
  UPGRADE_REQUIRED: 426,
  PRECONDITION_REQUIRED: 428,
  TOO_MANY_REQUESTS: 429,
  REQUEST_HEADER_FIELDS_TOO_LARGE: 431,
  UNAVAILABLE_FOR_LEGAL_REASONS: 451,
  INTERNAL_SERVER_ERROR: 500,
  NOT_IMPLEMENTED: 501,
  BAD_GATEWAY: 502,
  SERVICE_UNAVAILABLE: 503,
  GATEWAY_TIMEOUT: 504,
  HTTP_VERSION_NOT_SUPPORTED: 505,
  VARIANT_ALSO_NEGOTIATES: 506,
  INSUFFICIENT_STORAGE: 507,
  LOOP_DETECTED: 508,
  NETWORK_AUTHENTICATION_REQUIRED: 511
};
Object.entries(codeToStatusMap).reduce(
  // reverse the key-value pairs
  (acc, [key, value]) => ({ ...acc, [value]: key }),
  {}
);

function sanitizeParams(params) {
  return Object.fromEntries(
    Object.entries(params).map(([key, value]) => {
      if (typeof value === "string") {
        return [key, value.normalize().replace(/#/g, "%23").replace(/\?/g, "%3F")];
      }
      return [key, value];
    })
  );
}
function getParameter(part, params) {
  if (part.spread) {
    return params[part.content.slice(3)] || "";
  }
  if (part.dynamic) {
    if (!params[part.content]) {
      throw new TypeError(`Missing parameter: ${part.content}`);
    }
    return params[part.content];
  }
  return part.content.normalize().replace(/\?/g, "%3F").replace(/#/g, "%23").replace(/%5B/g, "[").replace(/%5D/g, "]");
}
function getSegment(segment, params) {
  const segmentPath = segment.map((part) => getParameter(part, params)).join("");
  return segmentPath ? "/" + segmentPath : "";
}
function getRouteGenerator(segments, addTrailingSlash) {
  return (params) => {
    const sanitizedParams = sanitizeParams(params);
    let trailing = "";
    if (addTrailingSlash === "always" && segments.length) {
      trailing = "/";
    }
    const path = segments.map((segment) => getSegment(segment, sanitizedParams)).join("") + trailing;
    return path || "/";
  };
}

function deserializeRouteData(rawRouteData) {
  return {
    route: rawRouteData.route,
    type: rawRouteData.type,
    pattern: new RegExp(rawRouteData.pattern),
    params: rawRouteData.params,
    component: rawRouteData.component,
    generate: getRouteGenerator(rawRouteData.segments, rawRouteData._meta.trailingSlash),
    pathname: rawRouteData.pathname || void 0,
    segments: rawRouteData.segments,
    prerender: rawRouteData.prerender,
    redirect: rawRouteData.redirect,
    redirectRoute: rawRouteData.redirectRoute ? deserializeRouteData(rawRouteData.redirectRoute) : void 0,
    fallbackRoutes: rawRouteData.fallbackRoutes.map((fallback) => {
      return deserializeRouteData(fallback);
    }),
    isIndex: rawRouteData.isIndex,
    origin: rawRouteData.origin
  };
}

function deserializeManifest(serializedManifest) {
  const routes = [];
  for (const serializedRoute of serializedManifest.routes) {
    routes.push({
      ...serializedRoute,
      routeData: deserializeRouteData(serializedRoute.routeData)
    });
    const route = serializedRoute;
    route.routeData = deserializeRouteData(serializedRoute.routeData);
  }
  const assets = new Set(serializedManifest.assets);
  const componentMetadata = new Map(serializedManifest.componentMetadata);
  const inlinedScripts = new Map(serializedManifest.inlinedScripts);
  const clientDirectives = new Map(serializedManifest.clientDirectives);
  const serverIslandNameMap = new Map(serializedManifest.serverIslandNameMap);
  const key = decodeKey(serializedManifest.key);
  return {
    // in case user middleware exists, this no-op middleware will be reassigned (see plugin-ssr.ts)
    middleware() {
      return { onRequest: NOOP_MIDDLEWARE_FN };
    },
    ...serializedManifest,
    assets,
    componentMetadata,
    inlinedScripts,
    clientDirectives,
    routes,
    serverIslandNameMap,
    key
  };
}

const manifest = deserializeManifest({"hrefRoot":"file:///C:/Users/Administrator/Documents/BLACKBOX%20AI/Adsterra%20Pool/Movie/","cacheDir":"file:///C:/Users/Administrator/Documents/BLACKBOX%20AI/Adsterra%20Pool/Movie/node_modules/.astro/","outDir":"file:///C:/Users/Administrator/Documents/BLACKBOX%20AI/Adsterra%20Pool/Movie/dist/","srcDir":"file:///C:/Users/Administrator/Documents/BLACKBOX%20AI/Adsterra%20Pool/Movie/src/","publicDir":"file:///C:/Users/Administrator/Documents/BLACKBOX%20AI/Adsterra%20Pool/Movie/public/","buildClientDir":"file:///C:/Users/Administrator/Documents/BLACKBOX%20AI/Adsterra%20Pool/Movie/dist/client/","buildServerDir":"file:///C:/Users/Administrator/Documents/BLACKBOX%20AI/Adsterra%20Pool/Movie/dist/server/","adapterName":"","routes":[{"file":"file:///C:/Users/Administrator/Documents/BLACKBOX%20AI/Adsterra%20Pool/Movie/dist/popular/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/popular","isIndex":false,"type":"page","pattern":"^\\/popular\\/?$","segments":[[{"content":"popular","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/popular.astro","pathname":"/popular","prerender":true,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"file:///C:/Users/Administrator/Documents/BLACKBOX%20AI/Adsterra%20Pool/Movie/dist/search/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/search","isIndex":false,"type":"page","pattern":"^\\/search\\/?$","segments":[[{"content":"search","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/search.astro","pathname":"/search","prerender":true,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"file:///C:/Users/Administrator/Documents/BLACKBOX%20AI/Adsterra%20Pool/Movie/dist/top-rated/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/top-rated","isIndex":false,"type":"page","pattern":"^\\/top-rated\\/?$","segments":[[{"content":"top-rated","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/top-rated.astro","pathname":"/top-rated","prerender":true,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"file:///C:/Users/Administrator/Documents/BLACKBOX%20AI/Adsterra%20Pool/Movie/dist/upcoming/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/upcoming","isIndex":false,"type":"page","pattern":"^\\/upcoming\\/?$","segments":[[{"content":"upcoming","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/upcoming.astro","pathname":"/upcoming","prerender":true,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"file:///C:/Users/Administrator/Documents/BLACKBOX%20AI/Adsterra%20Pool/Movie/dist/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/","isIndex":true,"type":"page","pattern":"^\\/$","segments":[],"params":[],"component":"src/pages/index.astro","pathname":"/","prerender":true,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}}],"base":"/","trailingSlash":"ignore","compressHTML":true,"componentMetadata":[["C:/Users/Administrator/Documents/BLACKBOX AI/Adsterra Pool/Movie/src/pages/index.astro",{"propagation":"none","containsHead":true}],["C:/Users/Administrator/Documents/BLACKBOX AI/Adsterra Pool/Movie/src/pages/movie/[id].astro",{"propagation":"none","containsHead":true}],["C:/Users/Administrator/Documents/BLACKBOX AI/Adsterra Pool/Movie/src/pages/popular.astro",{"propagation":"none","containsHead":true}],["C:/Users/Administrator/Documents/BLACKBOX AI/Adsterra Pool/Movie/src/pages/search.astro",{"propagation":"none","containsHead":true}],["C:/Users/Administrator/Documents/BLACKBOX AI/Adsterra Pool/Movie/src/pages/top-rated.astro",{"propagation":"none","containsHead":true}],["C:/Users/Administrator/Documents/BLACKBOX AI/Adsterra Pool/Movie/src/pages/upcoming.astro",{"propagation":"none","containsHead":true}]],"renderers":[],"clientDirectives":[["idle","(()=>{var l=(n,t)=>{let i=async()=>{await(await n())()},e=typeof t.value==\"object\"?t.value:void 0,s={timeout:e==null?void 0:e.timeout};\"requestIdleCallback\"in window?window.requestIdleCallback(i,s):setTimeout(i,s.timeout||200)};(self.Astro||(self.Astro={})).idle=l;window.dispatchEvent(new Event(\"astro:idle\"));})();"],["load","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).load=e;window.dispatchEvent(new Event(\"astro:load\"));})();"],["media","(()=>{var n=(a,t)=>{let i=async()=>{await(await a())()};if(t.value){let e=matchMedia(t.value);e.matches?i():e.addEventListener(\"change\",i,{once:!0})}};(self.Astro||(self.Astro={})).media=n;window.dispatchEvent(new Event(\"astro:media\"));})();"],["only","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).only=e;window.dispatchEvent(new Event(\"astro:only\"));})();"],["visible","(()=>{var a=(s,i,o)=>{let r=async()=>{await(await s())()},t=typeof i.value==\"object\"?i.value:void 0,c={rootMargin:t==null?void 0:t.rootMargin},n=new IntersectionObserver(e=>{for(let l of e)if(l.isIntersecting){n.disconnect(),r();break}},c);for(let e of o.children)n.observe(e)};(self.Astro||(self.Astro={})).visible=a;window.dispatchEvent(new Event(\"astro:visible\"));})();"]],"entryModules":{"\u0000noop-middleware":"_noop-middleware.mjs","\u0000noop-actions":"_noop-actions.mjs","\u0000@astro-page:src/pages/movie/[id]@_@astro":"pages/movie/_id_.astro.mjs","\u0000@astro-page:src/pages/popular@_@astro":"pages/popular.astro.mjs","\u0000@astro-page:src/pages/search@_@astro":"pages/search.astro.mjs","\u0000@astro-page:src/pages/top-rated@_@astro":"pages/top-rated.astro.mjs","\u0000@astro-page:src/pages/upcoming@_@astro":"pages/upcoming.astro.mjs","\u0000@astro-page:src/pages/index@_@astro":"pages/index.astro.mjs","\u0000@astro-renderers":"renderers.mjs","\u0000@astrojs-manifest":"manifest_U6PyJ6_M.mjs","C:/Users/Administrator/Documents/BLACKBOX AI/Adsterra Pool/Movie/src/pages/movie/[id].astro?astro&type=script&index=0&lang.ts":"_astro/_id_.astro_astro_type_script_index_0_lang.BJJDj4iA.js","C:/Users/Administrator/Documents/BLACKBOX AI/Adsterra Pool/Movie/src/components/Header.astro?astro&type=script&index=0&lang.ts":"_astro/Header.astro_astro_type_script_index_0_lang.BzcJXfT6.js","C:/Users/Administrator/Documents/BLACKBOX AI/Adsterra Pool/Movie/src/components/SearchBar.astro?astro&type=script&index=0&lang.ts":"_astro/SearchBar.astro_astro_type_script_index_0_lang.BeQ2IR-J.js","astro:scripts/before-hydration.js":""},"inlinedScripts":[["C:/Users/Administrator/Documents/BLACKBOX AI/Adsterra Pool/Movie/src/pages/movie/[id].astro?astro&type=script&index=0&lang.ts","function d(){const e=document.getElementById(\"trailer-modal\"),t=document.getElementById(\"trailer-iframe\");e&&t&&(t.src=\"\",e.classList.add(\"hidden\"),e.classList.remove(\"flex\"),document.body.style.overflow=\"auto\")}document.getElementById(\"trailer-modal\")?.addEventListener(\"click\",e=>{e.target===e.currentTarget&&d()});document.addEventListener(\"keydown\",e=>{e.key===\"Escape\"&&d()});"],["C:/Users/Administrator/Documents/BLACKBOX AI/Adsterra Pool/Movie/src/components/Header.astro?astro&type=script&index=0&lang.ts","const e=document.getElementById(\"mobile-menu-btn\"),n=document.getElementById(\"mobile-menu\");e&&n&&e.addEventListener(\"click\",()=>{n.classList.toggle(\"hidden\")});"],["C:/Users/Administrator/Documents/BLACKBOX AI/Adsterra Pool/Movie/src/components/SearchBar.astro?astro&type=script&index=0&lang.ts","let o;const c=document.querySelector('input[name=\"q\"]'),t=document.getElementById(\"search-suggestions\");c&&t&&(c.addEventListener(\"input\",s=>{const e=s.target.value.trim();if(clearTimeout(o),e.length<2){t.classList.add(\"hidden\");return}o=setTimeout(async()=>{try{const r=await(await fetch(`/api/search-suggestions?q=${encodeURIComponent(e)}`)).json();r.results&&r.results.length>0?i(r.results.slice(0,5)):t.classList.add(\"hidden\")}catch(n){console.error(\"Search error:\",n),t.classList.add(\"hidden\")}},300)}),document.addEventListener(\"click\",s=>{const a=s.target;!c.contains(a)&&!t.contains(a)&&t.classList.add(\"hidden\")}));function i(s){if(!t)return;const a=s.map(e=>{const n=e.poster_path?`https://image.tmdb.org/t/p/w92${e.poster_path}`:\"/placeholder-movie.jpg\",r=e.release_date?new Date(e.release_date).getFullYear():\"Unknown\",l=e.vote_average?e.vote_average.toFixed(1):\"N/A\";return`<a href=\"/movie/${e.id}\" class=\"flex items-center p-3 hover:bg-dark-700 transition-colors border-b border-dark-700 last:border-b-0\">\n        <img \n          src=\"${n}\" \n          alt=\"${e.title}\"\n          class=\"w-12 h-18 object-cover rounded mr-3\"\n          loading=\"lazy\"\n        />\n        <div class=\"flex-1\">\n          <h4 class=\"text-white font-medium text-sm\">${e.title}</h4>\n          <p class=\"text-gray-400 text-xs\">${r}</p>\n          <div class=\"flex items-center mt-1\">\n            <svg class=\"w-3 h-3 text-yellow-400 mr-1\" fill=\"currentColor\" viewBox=\"0 0 20 20\">\n              <path d=\"M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z\"></path>\n            </svg>\n            <span class=\"text-gray-400 text-xs\">${l}</span>\n          </div>\n        </div>\n      </a>`}).join(\"\");t.innerHTML=a,t.classList.remove(\"hidden\")}"]],"assets":["/file:///C:/Users/Administrator/Documents/BLACKBOX%20AI/Adsterra%20Pool/Movie/dist/popular/index.html","/file:///C:/Users/Administrator/Documents/BLACKBOX%20AI/Adsterra%20Pool/Movie/dist/search/index.html","/file:///C:/Users/Administrator/Documents/BLACKBOX%20AI/Adsterra%20Pool/Movie/dist/top-rated/index.html","/file:///C:/Users/Administrator/Documents/BLACKBOX%20AI/Adsterra%20Pool/Movie/dist/upcoming/index.html","/file:///C:/Users/Administrator/Documents/BLACKBOX%20AI/Adsterra%20Pool/Movie/dist/index.html"],"buildFormat":"directory","checkOrigin":false,"serverIslandNameMap":[],"key":"igsderdRZ9OHCe4wpRP25IZNUsaTOmZdJFw80UnmMY0="});
if (manifest.sessionConfig) manifest.sessionConfig.driverModule = null;

export { manifest };
