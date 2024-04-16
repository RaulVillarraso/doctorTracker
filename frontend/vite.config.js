import { defineConfig } from './node_modules/vite'
import vue from './node_modules/@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
})
