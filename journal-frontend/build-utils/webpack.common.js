const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");
module.exports = {
    entry: path.resolve(__dirname, '..', 'src/index.tsx'),
    watchOptions:{
        poll: true,
        ignored: "/node_modules/"
    },
    devServer: {
        hot: true,
        historyApiFallback: true,
        static: path.resolve(__dirname, '..', 'public'),
        compress: true,
        historyApiFallback: true,
        open: true,
        port: 'auto',
        client: {
            overlay: true,
        },
        proxy: {
            '/api': {
               
                target: 'http://localhost:1338',
                
                secure: false,
                changeOrigin: true,
                proxyTimeout: 5 * 60 * 1000,
                timeout: 5 * 60 * 1000,
            }}
    },
    target: "web",
    output: {
        filename: '[name][contenthash].js',
        path: path.resolve(__dirname, '..', "dist"),
        assetModuleFilename: 'images/[hash][ext][query]',
        clean: true,
        pathinfo: false,
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, '..', 'public/index.html'),
            title: 'Journal',
            filename: 'index.html',
        }),
    ],
    resolve: {
        modules: [__dirname, "src", "node_modules"],
        extensions: ["*", ".js", ".jsx", ".tsx", ".ts", 'json'],
        alias: {
            styles: path.resolve(__dirname, '..', 'src'),
            src: path.resolve(__dirname, '..', 'src'),
            
        }
    },
    module: {
        rules: [

            {
                test: /\.s?css$/,
                use: ["style-loader", "css-loader",
                    {
                        loader: 'postcss-loader',
                        options: {
                            postcssOptions: {
                                plugins: () => [autoprefixer()]
                            }
                        }
                    },
                    {
                        loader: 'sass-loader',
                        options: {
                            additionalData: `
                            @import "styles/scss/_variables.scss";
                            @import "styles/scss/_bem-mixin.scss";
                            @import "styles/scss/_medias.scss";
                        `
                        }
                    }
                ],
            },
            {
                test: /\.(png|svg|jpg|gif)$/i,
                type: 'asset/resource',
            },
            {
                test: /\.(woff,woff2,eot|ttf|otf)(\?v=[0-9]\.[0-9]\.[0-9])?$/i,
                type: 'asset/resource'
            },
        ],
    },
    optimization: {
        moduleIds: 'deterministic',
        runtimeChunk: 'single',
        splitChunks: {
            cacheGroups: {
                vendor: {
                    test: /[\\/]node_modules[\\/]/,
                    name: 'vendors',
                    priority: -10,
                    chunks: 'all'
                }
            }
        }
    },
};