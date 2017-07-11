var path = require('path');
var webpack = require('webpack');

module.exports = {
    entry: [
        'webpack-hot-middleware/client',
        './js/index.js',
    ],
    output: {
        path: __dirname + '/build',
        filename: 'bundle.js',
        publicPath: '/static/',
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                }
            },
            {
                test: /\.(scss|css)$/,
                use: ['style-loader', 'css-loader', 'sass-loader'],
            },
        ]
    },

    plugins: [
        // new webpack.NoErrorsPlugin(),
        new webpack.HotModuleReplacementPlugin()
    ],
}