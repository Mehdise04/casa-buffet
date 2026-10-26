import { defineConfig, build } from 'vite'
import react from '@vitejs/plugin-react'
import { prerender } from './scripts/prerender.js'

// After the browser build, build the server entry and write one HTML page per
// route (dist/index.html, dist/fiancailles.html, …) plus sitemap.xml and
// robots.txt. Lives here so it runs on any `vite build`, whatever the host's
// build command is.
function prerenderPages() {
  let ssrBuild = false
  return {
    name: 'casabuffet-prerender',
    apply: 'build',
    configResolved(config) {
      ssrBuild = Boolean(config.build.ssr)
    },
    async closeBundle() {
      if (ssrBuild) return
      await build({
        logLevel: 'warn',
        build: { ssr: 'src/entry-server.jsx', outDir: 'dist-ssr', emptyOutDir: true },
      })
      const routes = await prerender()
      console.log(`prerendered ${routes.length} pages: ${routes.join(' ')}`)
    },
  }
}

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), prerenderPages()],
  server: {
    proxy: {
      '/api': 'http://localhost:3001',
    },
  },
})
