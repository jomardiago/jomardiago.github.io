const path = require('path');
const Dotenv = require('dotenv-webpack');
const { DefinePlugin } = require('webpack');

module.exports = {
    mode: 'production',
    plugins: [
        new Dotenv({
            path: path.resolve(__dirname, '..', './.env.production'),
        }),
        new DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify('production')
        })
    ],
    devtool: 'source-map',
};