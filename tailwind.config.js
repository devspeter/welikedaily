// See default config https://github.com/tailwindcss/tailwindcss/blob/master/stubs/defaultConfig.stub.js
const defaultTheme = require("tailwindcss/defaultTheme")

module.exports = {
	theme: {
		container: {
			center: true,
			padding: {
				DEFAULT: "1rem",
				sm: "2rem",
				lg: "4rem",
				xl: "5rem",
				"2xl": "6rem"
			}
		},
		screens: {
			sm: { min: "576px" },
			md: { min: "768px" },
			lg: { min: "1024px" },
			xl: { min: "1280px" },
			"2xl": { min: "1400px" },
			"3xl": { min: "1680px" }
		},
		fontSize: {
			xs: ".75rem",
			sm: ".875rem",
			base: "1rem",
			lg: "1.125rem",
			xl: "1.25rem",
			"2xl": "1.5rem",
			"3xl": "1.875rem",
			"4xl": "2.55rem",
			"5xl": "3rem",
			"6xl": "4rem",
			"7xl": "5rem",
			"8xl": "6rem",
			"9xl": "7rem",
			"10xl": "8rem",
			"11xl": "9rem",
			"12xl": "10rem"
		},
		fontFamily: {
			poppins: ["Poppins, sans-serif", ...defaultTheme.fontFamily.sans],
			inter: ["Inter, sans-serif", ...defaultTheme.fontFamily.sans]
		},
		fontWeight: {
			normal: 400,
			semibold: 600,
			bold: 700,
			extrabold: 800
		},
		extend: {
			colors: {
				black: "#231A36",
				orange: "#FBC6A4",
				purple: "#A685E2",
				red: "#FF7171",
				blue: "#9FD8DF",
				bgblue: "#F6F9FC",
				neutral: {
					dark: "#131313",
					default: "#B2B7BE",
					light: "#425466",
					yellow: "#FFCF5A",
					purple: "#A685E2",
					pink: "#FF7171"
				}
			},
			margin: {
				"96": "24rem",
				"128": "32rem"
			}
		}
	},
	variants: {
		backgroundColor: ["responsive", "hover", "focus", "checked"]
	},
	purge: {
		enabled: process.env.NODE_ENV === "production",
		content: ["components/**/*.vue", "layouts/**/*.vue", "pages/**/*.vue", "plugins/**/*.js", "nuxt.config.js"]
	}
}
