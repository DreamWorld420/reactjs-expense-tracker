/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			fontFamily: {
				robotoMono: "'Roboto Mono', monospace",
				oswald: "'Oswald', sans-serif",
			},
		},
	},
	plugins: [],
};
