const path = require("path");
const webpack = require("webpack");

module.exports = {

    mode: 'development',
    entry: [
        'webpack-hot-middleware',
        path.join(__dirname, './client/index.js')],

    output: {
        path: path.join(__dirname, './client'),
        filename: 'bundle.js',
    },
    module: {
        rules: [
            {
                test: /\.js|\.jsx?$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
                query: {
                    presets: ['@babel/preset-env', '@babel/preset-react']
                }
            },
            {
                test: /\.css$/i,
                use: ['style-loader', 'css-loader'],
              },
              {
                test: /\.(png|jpe?g|gif|svg)$/i,
                loader: 'file-loader'
              }

        ]
    },
    plugins: [
        new webpack.NoEmitOnErrorsPlugin(),
        new webpack.optimize.OccurrenceOrderPlugin(),
        new webpack.HotModuleReplacementPlugin()
    ],


    resolve: {
        extensions: ['.js','.jsx','.css']
    }


}
