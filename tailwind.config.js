/** @type {import('tailwindcss').Config} */
module.exports = {
    prefix: "tw-",
    content: [
        `./components/**/*.{vue,js,ts}`,
        `./layouts/**/*.vue`,
        `./pages/**/*.vue`,
        `./composables/**/*.{js,ts}`,
        `./plugins/**/*.{js,ts}`,
        `./utils/**/*.{js,ts}`,
        `./App.{js,ts,vue}`,
        `./app.{js,ts,vue}`,
        `./Error.{js,ts,vue}`,
        `./error.{js,ts,vue}`,
        `./app.config.{js,ts}`,
    ],
    theme: {
        extend: {
            fontFamily: {
                poppins: ["Poppins", "sans-serif"],
                sen: ["Sen", "sans-serif"],
            },
            colors: {
                primary: "#5465ff",
                black: "#343436",
                grey: {
                    100: "#F8FAFB",
                    200: "#ECEEEE",
                    300: "#B3B3B5",
                    400: "#7C7F85",
                },
                red: "#FE0000",
            },
        },
    },
    plugins: [],
};
