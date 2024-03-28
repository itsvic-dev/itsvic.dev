import type { Config } from "tailwindcss";

export default <Config>{
  content: ["*.vue", "**/*.vue"],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Inter"', "Helvetica", '"Segoe UI"', "Arial", "sans-serif"],
        display: [
          '"Inter Tight Variable"',
          '"Inter Variable"',
          "Helvetica",
          '"Segoe UI"',
          "Arial",
          "sans-serif",
        ],
      },
      colors: {},
    },
  },
};
