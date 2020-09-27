require('dotenv').config();
const enablePurge = process.env.ENABLE_PURGE || false;
module.exports = {
	future: {
		removeDeprecatedGapUtilities: true,
		purgeLayersByDefault: true,
	},
	purge: {
		enabled: enablePurge,
		content: [
			'./src/**/*.html',
			'./src/!**/!*.scss'
		]
	},
	theme: {
		extend: {
			colors: {
				purple: '#000000',
				green: '#898F9C',
				blue: '#4267B2',
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
