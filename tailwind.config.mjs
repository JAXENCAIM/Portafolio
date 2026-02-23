/** @type {import('tailwindcss').Config} */
export default {
    content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
    theme: {
        extend: {
            colors: {
                neutral: {
                    950: '#0a0a0a', // Deep neutral base for dark mode
                    900: '#171717',
                    800: '#262626',
                },
                accent: {
                    primary: '#00d1ff', // Electric cyan for primary interaction
                    secondary: '#ff2d55', // High-energy pink for highlights
                    vibrant: '#7000ff', // Futuristic purple for gradients
                }
            },
            fontFamily: {
                display: ['Outfit', 'sans-serif'], // Google Fonts: Outfit
                body: ['Inter', 'sans-serif'],   // Google Fonts: Inter
            },
            letterSpacing: {
                tightest: '-.075em',
                tighter: '-.05em',
            }
        },
    },
    plugins: [],
};
