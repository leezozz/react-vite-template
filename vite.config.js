import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    //别名
    // alias: {
    //     "@": path.resolve(__dirname, "/src"),
    //     "comps": path.resolve(__dirname, "/src/components")
    // }
    alias: [
      {
        find: '@',
        replacement: path.resolve(__dirname, 'src')
      },
      {
        find: 'modules',
        replacement: path.resolve(__dirname, 'src/modules')
      },
      {
        find: 'comps',
        replacement: path.resolve(__dirname, 'src/components')
      }
    ]
  },

})
