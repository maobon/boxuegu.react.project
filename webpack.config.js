var path = require('path');
var obj = {

    // 入口文件
    entry: './src/main.js',
    // 最终打包目标文件
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'build.js'
    },
    // 其它配置项
    module: {
        loaders: [
            {
                test: /\.less$/,
                // *这里要注意，写的顺序不能变!*
                loader: 'style-loader!css-loader!less-loader'
            },
            {
                test: /\.css$/,
                // *这里要注意，写的顺序不能变!*
                loader: 'style-loader!css-loader'
            },
            {
                test: /\.js/,
                loader: 'babel-loader'
            }
        ]
    }
};

module.exports = obj;