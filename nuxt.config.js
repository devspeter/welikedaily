export default {
	// Target: https://go.nuxtjs.dev/config-target
	// target: "static",

	// Global page headers: https://go.nuxtjs.dev/config-head
	head: {
		title: "Welikedaily content share your work with other creatives and potential clients",
		htmlAttrs: {
			lang: "en"
		},
		meta: [{ charset: "utf-8" }, { name: "viewport", content: "width=device-width, initial-scale=1" }, { hid: "description", name: "description", content: "" }, { name: "format-detection", content: "telephone=no" }],
		link: [
			{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
			{ src: "https://cdn.polyfill.io/v2/polyfill.js?features=fetch" },
			{
				rel: "stylesheet",
				href: "https://fonts.googleapis.com/css2?family=Inter&family=Poppins:wght@600;700&display=swap"
			}
		],
		script: []
	},

	// Global CSS: https://go.nuxtjs.dev/config-css
	css: ["~/assets/css/tailwind.css", "swiper/swiper-bundle.min.css"],

	// Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
	plugins: [{ src: "@/plugins/swiper.js", ssr: false }],

	// Auto import components: https://go.nuxtjs.dev/config-components
	components: ["~/components/Ui", "~/components/Home"],

	// Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
	buildModules: [
		// https://go.nuxtjs.dev/tailwindcss
		"postcss-import",
		"@nuxtjs/tailwindcss",
		"postcss-nested",
		"nuxt-vite"
	],

	tailwindcss: {
		cssPath: "~/assets/css/tailwind.css",
		configPath: "tailwind.config.js",
		exposeConfig: false,
		config: {}
	},

	sitemap: {
		hostname: "https://welikedaily.com",
		gzip: true,
		defaults: {
			changefreq: "weakly",
			priority: 0.5,
			lastmod: new Date(),
			lastmodrealtime: true
		},
		exclude: ["/*/Page"],
		routes: [
			{
				url: "/",
				priority: 1
			}
		]
	},

	// Modules: https://go.nuxtjs.dev/config-modules
	modules: ["@nuxtjs/sitemap", "@nuxtjs/robots", ["vue-scrollto/nuxt", { duration: 900 }]],

	robots: {
		UserAgent: "*",
		Disallow: "/"
	},

	// Build Configuration: https://go.nuxtjs.dev/config-build
	build: {
		postcss: {
			plugins: {
				"postcss-nested": {},
				"postcss-import": {}
			}
		},
		generate: {
			fallback: "404.html"
		}
	}
}
