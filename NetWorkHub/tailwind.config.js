/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ["class"],
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      colors: {
        purpleMix: "g", // Mixed color (blend of purple & pink)
      },
    },
  },
  daisyui: {
    themes: ["dark", "cupcake", "autumn", "night"],
  },
  plugins: [require("daisyui"), require("tailwindcss-animate")],
};
