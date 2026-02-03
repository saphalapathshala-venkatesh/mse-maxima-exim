import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'navy-primary': '#0B1F3B',
        'navy-alt': '#102A4C',
        'navy-slate': '#0F2847',
        'panel-slate': '#162D4A',
        'gold-accent': '#D6A84A',
        'off-white': '#F5F1E8',
        'warm-ivory': '#F7F3EA',
        'warm-cream': '#FBF9F4',
        'muted-text': '#C7D2E1',
        'accent-green': '#2E7D32',
        'card-surface': 'rgba(255,255,255,0.07)',
        'card-border': 'rgba(255,255,255,0.12)',
        'slate-glass': 'rgba(255,255,255,0.07)',
        'slate-border': 'rgba(255,255,255,0.12)',
      },
      fontFamily: {
        'playfair': ['var(--font-playfair)', 'serif'],
        'inter': ['var(--font-inter)', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
export default config
