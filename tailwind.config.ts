import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        black: "#0E0E0E",
        red: "#E31837",
        lightGray: "#F5F5F7",
        darkGray: "#FBFBFD",
      },
    },
  },
  plugins: [],
} satisfies Config;
