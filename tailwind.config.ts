import type { Config } from "tailwindcss";

export default <Config>{
  content: [
    "./app.vue",
    "./components/**/*.vue",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: [
          '"Inter Variable"',
          "Helvetica",
          '"Segoe UI"',
          "Arial",
          "sans-serif",
        ],
        display: [
          '"Poppins"',
          '"Inter Variable"',
          "Helvetica",
          '"Segoe UI"',
          "Arial",
          "sans-serif",
        ],
        mono: ['"JetBrains Mono Variable"', "monospace"],
      },
      colors: {},
    },
  },
};
