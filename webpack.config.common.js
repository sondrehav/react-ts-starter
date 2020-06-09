const webpack = require('webpack');
const path = require('path');
const { argv } = require('yargs');

const packageJson = require('./package.json');

module.exports = {
    devtool: 'source-map',
    entry: [path.resolve('src', 'index.tsx')],
    module: {
        rules: [
            {
                test: /\.(ts|tsx|js|jsx)$/,
                include: /src/,
                use: ['babel-loader']
            },
            {
                test: /\.less/,
                include: [/src/],
                use: [
                    'style-loader',
                    'css-loader',
                    'postcss-loader',
                    {
                        loader: 'less-loader',
                        options: {
                            lessOptions: {
                                paths: [path.resolve(__dirname, 'assets')],
                                rewriteUrls: true
                            }
                        }
                    }
                ]
            },
            {
                test: /\.ttf/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            name: '[name].[ext]',
                            outputPath: 'fonts/'
                        }
                    }
                ]
            },
            {
                test: /\.css/,
                include: [/src/],
                use: ['style-loader', 'css-loader']
            },
            {
                test: /\.svg$/,
                include: /src/,
                use: ['svg-url-loader']
            }
        ]
    },
    resolve: {
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
        modules: ['./node_modules/', './src/', './assets'],
        alias: {
            '@': path.resolve(__dirname, 'src/')
        }
    },
    output: {
        path: path.resolve('dist'),
        publicPath: '/',
        filename: `${packageJson.name}.js`,
        chunkFilename: `${packageJson.name}.[id].js`
    },
    plugins: [
        new webpack.EnvironmentPlugin({
            CLIENT_VERSION: argv.buildVersion || 'no_specified',
            CLIENT_NAME: packageJson.name
        })
    ]
};
