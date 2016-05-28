var path 		= require('path')
var webpack = require('webpack')

module.exports = {
	entry: './js/main.js',
	output: {
		path: __dirname, filename: 'bundle.js'
	},
	module: {
		test: /.jsx?$/,
		loader: 'babel-loader',
		exclude: /node_modules/,
		query: {
			preset: ['es2015', 'react']
		}
	}
}