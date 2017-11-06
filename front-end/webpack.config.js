let path = require('path');
let webpack = require('webpack');
let CleanWebpackPlugin = require('clean-webpack-plugin');
//let UglifyJSPlugin = require('uglifyjs-webpack-plugin')
let { CheckerPlugin } = require('awesome-typescript-loader');
let pathsToClean = [
    'dist/script/*.*',
];
let cleanOptions = {
    verbose: false,
    dry: false
}
module.exports = {
    entry: {
        dashboard: './src/script/pages/index.tsx',
        reports: './src/script/pages/reports.tsx'
    },
    devtool: '#source-map',
    output: {
        filename: '[name].js',//[chunkhash]
        path: path.resolve('./dist/script')
    },
    resolve: {
        extensions: ['.ts', '.tsx', '.js', '.json']
    },
    module: {
        rules: [
            { test: /\.(ts|tsx)?$/, loader: ['awesome-typescript-loader'] },
            { test: /\.(ttf|eot|svg|woff(2)?)(\?[a-z0-9]+)?$/, loader: 'file-loader', },
            { enforce: 'pre', test: /\.(ts|tsx)$/, loader: "source-map-loader" }
        ]
    },
    plugins: [
        new CheckerPlugin(),
        new CleanWebpackPlugin(pathsToClean, cleanOptions),
        new webpack.optimize.CommonsChunkPlugin({
            name: 'vendor',
            minChunks: function (module) {
                return module.context && module.context.indexOf("node_modules") !== -1;
              }
        }),
        new webpack.ProvidePlugin({
            $: "jquery",
            jquery: "jquery",
            "window.jQuery": "jquery",
            jQuery: "jquery",
            Popper: ['popper.js', 'default']
        }),
        // new webpack.optimize.UglifyJsPlugin({
        //     compress: {
        //         sequences: true,  // join consecutive statemets with the “comma operator”
        //         properties: true,  // optimize property access: a["foo"] → a.foo
        //         dead_code: true,  // discard unreachable code
        //         drop_debugger: true,  // discard “debugger” statements
        //         unsafe: false, // some unsafe optimizations (see below)
        //         conditionals: true,  // optimize if-s and conditional expressions
        //         comparisons: true,  // optimize comparisons
        //         evaluate: true,  // evaluate constant expressions
        //         booleans: true,  // optimize boolean expressions
        //         loops: true,  // optimize loops
        //         unused: true,  // drop unused variables/functions
        //         hoist_funs: true,  // hoist function declarations
        //         hoist_vars: false, // hoist variable declarations
        //         if_return: true,  // optimize if-s followed by return/continue
        //         join_vars: true,  // join var declarations
        //         cascade: true,  // try to cascade `right` into `left` in sequences
        //         side_effects: true,  // drop side-effect-free statements
        //         warnings: false  // warn about potentially dangerous optimizations/code
        //     },
        //     mangle: { builtins: true },
        //     sourceMap: true,
        //     output: {
        //         comments: false
        //     }
        // })
    ]
};