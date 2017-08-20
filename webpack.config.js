const path = require('path');

module.exports = function (opt = {}) {
    console.log(opt)
    return {
        entry: './src/index.js' ,
        output: {
            path: path.resolve(__dirname, 'dist'),
            publicPath: "/",
            filename: opt.dev ? 'index.js' : 'index.js?[chunkhash]'
        },
        module: {
            rules: [{
                test: /\.js$/,
                exclude: [/node_module/],
                use: [{
                    loader: 'babel-loader',
                    options: {presets: ['es2015', 'react']}
                }]
            }]
        },
        devServer: {
            contentBase: path.join(__dirname, "./src"),
            compress: true,
            inline: true,
            // hot: true,
            port: 9000
        }
    }
}