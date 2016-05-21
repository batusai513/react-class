import path from 'path';
import webpack from 'webpack';
import HTMLWebpackPlugin from 'html-webpack-plugin';
import ExtractTextPlugin from 'extract-text-webpack-plugin';

var env = process.env.NODE_ENV;

var PATHS = {
	app: path.join(__dirname, 'app'),
	build: path.join(__dirname, 'dist')
};

var HTMLWebpackPluginConfig = new HTMLWebpackPlugin({
	template: PATHS.app + '/index.html',
	filename: 'index.html',
	inject: 'body'
});

var productionPlugin = new webpack.DefinePlugin({
	'process.env': {
		NODE_ENV: JSON.stringify(env),
		__DEV__: env == 'production'
	}
});

var base = {
	entry: [
		PATHS.app
	],
	output: {
		path: PATHS.build,
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


const developmentConfig = {
  devtool: 'cheap-module-inline-source-map',
  devServer: {
    contentBase: PATHS.build,
    hot: true,
    inline: true,
    progress: true,
  },
  plugins: [HTMLWebpackPluginConfig, new webpack.HotModuleReplacementPlugin()]
}

const productionConfig = {
  plugins: [
  	HTMLWebpackPluginConfig,
  	productionPlugin
  ]
}

export default Object.assign({}, base, env == 'production' ? productionConfig : developmentConfig);

