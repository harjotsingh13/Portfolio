import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--bg-primary)",
        foreground: "var(--text-primary)",
        neonBlue: "#00f3ff",
        neonPurple: "#bc13fe",
        darkGlass: "var(--glass-bg)",
        glassBorder: "var(--glass-border)",
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'hero-glow': 'conic-gradient(from 180deg at 50% 50%, #bc13fe33 0deg, #00f3ff33 180deg, #bc13fe33 360deg)',
      },
    },
  },
  plugins: [],
};
export default config;
