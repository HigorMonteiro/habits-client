/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.tsx',
    './index.html'
  ],
  theme: {
    extend: {
      colors: {
        background: '#EC6056',
        violetBold: '#3D235C',
        lightViolet: '#E3D1FA',
        shadow: '#D64A40',
        box: '#FEF2F2',
        dialog: '#3D235C',
        btn: '#3D235C',
        btn_border: '#E3D1FA'
      },
      gridTemplateRows: {
        7: 'repeat(7, minmax(0, 1fr))'
      }
    },
  },
  plugins: [],
}
