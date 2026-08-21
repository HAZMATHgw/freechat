import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  // 상대 경로로 빌드해 두면 Netlify Drop, Cloudflare, 서브 폴더 어디에 올려도 깨지지 않는다.
  base: '/freechat/',
  build: { outDir: 'dist' },
})
