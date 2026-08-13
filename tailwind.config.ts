import type { Config } from "tailwindcss";
const config: Config = {
  content: ["./app/**/*.{js,ts,jsx,tsx,mdx}", "./components/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          400: "#a78bfa",
          500: "#8b5cf6",
          600: "#7c3aed",
        },
        dark: {
          900: "#09090b",
          800: "#0f0f12",
          700: "#18181b",
        }
      }
    }
  },
  plugins: []
};
export default config;
