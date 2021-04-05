module.exports = {
  purge: [
    './public/**/*.html',
    './{app,pages}/**/*.{js,jsx,ts,tsx,vue}',
  ],
  variants: {
    extend: {
      textColor: ['group-focus'],
    },
  },
};
