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
      fontFamily: {
        default: ['Jura']
      }
    },
  },
  variants: {},
  plugins: [],
}
