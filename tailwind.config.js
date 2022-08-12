/* eslint-disable */
const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
    content: [
        './src/pages/**/*.{js,jsx}',
        './docs/**/*.{md,mdx}',
    ],
    corePlugins: {
        preflight: false,
    },
    theme: {
        extend: {
            colors: {
                huntergreen: {
                    DEFAULT: '#39603E',
                    100: '#779F7C',
                    200: '#538059',
                    300: '#214E27',
                    400: '#103E16',
                },
                rustyred: {
                    DEFAULT: '#DE3C4B',
                    100: '#F98D98',
                    200: '#F66371',
                    300: '#C21929',
                    400: '#9A0816',
                },
                alabaster: {
                    DEFAULT: '#DADED4',
                    100: '#FFFFFF',
                    200: '#F1F2EF',
                    300: '#B3BBA8',
                    400: '#919C7F',
                },
                bdark: {
                    DEFAULT: 'var(--palette-dark)',
                    100: 'var(--palette-dark)',
                },
                border: 'var(--palette-black-olive)',
                background: {
                    DEFAULT: 'var(--palette-white)',
                    100: 'var(--palette-alabaster)',
                    200: 'var(--palette-black-olive)',
                    300: 'var(--docs-color-background-300)',
                },
            },
        },
    },
};