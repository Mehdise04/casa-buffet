import { StrictMode } from 'react'
import { createRoot, hydrateRoot } from 'react-dom/client'
import './index.css'
import './casa.css'
import App from './App.jsx'
import { normalizePath } from './seo'

const root = document.getElementById('root')
const app = (
  <StrictMode>
    <App path={normalizePath(window.location.pathname)} />
  </StrictMode>
)

// Built pages arrive prerendered (see scripts/prerender.js): attach to that
// HTML. The dev server sends an empty root, so render from scratch there.
if (root.hasChildNodes()) hydrateRoot(root, app)
else createRoot(root).render(app)
