/**
 * @author: HuRuiFeng
 * @file: webpack.config.cjs
 * @time: 2023/1/12 14:45
 * @project: nodejs-web-learning
 * @desc:
 */
module.exports = {
    entry: './main.cjs',
    output: {
        filename: 'bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: ["style-loader", "css-loader"]},
        ]
    }
}