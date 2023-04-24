/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './*.html',
  ],
  theme: {
    extend: {
      fontFamily: {
        'grotesk': ['"Hanken Grotesk"', 'sans-serif'],
      },
      colors: {
        lightRed: 'hsl(0, 100%, 67%)',
        orangeyYellow: 'hsl(39, 100%, 56%)',
        greenTeal: 'hsl(166, 100%, 37%)',
        cobaltBlue: 'hsl(234, 85%, 45%)',
        darkGrayBlue: 'hsl(224, 30%, 27%)',
        paleBlue: 'hsl(246, 100%, 73%)',
        lightLavender: 'hsl(241, 100%, 89%)'
      }
    },
  },
  plugins: [],
}

