export default {
	darkMode: 'class', // ✅ IMPORTANT
	content: [
		"./index.html",
		"./src/**/*.{js,ts,jsx,tsx}",
	],
	theme: {
		extend: {
			fontFamily: {
				mono: ['Inconsolata', 'monospace'],
			},
			fontWeight: {
				black: '900',
			},
		},
	},
	plugins: [],
}
