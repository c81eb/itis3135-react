import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// Moves the Lint.Page (Accumulus) script to the end of <head> after Vite injects its own tags
const lintPageLast = () => ({
  name: 'lint-page-last',
  transformIndexHtml: {
    order: 'post',
    handler(html) {
      const re = /[ \t]*<script[^>]*lint\.page[^>]*><\/script>[ \t]*\n?/i
      const match = html.match(re)
      if (!match) return html
      return html
        .replace(match[0], '')
        .replace('</head>', '  ' + match[0].trim() + '\n</head>')
    },
  },
})

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), lintPageLast()],
  build: {
    cssCodeSplit: false,
    rollupOptions: {
      output: {
        entryFileNames: 'scripts/[name]-[hash].js',
        chunkFileNames: 'scripts/[name]-[hash].js',
        assetFileNames: (assetInfo) => {
          const name = assetInfo.names?.[0] ?? assetInfo.name ?? ''
          if (name.endsWith('.css')) return 'styles/default.css'
          return 'assets/[name]-[hash][extname]'
        },
      },
    },
  },
})