var path = require('path');
var webpack = require('webpack');

module.exports = {
    entry: path.resolve(__dirname, 'entry.js'),
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'main.js'
    },
    module:{
        rules:[
            { test: /\.js$/, use: ['babel-loader'], include: path.join(__dirname, 'src') },
        ]
    },
}