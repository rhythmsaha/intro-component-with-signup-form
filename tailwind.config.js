module.exports = {
    mode: "jit",
    purge: [
        "./pages/**/*.{js,ts,jsx,tsx}",
        "./components/**/*.{js,ts,jsx,tsx}",
    ],
    darkMode: false, // or 'media' or 'class'
    theme: {
        extend: {
            backgroundImage: {
                "bg-desktop": "url(/images/bg-intro-desktop.png)",
                "bg-mobile": "url(/images/bg-intro-mobile.png)",
            },

            fontFamily: {
                poppins: ["Poppins", "sans-serif"],
            },
        },
    },
    variants: {
        extend: {},
    },
    plugins: [],
};
