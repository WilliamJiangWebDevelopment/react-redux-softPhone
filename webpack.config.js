var path = require('path');
var webpack = require('webpack');

module.exports = {
    devtool: 'source-map',
    port: '7777',
    url: 'http://localhost:7777',
    entry: [
        'webpack-hot-middleware/client',
        './src/softPhone'
    ],
    output: {
        path: path.join(__dirname, 'dist'),
        filename: 'bundle.js',
        publicPath: '/static/'
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoErrorsPlugin()
    ],
    module: {
        loaders: [
            // js
            {
                test: /\.js$/,
                loaders: ['babel-loader'],
                presets: ['es2015', 'react'],
                include: path.join(__dirname, 'src')
            },
            // CSS
            {
                test: /\.styl$/,
                include: path.join(__dirname, 'src/styles'),
                loader: 'style-loader!css-loader!stylus-loader'
            },
            {
                test: /\.css$/,
                include: [
                    path.resolve(__dirname, 'src/styles')
                ],
                loader: 'style-loader!css-loader'
            }
        ]
    }
};
