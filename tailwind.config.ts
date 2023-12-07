/** @type {import('tailwindcss').Config} */
export default {
    theme: {
        extend: {
            fontFamily: {
                sans: ['"Inter"', 'Helvetica', '"Segoe UI"', 'Arial', 'sans-serif'],
                display: ['"Inter Tight Variable"', '"Inter Variable"', 'Helvetica', '"Segoe UI"', 'Arial', 'sans-serif'],
            },
            colors: {
                bgs: {
                    black: 'black',
                    heroShine: 'hsl(0, 0%, 16%)',
                },
                mainText: 'hsl(0, 0%, 25%)',
                headerText: 'black',
                contrastText: 'white',
                contrastSecondaryText: 'hsl(0, 0%, 75%)',
            },
        },
    },
};
