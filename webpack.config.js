let path = require('path');
let webpack = require('webpack');
let ExtractTextPlugin = require('extract-text-webpack-plugin');
let extractCSS = new ExtractTextPlugin('../styles/styles.css');
module.exports = {
    target: 'web',
    watch: true,
    entry: {
        bundle: [path.resolve(__dirname, 'src/script/pages') + '/index.js'],
        vendors: ['react', 'jquery']
    },
    output: {
        path: path.resolve(__dirname, 'dist/script'),
        filename: '[name].js'
    },
    module: {
        rules: [{
            test: /\.(js)$/,
            loaders: ["babel-loader"],
            exclude: [
                path.resolve(__dirname, "/node_modules/"),
                path.resolve(__dirname, "/gulp-tasks/"),
            ],
        }
        ]
    },
    plugins: [
        extractCSS,
        new webpack.ProvidePlugin({
            $: 'jquery',
            jQuery: 'jquery',
            "window.jQuery": "jquery"
        })
    ]
};