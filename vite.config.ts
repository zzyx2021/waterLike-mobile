import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import usePluginImport from 'vite-plugin-importer'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    usePluginImport({
      libraryName: '@arco-design/mobile-react',
      libraryDirectory: 'esm',
      style: (path) => `${path}/style`,
    }),
    usePluginImport({
      libraryName: '@arco-design/mobile-react/esm/icon',
      libraryDirectory: '',
      camel2DashComponentName: false,
    }),
  ],
  resolve: {
    alias: [{ find: /^~/, replacement: '' }],
  },
  css: {
    preprocessorOptions: {
      less: {
        javascriptEnabled: true,
      },
    },
  },
})
