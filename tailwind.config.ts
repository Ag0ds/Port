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
        'minha-cor': '#ff0000',
        'minha-verde': '#008000',
        'whats': '#25D366',
        'disc': '#5865F2',
        'linkd': '#0A66C2',
        'github': '#008000',
      },
    },
  },
  plugins: [require("daisyui")],
} satisfies Config;
