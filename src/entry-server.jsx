// Server entry used only at build time to prerender each page to HTML.
/* eslint-disable react-refresh/only-export-components -- never hot-reloaded */
import { StrictMode } from 'react'
import { renderToString } from 'react-dom/server'
import App from './App.jsx'

export function render(path) {
  return renderToString(
    <StrictMode>
      <App path={path} />
    </StrictMode>,
  )
}

export { ROUTES, routeHead, sitemapXml, robotsTxt } from './seo'
