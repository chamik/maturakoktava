module.exports = {
    mode: 'jit',
    content: [
        './build/**/*.{js,html}',
        './_site/**/*.{js,html}',
        './src/**/*.{js,html}',
    ],
    darkMode: 'media',
    theme: {
        extend: {},
    },
    variants: {
        extend: {
            fontFamily: {
                'sans': ['Comic Sans MS', 'sans-serif'],
                'mono': ['Roboto\ Mono', 'monospace'],
                'roadrage': ['Road Rage', 'monospace'],
            },
        },
    },
    plugins: [
        require('@tailwindcss/typography'),
    ],
}