var path 		= require('path')
var webpack = require('webpack')

module.exports = {
	entry: {
		main: './js/main.js',
		vendor: ['jquery', 'bootstrap']
	},
	output: {
		filename: '[name].js',
	},
	plugins: [
		new webpack.optimize.CommonsChunkPlugin('vendor', 'vendor.js', Infinity),
		new webpack.ProvidePlugin({
			$: 'jquery',
			jQuery: 'jquery'
		})
	],
	module: {
		loaders: [
			{
				test: /.jsx?$/,
				loader: 'babel-loader',
				exclude: /node_modules/,
				query: {
					presets: ['es2015', 'react']
				}
			}
		]
	}
}
