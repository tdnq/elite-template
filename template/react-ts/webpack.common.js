/* eslint-disable import/newline-after-import */
/* eslint-disable global-require */
/* eslint-disable import/no-extraneous-dependencies */
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const isDevelopment = process.env.NODE_ENV === 'development';
module.exports = {
    entry: {
        app: './src/index.tsx',
    },
    plugins: [
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            template: 'public/index.html'
        }),
        new MiniCssExtractPlugin({
            filename: !isDevelopment ? '[name].[hash].bundle.css' : '[name].bundle.css',
            chunkFilename: !isDevelopment ? '[id].[hash].css' : '[id].css',
        }),
    ],
    resolve: {
        // Add resolvable extensions.
        extensions: [".wasm", ".ts", ".tsx", ".mjs", ".cjs", ".js", ".json"]
    },
    module: {
        rules: [
            {
                test: /\.s[ac]ss$/i,
                use: [
                    {
                        loader: MiniCssExtractPlugin.loader,
                        options: {
                            hmr: isDevelopment,
                        },
                    },
                    // Creates `style` nodes from JS strings
                    // 'style-loader',
                    // MiniCssExtractPlugin.loader,
                    // Translates CSS into CommonJS
                    {
                        loader: 'css-loader',
                        options: {
                            modules: {
                                localIdentName: "[name]__[local]___[hash:base64:5]",
                            },
                            sourceMap: isDevelopment,
                            importLoaders: 1
                        }
                    },
                    // Compiles Sass to CSS
                    'sass-loader'
                ],
            },
            {
                test: /\.(png|svg|jpg|gif)$/,
                use: [
                    'file-loader',
                ],
            },
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/,
                use: [
                    'file-loader',
                ],
            },
            {
                test: /\.tsx?$/,
                use: [
                    'ts-loader',
                ],
                exclude: /node_modules/
            }
        ],

    }
};