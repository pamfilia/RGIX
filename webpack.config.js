let path = require('path');
let webpack = require('webpack');
let CleanWebpackPlugin = require('clean-webpack-plugin');
const { CheckerPlugin } = require('awesome-typescript-loader');
let pathsToClean = [
    'dist/script/*.*',
];
let cleanOptions = {
    verbose: false,
    dry: false
}
module.exports = {
    entry: {
        main: './src/script/pages/index.tsx',
        reports: './src/script/pages/reports.tsx',
        vendor: ['jquery', 'tether', 'bootstrap']
    },
    devtool: 'source-map',
    output: {
        filename: '[name].js',//[chunkhash]
        path: path.resolve(__dirname, 'dist/script')
    },
    resolve: {
        extensions: ['.ts', '.tsx', '.js', '.json']
    },
    module: {
        rules: [
            { test: /\.tsx?$/, loader: ['awesome-typescript-loader'] },
            { test: /\.(ttf|eot|svg|woff(2)?)(\?[a-z0-9]+)?$/, loader: 'file-loader', },
            { enforce: 'pre', test: /\.js$/, loader: "source-map-loader" }
        ]
    },
    plugins: [
        new CheckerPlugin(),
        new CleanWebpackPlugin(pathsToClean, cleanOptions),
        new webpack.optimize.CommonsChunkPlugin({
            name: 'vendor',
            minChunks: function (module) {
                return module.context && module.context.indexOf('node_modules') !== -1;
            }
        }),
        new webpack.optimize.CommonsChunkPlugin({
            name: 'manifest'
        }),
        new webpack.ProvidePlugin({
            $: "jquery",
            jquery: "jquery",
            "window.jQuery": "jquery",
            jQuery: "jquery",
            "window.Tether": 'tether',
            "Tether": 'tether'
        })
    ]
};