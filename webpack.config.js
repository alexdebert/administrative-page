/**
 * @overview Webpack configuration.
 *
 */

const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const webpack = require('webpack');
const path = require('path');

const OUTPUT_PATH = 'dist';

const config = {
	entry: ['babel-polyfill', './src/index.js'],

	output: {
		path: path.resolve(__dirname, OUTPUT_PATH),
		filename: 'bundle.js'
	},

	module: {
		rules: [
			{
				test: /\.(js|jsx)$/,
				exclude: /node_modules/,
				use: [
					{
						loader: 'babel-loader',
						options: {
							presets: ['env', 'react'],
							plugins: [
								'transform-class-properties',
								'transform-object-rest-spread'
							]
						}
					},{
						loader: 'eslint-loader'
					}
				]
			},
      {
        test: /\.scss$/,
        use: [
          {
            loader: 'style-loader'
          }, {
            loader: 'css-loader'
          },{
            loader: 'sass-loader'
          }
        ]
      },
			{
				test: /\.css$/,
				use: ['style-loader', 'css-loader']
			},
			{
				test: /\.html$/,
				use: ['raw-loader']
			}
		]
	},

	resolve: {
		extensions: [
			'.js', '.jsx', '.json'
		]
	},

	devServer: {
		contentBase: path.join(__dirname, OUTPUT_PATH),
		compress: true,
		port: 9000,
		historyApiFallback: true
	},

	// Webpack source maps:
	devtool: 'cheap-eval-source-map',

	// Webpack plugins:
	plugins: [
		new CleanWebpackPlugin([OUTPUT_PATH]),

		new HtmlWebpackPlugin({template: './src/index.html'})
	]
};

module.exports = config;