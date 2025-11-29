/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/**/*.{js,ts,jsx,tsx,mdx}", "./app/**/*.{js,ts,jsx,tsx,mdx}"],
	theme: {
		extend: {
			fontFamily: {
				sans: ["Nunito", "sans-serif"],
				display: ["Fredoka", "cursive"],
			},
		},
	},
	plugins: [],
};
