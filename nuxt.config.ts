// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    ssr: false,
    css: ["@quasar/extras/eva-icons/eva-icons.css"],
    modules: [
        "@nuxtjs/tailwindcss",
        "nuxt-quasar-ui",
        "@pinia/nuxt",
        "@nuxtjs/google-fonts",
    ],

    googleFonts: {
        families: {
            Roboto: true,
            Poppins: [400, 500, 600, 700],
            Sen: [400, 600, 700],
        },
    },

    tailwindcss: {
        cssPath: "~/assets/css/tailwind.css",
        configPath: "./tailwind.config.js",
    },

    quasar: {
        config: {
            brand: {
                primary: "#5465ff",
                secondary: "#7C7F85",
            },
        },
        plugins: ["Notify"],
    },

    pinia: {
        autoImports: ["defineStore", "acceptHMRUpdate"],
    },
    imports: {
        dirs: ["./stores", "./composables"],
    },

    devtools: { enabled: true },
});
