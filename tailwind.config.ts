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
        neonBlue: "var(--accent-blue)",
        neonPurple: "var(--accent-purple)",
        darkGlass: "var(--glass-bg)",
        glassBorder: "var(--glass-border)",
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'hero-glow': 'conic-gradient(from 180deg at 50% 50%, rgba(0, 209, 178, 0.2) 0deg, rgba(0, 243, 255, 0.2) 120deg, rgba(0, 102, 255, 0.2) 240deg, rgba(0, 209, 178, 0.2) 360deg)',
      },
    },
  },
  plugins: [],
};
export default config;
