var path = require('path');
var webpack = require('webpack');

module.exports = {
    devtool: 'source-map',
    port: '7777',
    url: 'http://localhost:7777',
    entry: [
        'webpack-hot-middleware/client',
        './src/index'
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
                presets: ['es2015', 'stage-0', 'react'],
                include: path.join(__dirname, 'src')
            },
            {
                test: /\.jsx$/,
                loader: 'babel-loader',
                exclude: /node_modules/,
                query: {
                    presets: ['react', 'stage-0', 'es2015']
                }
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
            },
            {
                test: /\.scss/,
                loader: 'style-loader!css-loader!sass-loader'
            }
        ]
    }
};
