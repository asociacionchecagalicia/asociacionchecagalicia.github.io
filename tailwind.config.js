/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{vue,js}'
  ],
  safelist: [
    'text-coral',
    'decoration-coral',
    'underline',
    'underline-offset-4',
    'font-semibold'
  ],
  theme: {
    extend: {
      colors: {
        navy: '#001F3F',
        coral: '#E5534B',
        sky: '#5FA8D3',
        offwhite: '#F9F9F9',
        white: '#FFFFFF',
        'border-soft': 'rgba(0, 31, 63, 0.1)',
        success: '#2E7D32',
        warning: '#ED6C02',
        error: '#C62828'
      },
      spacing: {
        'space-1': '8px',
        'space-2': '16px',
        'space-3': '24px',
        'space-4': '32px',
        'space-5': '48px',
        'space-6': '72px'
      },
      fontFamily: {
        heading: ['Montserrat', 'sans-serif'],
        body: ['Open Sans', 'sans-serif']
      },
      maxWidth: {
        site: '1200px',
        content: '1100px'
      }
    }
  },
  plugins: [
    require('@tailwindcss/typography')
  ]
}
