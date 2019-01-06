const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: {
        races: "./main/webapp/scripts/races.js",
        results: "./main/webapp/scripts/results.js",
    },
    output: {
        path: __dirname + "/main/webapp/dist/",
        filename: "scripts/[name].bundle.js"
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: "./main/webapp/races.html",
            filename: "races.html",
            inject: 'head',
            chunks: ['races']
        }),
        new HtmlWebpackPlugin({
            template: "./main/webapp/results.html",
            filename: "results.html",
            inject: 'head',
            chunks: ['results']
        })
    ]
};