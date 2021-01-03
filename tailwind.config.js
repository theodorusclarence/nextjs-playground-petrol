module.exports = {
    purge: ['./pages/**/*.{js,jsx,ts,tsx}', './components/**/*.{js,jsx,ts,tsx}'],
    darkMode: false, // or 'media' or 'class'
    theme: {
        extend: {
            colors: {
                primary: '#FF6363',
                secondary: {
                    100: '#E2E2D5',
                    200: '#888883',
                },
            },
            fontFamily: {
                body: ['Nunito', 'sans-serif'],
            },
        },
    },
    variants: {
        extend: {},
    },
    plugins: [],
};
