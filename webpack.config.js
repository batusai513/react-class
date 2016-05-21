var path = require('path');
var webpack = require('webpack');
var HTMLWebpackPlugin = require('html-webpack-plugin');
var HTMLWebpackPluginConfig = new HTMLWebpackPlugin({
	template: __dirname + '/app/index.html',
	filename: 'index.html',
	inject: 'body'
});

function getSomething(){
	console.log("asdasdasdasdasd", process.env.npm_lifecycle_event);
	console.log(process.env.NODE_ENV);
}

module.exports = {
	entry: [
		__dirname + '/app/index.js'
	],
	output: {
		path: __dirname + '/dist',
		filename: 'index_bundle.js'
	},
	module: {
		loaders: [
			{test: /\.js$/,exclude: /node_modules/, loader: 'babel-loader'},
			{test: /\.css$/, loader: 'style-loader!css-loader'},
      {test: /\.(jpe?g|png|gif|svg)$/i, loaders: ['file']},
      // {test: /\.json$/, loaders: ['json']},
      {test: /\.otf(\?\S*)?$/, loader: 'url-loader?limit=10000'},
      {test: /\.eot(\?\S*)?$/, loader: 'url-loader?limit=10000'},
      {test: /\.svg(\?\S*)?$/, loader: 'url-loader?mimetype=image/svg+xml&limit=10000'},
      {test: /\.ttf(\?\S*)?$/, loader: 'url-loader?mimetype=application/octet-stream&limit=10000'},
      {test: /\.woff2?(\?\S*)?$/, loader: 'url-loader?mimetype=application/font-woff&limit=10000'}
		]
	},
	plugins: [
		HTMLWebpackPluginConfig
	]
}

getSomething();