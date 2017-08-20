const path = require('path');
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CleanWebpackPlugin = require('clean-webpack-plugin')

module.exports = function (opt = {}) {
    console.log('env', process.env.NODE_ENV)
    const plugins = [
        new HtmlWebpackPlugin({
            template:__dirname+'/src/index.html',
            inject:true,
            // chunks:['common.js']
        })
    ]
    if (process.env.NODE_ENV === 'production') {
        plugins.push(
            new webpack.DefinePlugin({
                'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV || 'development')
            }),
            new webpack.EnvironmentPlugin(['NODE_ENV']),
            new CleanWebpackPlugin(
            ['dist/index.*.js','dist/common.*.js',],　 //匹配删除的文件
            {
                root: __dirname,       　　　　　　　　　　//根目录
                verbose:  false,        　　　　　　　　　　//开启在控制台输出信息
                dry:      false        　　　　　　　　　　//启用删除文件
            }),
            new webpack.optimize.UglifyJsPlugin({ // 代码压缩
                compress: {
                    warnings: false
                }
            })
            // new webpack.optimize.CommonsChunkPlugin({ // 分别引用
            //     name: 'common',
            //     filename: 'common.[hash].js',
            // })
        )
    }
    return {
        entry: {
            main: './src/index.js',
            // common: ['react', 'redux', 'react-redux', 'react-dom']
        } ,
        output: {
            path: path.resolve(__dirname, 'dist'),
            // publicPath: "/",
            filename: opt.dev ? 'index.js' : 'index.[hash].js'
        },
        plugins: plugins,
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