import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  server : {
    allowedHosts:["ide-dafeedcabf50995bdabcfbcaecceone.ide.exam.ly"]
  },
  plugins: [react()],
})
