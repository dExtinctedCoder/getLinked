/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			screens: {
				lg: "1190px",
				// => media (min-width: 1190px) { ... }
			},
		},
	},
	plugins: [],
};
