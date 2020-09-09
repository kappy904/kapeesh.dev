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
			purple: '#7D74BE',
			green: '#008521',
			blue: '#15009E',
		},
      fontFamily: {
        default: ['Merriweather Sans']
      }
    },
  },
  variants: {},
  plugins: [],
}
