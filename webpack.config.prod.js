const webpack = require('webpack')
const merge = require('webpack-merge')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')

const common = require('./webpack.config.common.js')

module.exports = merge(common, {
    mode: 'production',
    plugins: [
        new CleanWebpackPlugin(),
        new webpack.EnvironmentPlugin({ DEBUG: false }),
    ],
})
