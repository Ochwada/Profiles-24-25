import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  safelist: [
    'hidden', 'md:flex', 'md:hidden', 'space-x-6', 'mx-auto', 'text-lg', 'font-semibold',
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",

        mydarkpurple: "#433878",
        mypurple: "#7E60BF",
        mypink: "#E4B1F0",
        mylightpink: "#FFE1FF",

        dark_bg: "#00000f",
        light_bg: "#ffffff",

      },
      fontFamily: {
        grotesk: ['Space Grotesk'],
        mono: ['Space Mono', 'monospace'],
      },
    },
  },
  plugins: [],
} satisfies Config;
