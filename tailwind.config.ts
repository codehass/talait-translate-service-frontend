import type { Config } from "tailwindcss";

export default {
	content: [
		"./src/**/*.{js,ts,jsx,tsx,mdx}",
		"./app/**/*.{js,ts,jsx,tsx,mdx}",
		"./components/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		extend: {
			fontFamily: {
				sans: ["var(--font-sans)", "sans-serif"],
				display: ["var(--font-display)", "cursive"],
			},
			colors: {
				"kid-blue": "#60A5FA",
				"kid-yellow": "#FBBF24",
				"kid-red": "#F87171",
				"kid-green": "#34D399",
				"kid-cream": "#FFFBEB",
			},
		},
	},
} satisfies Config;
