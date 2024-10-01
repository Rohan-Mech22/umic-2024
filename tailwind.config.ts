import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      rotate: {
        'y-180': '180deg', // Add X-axis rotation
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
            'blue-900': '#1e3a8a', // Dark Blue Shade
            'blue-700': '#2563eb',
      },
    },
  },
  plugins: [],
};
export default config;
