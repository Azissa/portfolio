/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "slate-blue": "#4A5568",
        "charcoal-dusty-rose": "#725B61",
        "forest-sage": "#5B665B",
        "deep-lavender-gray": "#564E68",
        "dark-muted-teal": "#3E606F",
        "dark-warm-taupe": "#6E4B3A",
        "deep-smoky-purple": "#4C444D",
        "stormy-blue": "#576E75",
        "dark-teal-blue": "#294C60",
        "dusty-blue": "#4B6073",
        "biru-tua-bet": "#120b2e",
        "untuk-label": "#d4d6ff",
        "untuk-label-hover": "#a9aeff",
      },
      boxShadow: {
        "custom-light": "0 4px 6px rgba(255, 255, 255, 0.4)",
        "custom-dark": "0 4px 6px rgba(0, 0, 0, 0.4)",
      },
    },
  },
  plugins: [],
};
