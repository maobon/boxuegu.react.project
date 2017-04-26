/**
 * 本文件用于指引webpack构建项目的配置文件
 * 这里的代码是最终是node去解析
 *
 * JSX代码 浏览器不认识 需要使用webpack打包合并转化为ES5的代码
 */

const path = require('path')
// npm install html-webpack-plugin --save-dev
const htmlplugin = require('html-webpack-plugin')
// npm install webpack --save-dev
const webpack = require('webpack')

const obj = {
    entry: './src/main.js', // 入口路径
    output: {
        // 构建生成最终文件的路径
        path: path.resolve(__dirname, 'dist'),
        filename: 'build.js'
    },
    module: {
        loaders: [
            {
                // npm install css-loader style-loader --save-dev
                // 对CSS进行处理
                test: /\.css$/,
                loader: 'style-loader!css-loader'

            },
            {
                // npm install less-loader less --save-dev
                // 对Less进行处理
                test: /\.less$/,
                loader: 'style-loader!css-loader!less-loader'
            },
            // sass文件处理起来比less文件特殊 目前有两种类型的sass文件
            // {
            //   // npm install sass-loader node-sass --save-dev
            //    // 对sass进行处理,sass的文件后缀是scss
            //   test:/\.scss$/,
            //   loader:'style-loader!css-loader!sass-loader'
            // },
            {
                // npm install babel-loader babel-core babel-preset-es2015 babel-preset-react --save-dev
                // 对es6及react语法进行处理
                test: /\.js$/,
                // 匹配所有的js,将js中的es6及react语法转换为es5

                // exclude用来忽略文件夹的
                // babel-loader会忽略node_modules文件夹中的文件
                exclude: /(node_modules)/,
                loader: 'babel-loader'
                // 如果用了babel-loader需要在webpack.config.js所在目录新建 .babelrc文件, 还支持转换es7
            },
            {
                // npm install file-loader --save-dev
                // 对静态资源文件(图片资源)进行处理
                test: /\.(jpg|jpeg|bmp|png|gif|ico)$/,

                // ?name=./img/[name].[ext] 表示把图片复制到dist目录中的
                // img目录中,文件名保持和原文件名一致

                // ?name=./img/[name].[ext]?[hash]
                // 表示会将原来代码中对图片的引入url中加入随机的值
                // 原来: url('./a.jpg')
                // 处理后: url('./a.jpg?slfkdaljfalskdfaf')

                loader: 'file-loader?name=./images/[name].[ext]?[hash]'
                // loader: 'url-loader?limit=8192&name=images/[hash:8].[name].[ext]'
            },
            {
                // 对font字体文件进行处理
                test: /\.(ttf|eot|svg|woff|woff2)$/,
                loader: 'file-loader?name=./fonts/[name].[ext]?[hash]'
            }
        ]
    },
    plugins: [
        // 自动复制html并引入bundle.js
        new htmlplugin({
            template: './index.html'
        }),

        // 压缩js代码
        // 或者 webpack -p 也可以压缩 打包合并js代码处理静态资源的同时 可以对js代码进行压缩处理
        new webpack.optimize.UglifyJsPlugin()
    ]
}

module.exports = obj


// 所需npm下载安装的包
// npm install ... 使用webpack需要通过npm安装下面的node模块 --save-dev

// html-webpack-plugin
// webpack
// style-loader
// css-loader
// less-loader
// less
// sass-loader
// node-sass
// file-loader
// babel-loader
// babel-core
// babel-preset-es2015
// babel-preset-react
