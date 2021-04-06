module.exports = {
  purge: [
    './public/**/*.html',
    './{app,pages}/**/*.{js,jsx,ts,tsx,vue}',
  ],
  variants: {
    extend: {
      transitionProperty: ['hover', 'group-hover', 'focus', 'dark'],
      transitionDuration: ['hover', 'group-hover', 'focus', 'dark'],
      transitionTimingFunction: ['hover', 'group-hover', 'focus', 'dark'],
      ringWidth: ['dark'],
    },
  },
  darkMode: 'class',
};
