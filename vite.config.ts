/*
 * @Author: nbn
 * @Date: 2023-07-24 22:00:22
 * @LastEditors: nbn
 * @LastEditTime: 2023-07-24 23:46:28
 * @FilePath: /test-composition-react/vite.config.ts
 * @Description: 
 */
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
})
