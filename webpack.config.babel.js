import path from 'path';
import webpack from 'webpack';
import HTMLWebpackPlugin from 'html-webpack-plugin';
import ExtractTextPlugin from 'extract-text-webpack-plugin';

var HTMLWebpackPluginConfig = new HTMLWebpackPlugin({
	template: __dirname + '/app/index.html',
	filename: 'index.html',
	inject: 'body'
});

export default {
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