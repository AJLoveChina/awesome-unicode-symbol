const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
    entry: {
        index: "./src/index.js",
    },
    module: {
        rules: [
            {
                include: [path.resolve(__dirname, 'src')],
                loader: 'babel-loader',

                options: {
                    plugins: ['syntax-dynamic-import'],

                    presets: [
                        [
                            '@babel/preset-env',
                            {
                                modules: false
                            }
                        ]
                    ]
                },

                test: /\.js$/
            },
            {
                test: /\.(less|css)$/,

                use: [
                    'style-loader',
                    'css-loader',
                    'less-loader',
                ]
            }
        ]
    },

    resolve: {
        extensions: ['.js', '.css', '.less']
    },
    output: {
        path: path.resolve(__dirname, './dist'),
        chunkFilename: '[name].[chunkhash].js',
        filename: '[name].[chunkhash].js',
        publicPath: "./"
    },

    mode: 'development',

    devServer: {
        contentBase: './dist',
        disableHostCheck: true,
        port: 9000,
        open: false,
        publicPath: "/",
        writeToDisk: false,
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: "index.html",
        }),
        // copy custom static assets
        new CopyWebpackPlugin([
            {
                from: path.resolve(__dirname, './static'),
                to: 'static',
                ignore: ['.*']
            }
        ]),
        new CleanWebpackPlugin(),
    ],

    optimization: {
        splitChunks: {
            cacheGroups: {
                vendors: {
                    priority: -10,
                    test: /[\\/]node_modules[\\/]/
                }
            },

            chunks: 'async',
            minChunks: 1,
            minSize: 30000,
            name: true
        }
    }
};
