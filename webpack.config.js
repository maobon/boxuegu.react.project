/**
 * webpack config
 * webpack 构建打包配置文件
 */
console.log('project building...');

const path = require('path');
const webpack = require('webpack');

const ExtractTextPlugin = require('extract-text-webpack-plugin');
var CopyWebpackPlugin = require('copy-webpack-plugin');
const HTMLPlugin = require('html-webpack-plugin');

const obj = {
    entry: {
        main: ['./src/main.js'],
        vendor: ['react', 'react-dom', 'react-router-dom']
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].js?[hash]'
    },
    module: {
        rules: [
            {
                // 处理css
                test: /\.css$/,
                use: ExtractTextPlugin.extract({
                    use: 'css-loader'
                })
            },
            {
                // 处理Less
                test: /\.less$/,
                use: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: ['css-loader', 'less-loader']
                })
            },
            {
                // 处理js 排除node_modules文件夹
                test: /\.js$/,
                exclude: /(node_modules)/,
                use: 'babel-loader'
            },
            {
                test: /\.(jpg|jpeg|bmp|png|gif|ico)$/,
                use: 'file-loader?name=./images/[name].[ext]?[hash]'
            },
            {
                test: /\.(ttf|eot|svg|woff|woff2)$/,
                use: 'file-loader?name=./fonts/[name].[ext]?[hash]'
            }
        ]
    },
    plugins: [
        new HTMLPlugin({
            template: './index.html'
        }),
        new webpack.optimize.UglifyJsPlugin(),
        new ExtractTextPlugin('all.css'),
        new webpack.ProvidePlugin({
            jQuery: 'jquery',
            $: 'jquery'
        }),
        // 最终将依赖的三方js库打包为 vendor.js文件
        // mainfest.js 为webpack打包过程中自己生成的文件
        new webpack.optimize.CommonsChunkPlugin({
            name: ['vendor', 'mainfest']
        }),
        // 单纯拷贝资源文件
        new CopyWebpackPlugin([
            {
                context: 'src/images',
                from: '*',
                to: 'images'
            }
        ])
    ]
};

module.exports = obj;
