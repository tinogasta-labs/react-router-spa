import { reactRouter } from '@react-router/dev/vite'
import tailwindcss from '@tailwindcss/vite'
import { defineConfig } from 'vite'
import tsconfigPaths from 'vite-tsconfig-paths'

export default defineConfig({
  server: {
    port: Number(process.env.PORT || 3000),
  },
  build: {
    cssMinify: true,
    assetsInlineLimit: (source: string) => {
      if (
        source.endsWith('sprite.svg') ||
        source.endsWith('apple-touch-icon.png')
      ) {
        return false
      }
    },
  },
  plugins: [tailwindcss(), reactRouter(), tsconfigPaths()],
})
