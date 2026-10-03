import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    container: {
      center: true,
      padding: "1.5rem",
      screens: { "2xl": "1120px" },
    },
    extend: {
      colors: {
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        card: "hsl(var(--card))",
        border: "hsl(var(--border))",
        muted: "hsl(var(--muted))",
        amber: {
          DEFAULT: "hsl(var(--amber))",
          deep: "hsl(var(--amber-deep))",
        },
        navy: "hsl(var(--navy))",
        ink: "hsl(var(--ink))",
        paper: "hsl(var(--paper))",
      },
      fontFamily: {
        serif: [
          "var(--font-serif-latin)",
          "var(--font-serif)",
          "Georgia",
          "serif",
        ],
        sans: [
          "var(--font-sans)",
          "var(--font-sans-cn)",
          "system-ui",
          "sans-serif",
        ],
      },
    },
  },
  plugins: [],
};

export default config;
