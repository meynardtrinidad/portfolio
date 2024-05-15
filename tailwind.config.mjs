/** @type {import('tailwindcss').Config} */
export default {
    content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
    theme: {
        extend: {
            colors: {
                project: {
                    gray: {
                        50: "#F8F8F8",
                        100: "#F2F2F2",
                        200: "#DCDCDC",
                        300: "#BDBDBD",
                        400: "#989898",
                        500: "#7C7C7C",
                        600: "#656565",
                        700: "#525252",
                        800: "#464646",
                        900: "#3D3D3D",
                        950: "#292929",
                    }
                }
            },
            boxShadow: {
                "project-button": `inset 0 2px 0 0 rgb(255 255 255 / 0.05), 0 1.5px 2px -1px rgb(0 0 0 / 0.25)`,
            },
            screens: {
                xs: "320px",
            },
        },
    },
    plugins: [],
}
