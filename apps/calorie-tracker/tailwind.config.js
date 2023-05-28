const { join } = require('path')

const { createGlobPatternsForDependencies } = require('@nx/react/tailwind')

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    join(
      __dirname,
      '{src,pages,components,app}/**/*!(*.stories|*.spec).{ts,tsx,html}'
    ),
    ...createGlobPatternsForDependencies(__dirname),
  ],
  theme: {
    fontFamily: {
      maven: 'Maven Pro, sans-serif',
    },
    extend: {},
  },
  plugins: [require('@tailwindcss/forms')],
}
