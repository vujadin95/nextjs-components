import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        textColor: "hsl(var(--text-color))",
        textHover: "hsl(var(--text-hover))",
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },

        background: {
          DEFAULT: "hsl(var(--background))",
        },
        hoverBackground: "hsl(var(--text-color) / 0.1)",
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },

        border: "hsl(var(--border))",
      },
      screens: {
        phone: "360px",
      },
      keyframes: {
        "slide-left": {
          to: { transform: "translateX(calc(-100% - 20px))" },
        },
      },
      animation: {
        "slide-left": "slide-left 40s linear infinite",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
export default config;
