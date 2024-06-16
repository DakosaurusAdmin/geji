import type { Config } from "tailwindcss";
import daisyui from 'daisyui'

const colors = require('tailwindcss/colors');

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: colors.gray

      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  daisyui: {
    themes: [
      {
        geji_theme: {
          "primary": "#065f46",
          "primary-content": "#cfddd7",
          "secondary": "#a16207",
          "secondary-content": "#f3f4f6",
          "accent": "#881337",
          "accent-content": "#d1d5db",
          "neutral": "#e5e7eb",
          "neutral-content": "#1f2937",
          "base-100": "#f3f4f6",
          "base-200": "#e5e7eb",
          "base-300": "#d1d5db",
          "base-content": "#1f2937",
          "info": "#3b82f6",
          "info-content": "#f3f4f6",
          "success": "#84cc16",
          "success-content": "#060f00",
          "warning": "#ff9000",
          "warning-content": "#160700",
          "error": "#e10046",
          "error-content": "#fae8ff",
        },
      },
    ],
  },
  plugins: [daisyui]


};
export default config;
