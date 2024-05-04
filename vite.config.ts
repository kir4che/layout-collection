import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from 'tailwindcss'
import tsconfigPaths from 'vite-tsconfig-paths'
import svgr from 'vite-plugin-svgr'

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [react(), tsconfigPaths(), svgr()],
	css: {
		modules: {
			// 使 css module 的類名只能使用駝峰命名法
			localsConvention: 'camelCaseOnly'
		},
		postcss: {
			plugins: [tailwindcss()]
		}
	}
})
