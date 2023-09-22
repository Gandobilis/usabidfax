/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./index.html",
        "./src/**/*.{vue,js,ts,jsx,tsx}",
    ],
    theme: {
        container: {
            screens: {
                sm: "640px",
                md: "768px",
                lg: "1024px",
                xl: "1280px",
                '2xl': '1536px',
            },
            padding: {
                DEFAULT: '1rem',
                sm: '2rem',
                md: '2.5rem',
                lg: '3rem',
                xl: '4rem',
                '2xl': '5rem',
            },
        },
        extend: {},
    },
    plugins: [],
}

