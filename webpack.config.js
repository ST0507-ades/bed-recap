const { ProvidePlugin } = require('webpack');
const path = require('path');

module.exports = {
    entry: {
        App: './react/output/App.js',
        RetrieveAllPage: './react/output/RetrieveAllPage.js',
        RetrievePage: './react/output/RetrievePage.js',
    },
    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, 'public/react'), // Output to ./public/react
    },
    mode: 'development',
    watch: true,
    plugins: [
        // Automatically import react
        new ProvidePlugin({
            React: 'react',
        }),
    ],
};
