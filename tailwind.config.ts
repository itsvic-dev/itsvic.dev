import type { Config } from "tailwindcss";

export default <Config>{
  content: ["*.vue", "pages/**/*.vue", "components/**/*.vue"],
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
        mono: ['"JetBrains Mono Variable"', "monospace"],
      },
      colors: {
        bgs: {
          black: "black",
          heroShine: "hsl(239, 15%, 16%)",
          highlight: "hsl(0, 0%, 23%)",
        },
        mainText: "hsl(0, 0%, 25%)",
        headerText: "black",
        contrastText: "white",
        contrastSecondaryText: "hsl(0, 0%, 75%)",
      },
    },
  },
};
