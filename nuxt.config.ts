export default defineNuxtConfig({
	compatibilityDate: '2025-07-15',
	devtools: { enabled: true },
	css: ['~/assets/css/tailwind.css'],
	postcss: {
		plugins: {
			tailwindcss: {},
			autoprefixer: {},
		},
	},
	modules: ['@primevue/nuxt-module'],
	primevue: {
		importPT: { from: '@/passthrough/mycustompt.js' },
	},
})
