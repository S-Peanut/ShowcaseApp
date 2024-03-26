const { faL } = require('@fortawesome/free-solid-svg-icons');

/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./src/**/*.{html,ts}', './projects/**/*.{html,ts}'],
    theme: {
        extend: {},
    },
    plugins: [
        require('postcss-import'),
        require('@tailwindcss/forms'),
        require('tailwindcss'),
        require('autoprefixer'),
    ]
}