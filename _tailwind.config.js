require('dotenv').config();
const enablePurge = process.env.ENABLE_PURGE || false;
module.exports = {
	purge: {
		enabled: enablePurge,
		content: [
			'./src/**/*.html',
			'./src/**/*.scss'
		]
	},
	theme: {
		extend: {
			colors: {
				purple: '#5a1f9f',
				green: '#008521',
				blue: '#15009E',
			},
			fontFamily: {
				display: ['Merriweather Sans', 'sans-serif'],
				body: ['Petrona', 'sans-serif'],
			}
		},
	},
	variants: {},
	plugins: [],
}
