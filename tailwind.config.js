/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        ubuntu: ["var(--font-geist-ubuntu)", "sans-serif"],
        sourceCode: ["var(--font-geist-sourceCode)", "sans-serif"],
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        title: "var(--title)",
        card: "var(--card)",
        primaryColor: "var(--primaryColor)",
      },
    },
  },
  plugins: [require("daisyui")],
};
