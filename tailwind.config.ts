import type { Config } from "tailwindcss"

const config = {
  darkMode: ["class"],
  mode: 'jit',
  content: [
    './src/**/*.{html,ts}',
    '../components/**/**/*.{html,ts}',
    '../app/**/*.{html,ts}',
    '../index.html'
  ],
  prefix: "",
  theme: {
    extend: {
      colors: {
        "yellow-lemonade": "#D7FF01",
        "intense-grey": "#101010",
        "intense-purple": "#990DCE",
        "white": "#D9D9D9",
        "grey-black": "#0C0C0C",
        "transparent-purple": "rgba(153,13,206,0.5)",
        "purple-dark": "#2D003E"
      },
      fontFamily: {
        label: ['Open Sans', 'serif'],
        subtitle: ['Raleway', 'serif'],
        text: ['Nunito', 'serif'],
        title: ['Rockwell Nova', 'serif'],
      },
      backgroundImage: {
        "card": "url('https://raw.githubusercontent.com/Soppinha/my-icons/8528df0a41a4c0e8fc0b6f3ada13475f95f385de/portifolio/images/bg-card.svg')",
      },
      keyframes: {
        "pik": {
          "50%": { opacity: "0" },
        },
      },
      animation: {
        "pikPoint": "pik .8s step-start infinite",
      },
      transitionTimingFunction: {
        'custom-bezier': 'cubic-bezier(.5,-0.35,.35,1.5)',
      },
    },
  },
  plugins: [],
} satisfies Config

export default config
