module.exports = {
  purge: [
    './public/**/*.html',
    './{app,pages}/**/*.{js,jsx,ts,tsx,vue}',
  ],
  variants: {
    extend: {
      transitionProperty: ['hover', 'focus', 'dark'],
      transitionDuration: ['hover', 'focus', 'dark'],
      transitionTimingFunction: ['hover', 'focus', 'dark'],
      ringWidth: ['dark'],
    },
  },
  darkMode: 'class',
};
