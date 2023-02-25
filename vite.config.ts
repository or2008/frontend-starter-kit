import react from '@vitejs/plugin-react'
import svgr from "vite-plugin-svgr"; // transform svg to react component
import path from 'path'
import { defineConfig } from 'vite'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), svgr()], // { svgrOptions: { typescript: true, titleProp: true, jsxRuntime: 'automatic' } }
  resolve: {
    alias: { '@': path.resolve(__dirname, './src') }
  }
})
