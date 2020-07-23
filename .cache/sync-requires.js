const { hot } = require("react-hot-loader/root")

// prefer default export if available
const preferDefault = m => m && m.default || m


exports.components = {
  "component---cache-dev-404-page-js": hot(preferDefault(require("/home/lfrutig/Documents/site_lucas/frontend/.cache/dev-404-page.js"))),
  "component---src-pages-404-js": hot(preferDefault(require("/home/lfrutig/Documents/site_lucas/frontend/src/pages/404.js"))),
  "component---src-pages-blog-js": hot(preferDefault(require("/home/lfrutig/Documents/site_lucas/frontend/src/pages/blog.js"))),
  "component---src-pages-contato-js": hot(preferDefault(require("/home/lfrutig/Documents/site_lucas/frontend/src/pages/contato.js"))),
  "component---src-pages-index-js": hot(preferDefault(require("/home/lfrutig/Documents/site_lucas/frontend/src/pages/index.js"))),
  "component---src-pages-projetos-js": hot(preferDefault(require("/home/lfrutig/Documents/site_lucas/frontend/src/pages/projetos.js"))),
  "component---src-pages-sobre-js": hot(preferDefault(require("/home/lfrutig/Documents/site_lucas/frontend/src/pages/sobre.js")))
}

