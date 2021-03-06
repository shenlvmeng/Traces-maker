/* eslint-disable */
const path = require('path');

module.exports = {
    target: 'electron-renderer',
    entry: {
        index: './src/renderer/index',
    },
    // 产出路径
    output: {
        path: path.join(__dirname, '../../dist/assets/'),
        globalObject: 'this'
    },
    module: {
        rules: [
            {
                test: /\.(css|less)$/,
                use: [
                    {
                        loader: 'style-loader'
                    },
                    {
                        loader: 'css-loader'
                    },
                    {
                        loader: 'less-loader'
                    }
                ]
            },
            {
                test: /\.tsx?$/,
                exclude: /node_modules/,
                use: [{
                    loader: 'ts-loader',
                    options: {
                        transpileOnly: true
                    }
                }]
            },
            {
                test: /\.html$/,
                loader: 'html-loader',
                options: {
                    attrs: [],
                    minimize: true,
                    collapseWhitespace: false,
                    removeAttributeQuotes: false
                }
            }
        ]
    },
    resolve: {
        modules: ["node_modules"],
        extensions: ['.js', '.ts', '.tsx', '.json']
    }
};
