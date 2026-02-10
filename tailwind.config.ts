import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        cream: '#f5f1e8',
        dark: '#0a0a0a',
        mahogany: '#250902',
        'mahogany-2': '#38040e',
        'black-cherry': '#640d14',
        'dark-wine': '#800e13',
        'brown-red': '#ad2831',
        'sky-blue': '#8ecae6',
        'ocean-blue': '#219ebc',
        navy: '#023047',
        orange: '#ffb703',
        'bright-orange': '#fb8500',
      },
    },
  },
  plugins: [],
}

export default config
