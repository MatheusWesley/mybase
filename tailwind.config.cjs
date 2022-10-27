/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.tsx',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: 'Inter, Sans-serif'
      },
      typography: ({ theme }) => ({
        slate: {
          css: {
            '--tw-prose-body': theme('colors.slate[800]'),
            '--tw-prose-headings': theme('colors.slate[400]'),
            '--tw-prose-lead': theme('colors.slate[700]'),
            '--tw-prose-links': theme('colors.slate[900]'),
            '--tw-prose-bold': theme('colors.slate[100]'),
            '--tw-prose-counters': theme('colors.slate[600]'),
            '--tw-prose-bullets': theme('colors.slate[400]'),
            '--tw-prose-hr': theme('colors.slate[300]'),
            '--tw-prose-quotes': theme('colors.slate[900]'),
            '--tw-prose-quote-borders': theme('colors.slate[300]'),
            '--tw-prose-captions': theme('colors.slate[700]'),
            '--tw-prose-code': theme('colors.slate[900]'),
            '--tw-prose-pre-code': theme('colors.slate[100]'),
            '--tw-prose-pre-bg': theme('colors.slate[900]'),
            '--tw-prose-th-borders': theme('colors.slate[300]'),
            '--tw-prose-td-borders': theme('colors.slate[200]'),
            '--tw-prose-invert-body': theme('colors.slate[200]'),
            '--tw-prose-invert-headings': theme('colors.white'),
            '--tw-prose-invert-lead': theme('colors.slate[300]'),
            '--tw-prose-invert-links': theme('colors.white'),
            '--tw-prose-invert-bold': theme('colors.white'),
            '--tw-prose-invert-counters': theme('colors.slate[400]'),
            '--tw-prose-invert-bullets': theme('colors.slate[600]'),
            '--tw-prose-invert-hr': theme('colors.pink[700]'),
            '--tw-prose-invert-quotes': theme('colors.pink[100]'),
            '--tw-prose-invert-quote-borders': theme('colors.slate[700]'),
            '--tw-prose-invert-captions': theme('colors.slate[400]'),
            '--tw-prose-invert-code': theme('colors.white'),
            '--tw-prose-invert-pre-code': theme('colors.slate[300]'),
            '--tw-prose-invert-pre-bg': 'rgb(0 0 0 / 50%)',
            '--tw-prose-invert-th-borders': theme('colors.slate[600]'),
            '--tw-prose-invert-td-borders': theme('colors.slate[700]'),
          },
        },
      }),
    },
  },
  plugins: [
    //require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
    require('@tailwindcss/forms'),
  ],
}
