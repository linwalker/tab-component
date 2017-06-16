var path = require('path');
var webpack = require('webpack');

module.exports = {
    entry: [
        // 'webpack-hot-middleware/client',
        './js/index.js',
    ],
    output: {
        path: __dirname +  '/build',
        filename: 'bundle.js',
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                include: [
                    path.resolve(__dirname, 'js'),
                ],
                exclude: /node_modules/,
                loaders: ['babel-loader'],
            },
        ]
    },
    // plugins: [
    //     new webpack.NoErrorsPlugin(),
    //     new webpack.HotModuleReplacementPlugin()
    // ],
}